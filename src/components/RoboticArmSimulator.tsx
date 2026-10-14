"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Shuffle,
  CheckCircle2,
  AlertTriangle,
  Crosshair,
  Activity,
  Sliders,
  HelpCircle,
} from "lucide-react";

export type SolverMode = "newton-exact" | "newton-fd" | "broyden" | "compare";

interface IterationRecord {
  step: number;
  theta: [number, number];
  pos: [number, number];
  error: number;
  J: [[number, number], [number, number]];
  detJ: number;
}

interface SolverResult {
  converged: boolean;
  iterations: number;
  finalTheta: [number, number];
  finalPos: [number, number];
  finalError: number;
  history: IterationRecord[];
  jacobianEvaluations: number;
}

// Forward Kinematics (evalRobot2D)
function evalRobot2D(
  l: [number, number],
  theta: [number, number]
): { pos: [number, number]; J: [[number, number], [number, number]] } {
  const [l1, l2] = l;
  const [th1, th2] = theta;

  const x = l1 * Math.cos(th1) + l2 * Math.cos(th1 + th2);
  const y = l1 * Math.sin(th1) + l2 * Math.sin(th1 + th2);
  const pos: [number, number] = [x, y];

  const dx_dth1 = -l1 * Math.sin(th1) - l2 * Math.sin(th1 + th2);
  const dx_dth2 = -l2 * Math.sin(th1 + th2);
  const dy_dth1 = l1 * Math.cos(th1) + l2 * Math.cos(th1 + th2);
  const dy_dth2 = l2 * Math.cos(th1 + th2);

  const J: [[number, number], [number, number]] = [
    [dx_dth1, dx_dth2],
    [dy_dth1, dy_dth2],
  ];

  return { pos, J };
}

// Finite-Difference Jacobian Approximation (fdJacob2D)
function fdJacob2D(
  l: [number, number],
  theta: [number, number],
  h: number
): [[number, number], [number, number]] {
  const p1_plus = evalRobot2D(l, [theta[0] + h, theta[1]]).pos;
  const p1_minus = evalRobot2D(l, [theta[0] - h, theta[1]]).pos;
  const dpos_dtheta1: [number, number] = [
    (p1_plus[0] - p1_minus[0]) / (2 * h),
    (p1_plus[1] - p1_minus[1]) / (2 * h),
  ];

  const p2_plus = evalRobot2D(l, [theta[0], theta[1] + h]).pos;
  const p2_minus = evalRobot2D(l, [theta[0], theta[1] - h]).pos;
  const dpos_dtheta2: [number, number] = [
    (p2_plus[0] - p2_minus[0]) / (2 * h),
    (p2_plus[1] - p2_minus[1]) / (2 * h),
  ];

  return [
    [dpos_dtheta1[0], dpos_dtheta2[0]],
    [dpos_dtheta1[1], dpos_dtheta2[1]],
  ];
}

// 2x2 Matrix Inverse Solver with Damped Least-Squares Fallback for Singularities
function solve2x2(
  J: [[number, number], [number, number]],
  d: [number, number]
): [number, number] {
  const a = J[0][0];
  const b = J[0][1];
  const c = J[1][0];
  const d_j = J[1][1];
  const det = a * d_j - b * c;

  // Regularize if near singularity to avoid exploding angular steps
  if (Math.abs(det) < 1e-6) {
    const lambda = 0.05;
    const JTJ_00 = a * a + c * c + lambda * lambda;
    const JTJ_01 = a * b + c * d_j;
    const JTJ_10 = b * a + d_j * c;
    const JTJ_11 = b * b + d_j * d_j + lambda * lambda;
    const detJTJ = JTJ_00 * JTJ_11 - JTJ_01 * JTJ_10;

    if (Math.abs(detJTJ) > 1e-12) {
      const invJTJ_00 = JTJ_11 / detJTJ;
      const invJTJ_01 = -JTJ_01 / detJTJ;
      const invJTJ_10 = -JTJ_10 / detJTJ;
      const invJTJ_11 = JTJ_00 / detJTJ;

      const JTd_0 = a * d[0] + c * d[1];
      const JTd_1 = b * d[0] + d_j * d[1];

      return [
        invJTJ_00 * JTd_0 + invJTJ_01 * JTd_1,
        invJTJ_10 * JTd_0 + invJTJ_11 * JTd_1,
      ];
    }
  }

  return [
    (d_j * d[0] - b * d[1]) / det,
    (-c * d[0] + a * d[1]) / det,
  ];
}

// Newton's Method Solver
function solveNewton(
  l: [number, number],
  theta0: [number, number],
  target: [number, number],
  maxIter: number,
  tol: number,
  useFD: boolean = false,
  h: number = 0.01
): SolverResult {
  const theta: [number, number] = [theta0[0], theta0[1]];
  const history: IterationRecord[] = [];
  let jacobianEvals = 0;
  let converged = false;

  for (let k = 1; k <= maxIter; k++) {
    const { pos, J: analyticalJ } = evalRobot2D(l, theta);
    const J = useFD ? fdJacob2D(l, theta, h) : analyticalJ;
    jacobianEvals += useFD ? 4 : 1; // FD takes 4 evaluations of forward kinematics

    const diff: [number, number] = [target[0] - pos[0], target[1] - pos[1]];
    const err = Math.hypot(diff[0], diff[1]);
    const detJ = J[0][0] * J[1][1] - J[0][1] * J[1][0];

    history.push({
      step: k,
      theta: [theta[0], theta[1]],
      pos,
      error: err,
      J,
      detJ,
    });

    if (err < tol) {
      converged = true;
      break;
    }

    const s_k = solve2x2(J, diff);
    theta[0] += s_k[0];
    theta[1] += s_k[1];
  }

  const finalEval = evalRobot2D(l, theta);
  const finalError = Math.hypot(
    target[0] - finalEval.pos[0],
    target[1] - finalEval.pos[1]
  );

  return {
    converged: converged || finalError < tol,
    iterations: history.length,
    finalTheta: theta,
    finalPos: finalEval.pos,
    finalError,
    history,
    jacobianEvaluations: jacobianEvals,
  };
}

// Broyden's Quasi-Newton Method Solver
function solveBroyden(
  l: [number, number],
  theta0: [number, number],
  target: [number, number],
  maxIter: number,
  tol: number
): SolverResult {
  const theta: [number, number] = [theta0[0], theta0[1]];
  let { pos: current_pos, J } = evalRobot2D(l, theta);
  let d: [number, number] = [current_pos[0] - target[0], current_pos[1] - target[1]];
  const history: IterationRecord[] = [];
  const jacobianEvals = 1; // Only 1 initial Jacobian evaluation!
  let converged = false;

  for (let k = 1; k <= maxIter; k++) {
    const err = Math.hypot(d[0], d[1]);
    const detJ = J[0][0] * J[1][1] - J[0][1] * J[1][0];

    history.push({
      step: k,
      theta: [theta[0], theta[1]],
      pos: current_pos,
      error: err,
      J: [
        [J[0][0], J[0][1]],
        [J[1][0], J[1][1]],
      ],
      detJ,
    });

    if (err < tol) {
      converged = true;
      break;
    }

    // s_k = -J \ d
    const s_k = solve2x2(J, [-d[0], -d[1]]);
    theta[0] += s_k[0];
    theta[1] += s_k[1];

    const { pos: new_pos } = evalRobot2D(l, theta);
    const d_new: [number, number] = [
      new_pos[0] - target[0],
      new_pos[1] - target[1],
    ];
    const y_k: [number, number] = [d_new[0] - d[0], d_new[1] - d[1]];

    const s_sq = s_k[0] * s_k[0] + s_k[1] * s_k[1];
    if (s_sq > 1e-12) {
      const Js_k: [number, number] = [
        J[0][0] * s_k[0] + J[0][1] * s_k[1],
        J[1][0] * s_k[0] + J[1][1] * s_k[1],
      ];
      const diff: [number, number] = [y_k[0] - Js_k[0], y_k[1] - Js_k[1]];

      // Broyden rank-1 update: J = J + (y_k - J*s_k)*s_k' / (s_k'*s_k)
      J = [
        [
          J[0][0] + (diff[0] * s_k[0]) / s_sq,
          J[0][1] + (diff[0] * s_k[1]) / s_sq,
        ],
        [
          J[1][0] + (diff[1] * s_k[0]) / s_sq,
          J[1][1] + (diff[1] * s_k[1]) / s_sq,
        ],
      ];
    }

    current_pos = new_pos;
    d = d_new;
  }

  const finalEval = evalRobot2D(l, theta);
  const finalError = Math.hypot(
    target[0] - finalEval.pos[0],
    target[1] - finalEval.pos[1]
  );

  return {
    converged: converged || finalError < tol,
    iterations: history.length,
    finalTheta: theta,
    finalPos: finalEval.pos,
    finalError,
    history,
    jacobianEvaluations: jacobianEvals,
  };
}

export default function RoboticArmSimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Arm parameters
  const [links, setLinks] = useState<[number, number]>([0.5, 0.5]);
  const [startTheta, setStartTheta] = useState<[number, number]>([
    Math.PI / 4,
    Math.PI / 3,
  ]);
  const [target, setTarget] = useState<[number, number]>([0.38, 0.52]);

  // Solver controls
  const [solverMode, setSolverMode] = useState<SolverMode>("newton-exact");
  const [maxIterations, setMaxIterations] = useState<number>(15);
  const [tolerance, setTolerance] = useState<number>(0.001);
  const [hStep, setHStep] = useState<number>(0.01);

  // Stepping & Animation
  const [isStepMode, setIsStepMode] = useState<boolean>(false);
  const [userStep, setUserStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showGhost, setShowGhost] = useState<boolean>(true);
  const [showIntermediateGhosts, setShowIntermediateGhosts] =
    useState<boolean>(true);

  // Interaction state
  const isDraggingRef = useRef<boolean>(false);

  // Total reach
  const maxReach = links[0] + links[1];
  const minReach = Math.abs(links[0] - links[1]);
  const targetDist = Math.hypot(target[0], target[1]);
  const isTargetReachable =
    targetDist <= maxReach + 0.005 && targetDist >= minReach - 0.005;

  // Run primary solver
  const primaryResult: SolverResult = useMemo(() => {
    if (solverMode === "newton-exact") {
      return solveNewton(
        links,
        startTheta,
        target,
        maxIterations,
        tolerance,
        false
      );
    } else if (solverMode === "newton-fd") {
      return solveNewton(
        links,
        startTheta,
        target,
        maxIterations,
        tolerance,
        true,
        hStep
      );
    } else if (solverMode === "broyden") {
      return solveBroyden(links, startTheta, target, maxIterations, tolerance);
    } else {
      // Comparison mode: default primary to Newton Exact
      return solveNewton(
        links,
        startTheta,
        target,
        maxIterations,
        tolerance,
        false
      );
    }
  }, [links, startTheta, target, solverMode, maxIterations, tolerance, hStep]);

  // Comparison solver (Broyden) when in compare mode
  const secondaryResult: SolverResult = useMemo(() => {
    return solveBroyden(links, startTheta, target, maxIterations, tolerance);
  }, [links, startTheta, target, maxIterations, tolerance]);

  // Clamped active step derived cleanly without cascading effect renders
  const maxStepIndex = Math.max(0, primaryResult.history.length - 1);
  const activeStep = isStepMode ? Math.min(userStep, maxStepIndex) : maxStepIndex;

  // Playback timer
  useEffect(() => {
    if (!isPlaying || !isStepMode) return;
    const maxIndex = primaryResult.history.length - 1;
    const timer = setInterval(() => {
      setUserStep((prev) => {
        if (prev >= maxIndex) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 450);
    return () => clearInterval(timer);
  }, [isPlaying, isStepMode, primaryResult.history.length]);

  // Current display theta and pos based on active step
  const currentStepRecord = primaryResult.history[activeStep] || {
    step: 0,
    theta: startTheta,
    pos: evalRobot2D(links, startTheta).pos,
    error: Math.hypot(
      target[0] - evalRobot2D(links, startTheta).pos[0],
      target[1] - evalRobot2D(links, startTheta).pos[1]
    ),
    J: evalRobot2D(links, startTheta).J,
    detJ: 0,
  };

  const displayTheta = isStepMode
    ? currentStepRecord.theta
    : primaryResult.finalTheta;
  const displayPos = isStepMode
    ? currentStepRecord.pos
    : primaryResult.finalPos;
  const displayError = isStepMode
    ? currentStepRecord.error
    : primaryResult.finalError;

  // Preset Handlers
  const handlePreset = (type: string) => {
    setIsPlaying(false);
    switch (type) {
      case "reach":
        setTarget([0.45, 0.45]);
        setStartTheta([0.2, 0.3]);
        break;
      case "folded":
        setTarget([0.15, 0.25]);
        setStartTheta([1.2, 1.8]);
        break;
      case "singularity":
        // Outstretched on horizontal axis
        setTarget([maxReach * 0.98, 0.0]);
        setStartTheta([0.4, 0.6]);
        break;
      case "quadrant2":
        setTarget([-0.42, 0.38]);
        setStartTheta([1.0, 0.5]);
        break;
      case "random": {
        const randAngle = (Math.random() * 2 - 1) * Math.PI * 0.85;
        const randR = minReach + Math.random() * (maxReach - minReach) * 0.88;
        setTarget([randR * Math.cos(randAngle), randR * Math.sin(randAngle)]);
        break;
      }
    }
  };

  const randomizeStartTheta = () => {
    setIsPlaying(false);
    const th1 = (Math.random() * 2 - 1) * Math.PI;
    const th2 = (Math.random() * 2 - 1) * Math.PI;
    setStartTheta([th1, th2]);
  };

  // Canvas Coordinate Mapping Helpers
  const getCanvasContext = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    return { canvas, ctx };
  }, []);

  // Redraw Canvas
  useEffect(() => {
    const info = getCanvasContext();
    if (!info) return;
    const { canvas, ctx } = info;
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Origin in canvas coordinates (centered horizontally, shifted slightly down)
    const originX = width / 2;
    const originY = height / 2 + 50;

    // Scaling factor (pixels per unit length)
    const scale = (Math.min(width, height) / 2) * 0.72 / maxReach;

    const toCanvas = (pt: [number, number]): [number, number] => {
      // MATLAB y-axis points up, canvas y-axis points down
      return [originX + pt[0] * scale, originY - pt[1] * scale];
    };

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw Subtle Background Grid
    ctx.save();
    ctx.strokeStyle = "rgba(148, 163, 184, 0.12)";
    ctx.lineWidth = 1;
    const stepSize = 0.2 * scale;
    for (let x = originX % stepSize; x < width; x += stepSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = originY % stepSize; y < height; y += stepSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Axes lines through origin
    ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Draw Reachable Workspace Boundaries
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(originX, originY, maxReach * scale, 0, 2 * Math.PI);
    ctx.stroke();

    if (minReach > 0.05) {
      ctx.strokeStyle = "rgba(239, 68, 68, 0.35)";
      ctx.beginPath();
      ctx.arc(originX, originY, minReach * scale, 0, 2 * Math.PI);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.restore();

    // Helper to draw a 2D arm given joint angles and style
    const drawArm = (
      th: [number, number],
      style: {
        link1Color: string;
        link2Color: string;
        jointColor: string;
        lineWidth: number;
        opacity: number;
        dash?: number[];
        showAxes?: boolean;
      }
    ) => {
      const p0: [number, number] = [0, 0];
      const p1: [number, number] = [
        links[0] * Math.cos(th[0]),
        links[0] * Math.sin(th[0]),
      ];
      const p2: [number, number] = [
        p1[0] + links[1] * Math.cos(th[0] + th[1]),
        p1[1] + links[1] * Math.sin(th[0] + th[1]),
      ];

      const c0 = toCanvas(p0);
      const c1 = toCanvas(p1);
      const c2 = toCanvas(p2);

      ctx.save();
      ctx.globalAlpha = style.opacity;
      if (style.dash) ctx.setLineDash(style.dash);

      // Link 1
      ctx.strokeStyle = style.link1Color;
      ctx.lineWidth = style.lineWidth;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(c0[0], c0[1]);
      ctx.lineTo(c1[0], c1[1]);
      ctx.stroke();

      // Link 2
      ctx.strokeStyle = style.link2Color;
      ctx.lineWidth = Math.max(3, style.lineWidth * 0.85);
      ctx.beginPath();
      ctx.moveTo(c1[0], c1[1]);
      ctx.lineTo(c2[0], c2[1]);
      ctx.stroke();

      // Joints
      ctx.setLineDash([]);
      ctx.fillStyle = style.jointColor;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;

      // Base joint
      ctx.beginPath();
      ctx.arc(c0[0], c0[1], style.lineWidth * 0.7, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Elbow joint
      ctx.beginPath();
      ctx.arc(c1[0], c1[1], style.lineWidth * 0.6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // End-Effector Axes (matching MATLAB plotSeg red & green orientation vectors)
      if (style.showAxes) {
        const totalAngle = th[0] + th[1];
        const axisLen = 32;

        // Tangent / X-axis (Red)
        const rx = c2[0] + Math.cos(totalAngle) * axisLen;
        const ry = c2[1] - Math.sin(totalAngle) * axisLen; // Canvas Y flipped
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(c2[0], c2[1]);
        ctx.lineTo(rx, ry);
        ctx.stroke();

        // Normal / Y-axis (Green)
        const gx = c2[0] - Math.sin(totalAngle) * axisLen;
        const gy = c2[1] - Math.cos(totalAngle) * axisLen;
        ctx.strokeStyle = "#22c55e";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(c2[0], c2[1]);
        ctx.lineTo(gx, gy);
        ctx.stroke();

        // End-effector tip bead
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(c2[0], c2[1], 5, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.restore();
    };

    // 1. Draw Starting Guess Ghost Arm (Dotted, matching MATLAB plotRobot2D(ls, t, ':'))
    if (showGhost) {
      drawArm(startTheta, {
        link1Color: "#94a3b8",
        link2Color: "#94a3b8",
        jointColor: "#64748b",
        lineWidth: 6,
        opacity: 0.45,
        dash: [4, 4],
        showAxes: false,
      });
    }

    // 2. In compare mode, draw Broyden secondary arm
    if (solverMode === "compare") {
      drawArm(secondaryResult.finalTheta, {
        link1Color: "#a855f7",
        link2Color: "#c084fc",
        jointColor: "#7e22ce",
        lineWidth: 8,
        opacity: 0.7,
        showAxes: true,
      });
    }

    // 3. Draw intermediate step ghosts if enabled
    if (
      showIntermediateGhosts &&
      isStepMode &&
      primaryResult.history.length > 1
    ) {
      primaryResult.history.slice(0, activeStep).forEach((rec, idx) => {
        drawArm(rec.theta, {
          link1Color: "#60a5fa",
          link2Color: "#93c5fd",
          jointColor: "#3b82f6",
          lineWidth: 4,
          opacity: 0.15 + (idx / primaryResult.history.length) * 0.25,
          dash: [2, 3],
          showAxes: false,
        });
      });
    }

    // 4. Draw Primary Active Arm
    drawArm(displayTheta, {
      link1Color: solverMode === "broyden" ? "#f59e0b" : "#2563eb",
      link2Color: solverMode === "broyden" ? "#fbbf24" : "#0284c7",
      jointColor: solverMode === "broyden" ? "#b45309" : "#1d4ed8",
      lineWidth: 10,
      opacity: 1.0,
      showAxes: true,
    });

    // 5. Draw Base Stand
    ctx.save();
    const baseC = toCanvas([0, 0]);
    ctx.fillStyle = "#475569";
    ctx.beginPath();
    ctx.moveTo(baseC[0] - 28, baseC[1] + 16);
    ctx.lineTo(baseC[0] + 28, baseC[1] + 16);
    ctx.lineTo(baseC[0] + 14, baseC[1]);
    ctx.lineTo(baseC[0] - 14, baseC[1]);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 6. Draw Target Point Marker
    const targetC = toCanvas(target);
    ctx.save();

    // Target glow ring
    ctx.strokeStyle = isTargetReachable ? "#f59e0b" : "#ef4444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(targetC[0], targetC[1], 18, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = isTargetReachable
      ? "rgba(245, 158, 11, 0.15)"
      : "rgba(239, 68, 68, 0.15)";
    ctx.beginPath();
    ctx.arc(targetC[0], targetC[1], 18, 0, 2 * Math.PI);
    ctx.fill();

    // Crosshairs
    ctx.strokeStyle = isTargetReachable ? "#fbbf24" : "#f87171";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(targetC[0] - 12, targetC[1]);
    ctx.lineTo(targetC[0] + 12, targetC[1]);
    ctx.moveTo(targetC[0], targetC[1] - 12);
    ctx.lineTo(targetC[0], targetC[1] + 12);
    ctx.stroke();

    // Target center dot
    ctx.fillStyle = isTargetReachable ? "#d97706" : "#b91c1c";
    ctx.beginPath();
    ctx.arc(targetC[0], targetC[1], 4, 0, 2 * Math.PI);
    ctx.fill();

    // Label
    ctx.font = "bold 11px system-ui, sans-serif";
    ctx.fillStyle = isTargetReachable ? "#f59e0b" : "#ef4444";
    ctx.fillText(
      `Target (${target[0].toFixed(2)}, ${target[1].toFixed(2)})`,
      targetC[0] + 16,
      targetC[1] - 6
    );

    ctx.restore();
  }, [
    links,
    startTheta,
    target,
    maxReach,
    minReach,
    isTargetReachable,
    displayTheta,
    showGhost,
    showIntermediateGhosts,
    isStepMode,
    activeStep,
    primaryResult,
    secondaryResult,
    solverMode,
    getCanvasContext,
  ]);

  // Handle Dragging Target on Canvas
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    updateTargetFromPointer(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    updateTargetFromPointer(e);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const updateTargetFromPointer = (
    e: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const xClient = e.clientX - rect.left;
    const yClient = e.clientY - rect.top;

    // Convert client coordinates to canvas internal pixel coordinates
    const scaleFactorX = canvas.width / rect.width;
    const scaleFactorY = canvas.height / rect.height;
    const canvasX = xClient * scaleFactorX;
    const canvasY = yClient * scaleFactorY;

    const originX = canvas.width / 2;
    const originY = canvas.height / 2 + 50;
    const scale = (Math.min(canvas.width, canvas.height) / 2) * 0.72 / maxReach;

    const mathX = (canvasX - originX) / scale;
    const mathY = (originY - canvasY) / scale;

    setTarget([mathX, mathY]);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Simulation Workspace Container */}
      <div className="relative w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60 overflow-hidden shadow-sm">
        {/* Top Control Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm">
          {/* Method Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mr-1">
              Method:
            </span>
            <button
              type="button"
              onClick={() => {
                setSolverMode("newton-exact");
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                solverMode === "newton-exact"
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-400"
              }`}
            >
              Newton (Analytical J)
            </button>
            <button
              type="button"
              onClick={() => {
                setSolverMode("newton-fd");
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                solverMode === "newton-fd"
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-400"
              }`}
            >
              Newton (Finite Diff)
            </button>
            <button
              type="button"
              onClick={() => {
                setSolverMode("broyden");
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                solverMode === "broyden"
                  ? "border-amber-600 bg-amber-600 text-white shadow-sm"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-amber-400"
              }`}
            >
              Broyden (Quasi-Newton)
            </button>
            <button
              type="button"
              onClick={() => {
                setSolverMode("compare");
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                solverMode === "compare"
                  ? "border-purple-600 bg-purple-600 text-white shadow-sm"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-400"
              }`}
            >
              Compare Both
            </button>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-xs text-gray-400 dark:text-gray-500 mr-1 hidden sm:inline">
              Presets:
            </span>
            <button
              type="button"
              onClick={() => handlePreset("reach")}
              className="px-2 py-1 text-xs rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            >
              Reach
            </button>
            <button
              type="button"
              onClick={() => handlePreset("folded")}
              className="px-2 py-1 text-xs rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            >
              Folded
            </button>
            <button
              type="button"
              onClick={() => handlePreset("singularity")}
              className="px-2 py-1 text-xs rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            >
              Singularity
            </button>
            <button
              type="button"
              onClick={() => handlePreset("random")}
              className="px-2.5 py-1 text-xs rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-1"
              title="Randomize Target"
            >
              <Shuffle className="w-3 h-3" />
              <span>Random</span>
            </button>
          </div>
        </div>

        {/* Canvas & Live Overlay */}
        <div className="relative w-full h-[480px] bg-white dark:bg-gray-950 flex items-center justify-center select-none cursor-crosshair">
          <canvas
            ref={canvasRef}
            width={800}
            height={520}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="w-full h-full touch-none"
          />

          {/* Interactive Hint */}
          <div className="absolute top-3 left-3 bg-white/85 dark:bg-gray-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2 pointer-events-none shadow-sm">
            <Crosshair className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>Click or drag anywhere to place target</span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 pointer-events-none">
            {!isTargetReachable ? (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300 border border-red-300 dark:border-red-900 text-xs font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Target Outside Workspace</span>
              </div>
            ) : primaryResult.converged ? (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-900 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Converged in {primaryResult.iterations} steps</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-900 text-xs font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Max iterations reached ({maxIterations})</span>
              </div>
            )}

            {Math.abs(currentStepRecord.detJ) < 0.015 && (
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950/80 dark:text-orange-300 border border-orange-300 dark:border-orange-900 text-[11px] font-medium">
                <span>Near Kinematic Singularity (det ≈ 0)</span>
              </div>
            )}
          </div>

          {/* Legend Overlay at Bottom-Left */}
          <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-[11px] text-gray-600 dark:text-gray-300 space-y-1 shadow-sm pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-1 bg-blue-600 dark:bg-blue-500 rounded" />
              <span>
                {solverMode === "broyden"
                  ? "Broyden Arm"
                  : solverMode === "compare"
                  ? "Newton Arm (Blue)"
                  : "Active Arm"}
              </span>
            </div>
            {solverMode === "compare" && (
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-purple-600 dark:bg-purple-400 rounded" />
                <span>Broyden Arm (Purple)</span>
              </div>
            )}
            {showGhost && (
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 border-t border-dashed border-gray-400 rounded" />
                <span>Initial Guess &theta;<sub>0</sub></span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-amber-500 bg-amber-200 dark:bg-amber-900/50" />
              <span>Target Point</span>
            </div>
          </div>
        </div>

        {/* Playback & Step Controls */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setIsStepMode(!isStepMode);
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                isStepMode
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-300"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
              }`}
            >
              {isStepMode ? "Mode: Step-by-Step" : "Mode: Instant Solve"}
            </button>

            {isStepMode && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  disabled={activeStep >= primaryResult.history.length - 1 && !isPlaying}
                  className="p-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 disabled:opacity-40 transition-colors"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Play className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setUserStep((prev) =>
                      Math.min(primaryResult.history.length - 1, prev + 1)
                    )
                  }
                  disabled={
                    activeStep >= primaryResult.history.length - 1 || isPlaying
                  }
                  className="p-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 disabled:opacity-40 transition-colors"
                  title="Next Step"
                >
                  <StepForward className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setUserStep(0);
                  }}
                  className="p-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
                  title="Reset to Initial Guess"
                >
                  <RotateCcw className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>

                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 ml-1">
                  Step {activeStep + 1} of {primaryResult.history.length}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 text-xs">
            <label className="flex items-center gap-1.5 cursor-pointer text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={showGhost}
                onChange={(e) => setShowGhost(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Show Initial Posture</span>
            </label>

            {isStepMode && (
              <label className="flex items-center gap-1.5 cursor-pointer text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={showIntermediateGhosts}
                  onChange={(e) =>
                    setShowIntermediateGhosts(e.target.checked)
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Show Trail</span>
              </label>
            )}

            <button
              type="button"
              onClick={randomizeStartTheta}
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <Shuffle className="w-3 h-3" />
              <span>Randomize Guess &theta;<sub>0</sub></span>
            </button>
          </div>
        </div>
      </div>

      {/* Numerical Diagnostics & Telemetry Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Error & Convergence */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Position Error ||d||
            </span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-gray-900 dark:text-gray-100">
            {displayError < 1e-4
              ? displayError.toExponential(3)
              : displayError.toFixed(4)}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Tolerance threshold: &epsilon; = {tolerance}
          </p>
        </div>

        {/* Card 2: Joint Angles */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Joint Angles (&theta;<sub>1</sub>, &theta;<sub>2</sub>)
            </span>
            <Sliders className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-sm font-mono space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-500">&theta;<sub>1</sub>:</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {displayTheta[0].toFixed(3)} rad ({((displayTheta[0] * 180) / Math.PI).toFixed(1)}&deg;)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">&theta;<sub>2</sub>:</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {displayTheta[1].toFixed(3)} rad ({((displayTheta[1] * 180) / Math.PI).toFixed(1)}&deg;)
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            End-Effector: ({displayPos[0].toFixed(3)}, {displayPos[1].toFixed(3)})
          </p>
        </div>

        {/* Card 3: Current Jacobian Matrix */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Jacobian Matrix J(&theta;)
            </span>
            <HelpCircle className="w-4 h-4 text-purple-500" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800/80 rounded p-2 text-xs font-mono">
            <div className="grid grid-cols-2 gap-1 text-center">
              <span>{currentStepRecord.J[0][0].toFixed(3)}</span>
              <span>{currentStepRecord.J[0][1].toFixed(3)}</span>
              <span>{currentStepRecord.J[1][0].toFixed(3)}</span>
              <span>{currentStepRecord.J[1][1].toFixed(3)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            det(J) = {currentStepRecord.detJ.toFixed(4)}
          </p>
        </div>

        {/* Card 4: Algorithmic Cost */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">
              Compute Efficiency
            </span>
            <Activity className="w-4 h-4 text-amber-500" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-500">Iterations:</span>
              <span className="font-bold text-gray-900 dark:text-gray-100">
                {primaryResult.iterations} / {maxIterations}
              </span>
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-500">Jacobian Evals:</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {primaryResult.jacobianEvaluations}
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {solverMode === "broyden"
              ? "Broyden: 1 eval + rank-1 updates"
              : solverMode === "newton-fd"
              ? "FD: 4 evals per iteration"
              : "Newton: exact analytical derivatives"}
          </p>
        </div>
      </div>

      {/* Comparison Table (Active in Compare Mode) */}
      {solverMode === "compare" && (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
          <h4 className="text-base font-bold mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            Direct Comparison: Newton&apos;s Method vs. Broyden&apos;s Quasi-Newton Method
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 dark:bg-gray-800/60 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                <tr>
                  <th className="py-2.5 px-4 rounded-l-lg">Metric</th>
                  <th className="py-2.5 px-4 text-blue-600 dark:text-blue-400">
                    Newton (Analytical J)
                  </th>
                  <th className="py-2.5 px-4 text-purple-600 dark:text-purple-400 rounded-r-lg">
                    Broyden (Quasi-Newton)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 font-mono text-xs">
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-gray-900 dark:text-gray-100">
                    Iterations to Converge
                  </td>
                  <td className="py-3 px-4 text-blue-600 dark:text-blue-400 font-bold">
                    {primaryResult.iterations}
                  </td>
                  <td className="py-3 px-4 text-purple-600 dark:text-purple-400 font-bold">
                    {secondaryResult.iterations}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-gray-900 dark:text-gray-100">
                    Jacobian Evaluations
                  </td>
                  <td className="py-3 px-4">{primaryResult.jacobianEvaluations}</td>
                  <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                    {secondaryResult.jacobianEvaluations} (1 initial)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-gray-900 dark:text-gray-100">
                    Final Position Error ||d||
                  </td>
                  <td className="py-3 px-4">
                    {primaryResult.finalError.toExponential(4)}
                  </td>
                  <td className="py-3 px-4">
                    {secondaryResult.finalError.toExponential(4)}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-sans font-medium text-gray-900 dark:text-gray-100">
                    Convergence Characteristic
                  </td>
                  <td className="py-3 px-4 font-sans text-gray-600 dark:text-gray-300">
                    Quadratic local convergence; exact gradient steps.
                  </td>
                  <td className="py-3 px-4 font-sans text-gray-600 dark:text-gray-300">
                    Superlinear convergence; low compute per iteration.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Advanced Hyperparameter Tuning Panel */}
      <div className="bg-gray-100 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-blue-500" />
          Kinematic &amp; Numerical Tuning
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Link 1 Length */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Link 1 Length (l<sub>1</sub>)
              </span>
              <span className="font-mono font-bold">{links[0].toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="0.8"
              step="0.05"
              value={links[0]}
              onChange={(e) =>
                setLinks([parseFloat(e.target.value), links[1]])
              }
              className="w-full accent-blue-600"
            />
          </div>

          {/* Link 2 Length */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Link 2 Length (l<sub>2</sub>)
              </span>
              <span className="font-mono font-bold">{links[1].toFixed(2)} m</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="0.8"
              step="0.05"
              value={links[1]}
              onChange={(e) =>
                setLinks([links[0], parseFloat(e.target.value)])
              }
              className="w-full accent-blue-600"
            />
          </div>

          {/* Max Iterations */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Max Iterations (n)
              </span>
              <span className="font-mono font-bold">{maxIterations}</span>
            </div>
            <input
              type="range"
              min="3"
              max="35"
              step="1"
              value={maxIterations}
              onChange={(e) => setMaxIterations(parseInt(e.target.value, 10))}
              className="w-full accent-blue-600"
            />
          </div>

          {/* Tolerance or FD Perturbation Step */}
          {solverMode === "newton-fd" ? (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  FD Step (h)
                </span>
                <span className="font-mono font-bold">{hStep.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.001"
                max="0.5"
                step="0.005"
                value={hStep}
                onChange={(e) => setHStep(parseFloat(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>
          ) : (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  Convergence Tol (&epsilon;)
                </span>
                <span className="font-mono font-bold">{tolerance}</span>
              </div>
              <select
                value={tolerance}
                onChange={(e) => setTolerance(parseFloat(e.target.value))}
                className="w-full text-xs font-mono p-1.5 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                <option value={0.01}>0.01 (Coarse)</option>
                <option value={0.001}>0.001 (Standard MATLAB)</option>
                <option value={0.0001}>0.0001 (Fine)</option>
                <option value={0.00001}>0.00001 (High Precision)</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
