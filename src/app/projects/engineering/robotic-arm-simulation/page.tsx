import React from "react";
import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";
import RoboticArmSimulator from "@/components/RoboticArmSimulator";

export default function RoboticArmSimulationPage() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-4 pb-4 pt-0 md:px-8 md:pb-8 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <article className="w-full max-w-4xl flex flex-col items-start px-2 md:px-0">
        {/* Navigation */}
        <Link
          href="/projects/engineering"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Engineering Projects
        </Link>

        {/* Header Section */}
        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              September 2024 – December 2024
            </time>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Robotic Arm Simulation
          </h1>
          <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">
            CMPUT 340: Numerical Methods &amp; Optimization • University of Alberta
          </p>

          <a
            href="https://github.com/KelvinCreighton/Robotic-Arm-Simulation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm font-medium text-gray-800 dark:text-gray-200 hover:border-gray-900 dark:hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View Source on GitHub
          </a>

          <p className="text-xl italic mb-6 text-gray-700 dark:text-gray-300">
            Interactive 2D robotic arm simulation implementing inverse kinematics, analytical and finite-difference Jacobians, Newton&apos;s method, and Broyden&apos;s quasi-Newton numerical optimization.
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-sm">
            <Image
              src="/images/projects/robotic-arm-simulation-title.webp"
              alt="2D Robotic Arm Simulation Title"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              In robotics and computer graphics, controlling multi-link mechanisms requires solving the <strong>Inverse Kinematics (IK)</strong> problem: given a target Cartesian coordinate (<em>x</em>*, <em>y</em>*) in workspace coordinates, determine the exact joint angles (&theta;<sub>1</sub>, &theta;<sub>2</sub>) required for the arm&apos;s end-effector to reach that point.
            </p>
            <p>
              Because forward kinematics maps angles through transcendental trigonometric equations, inverse kinematics yields a system of non-linear equations. In this project, I developed an interactive 2D simulation in MATLAB and ported the core algorithms to interactive TypeScript and HTML5 Canvas. We explore both an exact gradient-based solver (<strong>Newton&apos;s Method</strong>) and a memory-efficient secant update (<strong>Broyden&apos;s Quasi-Newton Method</strong>), analyzing convergence speed, Jacobian evaluation costs, and numerical stability near kinematic singularities.
            </p>
          </div>
        </header>

        {/* Project Overview Card */}
        <div className="w-full bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-12 border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Project Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Core Competencies
              </h4>
              <ul className="text-sm space-y-1.5 text-gray-700 dark:text-gray-300 list-disc pl-5">
                <li>Non-Linear Root Finding &amp; Numerical Optimization</li>
                <li>Analytical Jacobian Derivation &amp; Sensitivity Analysis</li>
                <li>Finite-Difference Approximations &amp; Round-Off Error</li>
                <li>Newton-Raphson vs. Broyden&apos;s Quasi-Newton Method</li>
                <li>Damped Least Squares &amp; Kinematic Singularity Handling</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Quick Facts
              </h4>
              <ul className="text-sm space-y-1.5 text-gray-700 dark:text-gray-300 list-none pl-0">
                <li><span className="font-semibold text-gray-900 dark:text-gray-100">Course:</span> CMPUT 340 (Numerical Methods)</li>
                <li><span className="font-semibold text-gray-900 dark:text-gray-100">Degrees of Freedom:</span> 2-DOF Planar Arm</li>
                <li><span className="font-semibold text-gray-900 dark:text-gray-100">Languages:</span> MATLAB, TypeScript, HTML5 Canvas</li>
                <li><span className="font-semibold text-gray-900 dark:text-gray-100">Convergence Rate:</span> Quadratic (Newton) vs. Superlinear (Broyden)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <section className="w-full mb-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-blue-500 animate-ping" />
              Interactive Simulation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-base">
              Click or drag anywhere in the workspace below to position the target point. Toggle between Newton&apos;s method (exact or finite-difference) and Broyden&apos;s quasi-Newton solver, or compare both solvers side-by-side to observe convergence paths in real time.
            </p>
          </div>

          <RoboticArmSimulator />
        </section>

        {/* Written Technical Documentation */}
        <div className="w-full prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          <h2>1. Kinematic Modeling</h2>
          <p>
            Consider a planar two-link manipulator rooted at the Cartesian origin (0, 0) with link lengths <em>l</em><sub>1</sub>, <em>l</em><sub>2</sub> and joint rotation angles &theta;<sub>1</sub>, &theta;<sub>2</sub>. The angle &theta;<sub>1</sub> is measured relative to the global horizontal <em>x</em>-axis, while &theta;<sub>2</sub> represents the relative angle of the second link with respect to the first link.
          </p>
          <p>
            The forward kinematics map <em>F</em>: &#8477;&sup2; &rarr; &#8477;&sup2; computes the Cartesian position (<em>x</em>, <em>y</em>)&#7510; of the end-effector from joint space coordinates:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800 overflow-x-auto">
            x(&theta;) = l&#8321; &middot; cos(&theta;&#8321;) + l&#8322; &middot; cos(&theta;&#8321; + &theta;&#8322;)
            <br />
            y(&theta;) = l&#8321; &middot; sin(&theta;&#8321;) + l&#8322; &middot; sin(&theta;&#8321; + &theta;&#8322;)
          </div>
          <p>
            Given a desired end-effector target position <em>pos</em>* = (<em>x</em>*, <em>y</em>*)&#7510;, inverse kinematics seeks joint angles &theta; = (&theta;<sub>1</sub>, &theta;<sub>2</sub>)&#7510; that satisfy the non-linear vector equation:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800">
            f(&theta;) = F(&theta;) - pos* = 0
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          <h2>2. The Jacobian Matrix: Analytical vs. Finite-Difference</h2>
          <p>
            The Jacobian matrix <em>J</em>(&theta;) &isin; &#8477;&sup2;&times;&sup2; is the matrix of all first-order partial derivatives of the forward kinematics function. It describes how infinitesimal variations in joint angles produce linear displacements in Cartesian space:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800 overflow-x-auto">
            J(&theta;) = [ &part;x/&part;&theta;&#8321;   &part;x/&part;&theta;&#8322; ]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ &part;y/&part;&theta;&#8321;   &part;y/&part;&theta;&#8322; ]
          </div>
          <p>
            Differentiating the forward kinematics equations with respect to each joint angle yields the exact analytical Jacobian:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800 overflow-x-auto">
            &part;x/&part;&theta;&#8321; = -l&#8321;&middot;sin(&theta;&#8321;) - l&#8322;&middot;sin(&theta;&#8321; + &theta;&#8322;)
            <br />
            &part;x/&part;&theta;&#8322; = -l&#8322;&middot;sin(&theta;&#8321; + &theta;&#8322;)
            <br />
            &part;y/&part;&theta;&#8321; =  l&#8321;&middot;cos(&theta;&#8321;) + l&#8322;&middot;cos(&theta;&#8321; + &theta;&#8322;)
            <br />
            &part;y/&part;&theta;&#8322; =  l&#8322;&middot;cos(&theta;&#8321; + &theta;&#8322;)
          </div>

          <h3>Central Finite-Difference Approximation</h3>
          <p>
            In more complex multi-body robotic systems (such as 6-DOF industrial manipulators or tendon-driven continuum arms), deriving and computing symbolic analytical derivatives can be cumbersome or computationally expensive. We implemented a central finite-difference approximation with perturbation step <em>h</em>:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800 overflow-x-auto">
            &part;F/&part;&theta;&#8321; &approx; ( F(&theta; + [h; 0]) - F(&theta; - [h; 0]) ) / (2h)
            <br />
            &part;F/&part;&theta;&#8322; &approx; ( F(&theta; + [0; h]) - F(&theta; - [0; h]) ) / (2h)
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 p-4 my-6 rounded-r-xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300 m-0">
              Perturbation Trade-Off: Truncation vs. Round-Off Error
            </h4>
            <p className="text-sm text-blue-800 dark:text-blue-200 mt-2 mb-0">
              The truncation error of central differences scales as <em>O</em>(<em>h</em>&sup2;), meaning smaller <em>h</em> yields higher mathematical fidelity. However, as <em>h</em> &rarr; 0, floating-point cancellation errors scale as <em>O</em>(&epsilon;<sub>mach</sub> / <em>h</em>). In MATLAB (IEEE 754 double precision), values such as <em>h</em> = 0.01 or <em>h</em> = 10<sup>-4</sup> yield accurate gradients without catastrophic cancellation, whereas large values (e.g., <em>h</em> = 0.5) introduce noticeable directional drift into the solver iterations.
            </p>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          <h2>3. Inverse Kinematics Solvers: Newton vs. Broyden</h2>
          <p>
            To iteratively find joint angles &theta; that drive the end-effector error <em>d</em> = <em>pos</em>* - <em>F</em>(&theta;) below a specified tolerance threshold (&epsilon; = 0.001), two primary numerical optimization strategies were implemented and evaluated:
          </p>

          <h3>Method 1: Newton-Raphson Method</h3>
          <p>
            At each iteration step <em>k</em>, Newton&apos;s method forms a local linear Taylor approximation of the kinematic mapping and solves the linear system for the angular correction step <em>s</em><sub><em>k</em></sub>:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800">
            J(&theta;&#7522;) &middot; s&#7522; = pos* - F(&theta;&#7522;)  &rArr;  s&#7522; = J(&theta;&#7522;)&#8315;&sup1; &middot; d&#7522;
            <br />
            &theta;&#7522;&#8330;&#8321; = &theta;&#7522; + s&#7522;
          </div>
          <p>
            Newton&apos;s method demonstrates <strong>quadratic local convergence</strong> when the initial guess is sufficiently close to the solution. However, it requires recalculating the entire Jacobian matrix at every iteration, which for high-DOF arms or complex forward kinematic models can become the dominant computational bottleneck.
          </p>

          <h3>Method 2: Broyden&apos;s Quasi-Newton Method</h3>
          <p>
            Broyden&apos;s method generalizes the 1D secant method to multiple dimensions. Rather than evaluating fresh derivatives at every iteration, Broyden begins with an initial Jacobian estimate <em>B</em><sub>0</sub> (evaluated once at &theta;<sub>0</sub>) and updates the matrix iteratively using the minimum Frobenius-norm rank-1 correction that satisfies the secant condition:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800 overflow-x-auto">
            B&#7522;&#8330;&#8321; = B&#7522; + [ (y&#7522; - B&#7522;&middot;s&#7522;) &middot; s&#7522;&#7510; ] / ( s&#7522;&#7510;&middot;s&#7522; )
          </div>
          <p>
            where <em>s</em><sub><em>k</em></sub> = &theta;<sub><em>k</em>+1</sub> - &theta;<sub><em>k</em></sub> is the joint step and <em>y</em><sub><em>k</em></sub> = <em>f</em>(&theta;<sub><em>k</em>+1</sub>) - <em>f</em>(&theta;<sub><em>k</em></sub>) is the change in residual error.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <h4 className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0 mb-2">
                Newton&apos;s Method
              </h4>
              <ul className="text-sm space-y-1.5 pl-4 m-0">
                <li><strong>Convergence:</strong> Quadratic (||e<sub>k+1</sub>|| &le; C ||e<sub>k</sub>||&sup2;)</li>
                <li><strong>Iterations:</strong> Typically 3–5 iterations</li>
                <li><strong>Cost per step:</strong> High (recomputes full Jacobian <em>J</em>)</li>
                <li><strong>Sensitivity:</strong> Sensitive to initial guess and singularities</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
              <h4 className="text-base font-bold text-amber-600 dark:text-amber-400 mt-0 mb-2">
                Broyden&apos;s Method
              </h4>
              <ul className="text-sm space-y-1.5 pl-4 m-0">
                <li><strong>Convergence:</strong> Superlinear</li>
                <li><strong>Iterations:</strong> Typically 6–10 iterations</li>
                <li><strong>Cost per step:</strong> Low (simple vector outer product update)</li>
                <li><strong>Sensitivity:</strong> Slower to track rapid curvature changes</li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          <h2>4. Kinematic Singularities &amp; Damped Least Squares</h2>
          <p>
            A kinematic singularity occurs when the manipulator loses one or more degrees of freedom, causing the Jacobian matrix to lose rank. For our 2D planar arm, the determinant of the Jacobian is:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800">
            det(J) = l&#8321; &middot; l&#8322; &middot; sin(&theta;&#8322;)
          </div>
          <p>
            Singularities occur when &theta;<sub>2</sub> = 0 (arm completely outstretched at the workspace boundary <em>R</em> = <em>l</em><sub>1</sub> + <em>l</em><sub>2</sub>) or &theta;<sub>2</sub> = &pi; (arm completely folded in on itself). When det(<em>J</em>) &rarr; 0, naive matrix inversion produces unbounded angular velocities (<em>s</em><sub><em>k</em></sub> &rarr; &infin;).
          </p>
          <p>
            To prevent numerical blow-ups when users test near-singular postures, we introduced a <strong>Damped Least Squares (Levenberg-Marquardt)</strong> regularization:
          </p>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl font-mono text-sm my-4 border border-gray-200 dark:border-gray-800 overflow-x-auto">
            s&#7522; = ( J&#7510;&middot;J + &lambda;&sup2;&middot;I )&#8315;&sup1; &middot; J&#7510; &middot; d&#7522;
          </div>
          <p>
            The damping parameter &lambda; &approx; 0.05 smoothly limits step magnitudes near singular configurations, ensuring graceful degradation rather than erratic numerical oscillations.
          </p>

          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          <h2>5. Original MATLAB Implementation</h2>
          <p>
            Below are excerpts from the original MATLAB script developed for CMPUT 340, highlighting the forward kinematics, finite-difference approximation, and iterative inverse kinematics routine:
          </p>

          <div className="bg-gray-900 text-gray-100 p-5 rounded-xl font-mono text-xs my-6 overflow-x-auto border border-gray-800">
            <div className="text-gray-400 mb-2">% evalRobot2D.m: Forward Kinematics &amp; Exact Analytical Jacobian</div>
            <pre className="m-0 leading-relaxed text-gray-200">
{`function [pos, J] = evalRobot2D(l, theta)
    l1 = l(1);
    l2 = l(2);
    th1 = theta(1);
    th2 = theta(2);
    
    x = l1*cos(th1) + l2*cos(th1 + th2);
    y = l1*sin(th1) + l2*sin(th1 + th2);
    pos = [x; y];

    dx_dth1 = -l1*sin(th1) - l2*sin(th1 + th2);
    dx_dth2 = -l2*sin(th1 + th2);
    dy_dth1 =  l1*cos(th1) + l2*cos(th1 + th2);
    dy_dth2 =  l2*cos(th1 + th2);

    J = [dx_dth1, dx_dth2; dy_dth1, dy_dth2];
end`}
            </pre>
          </div>

          <div className="bg-gray-900 text-gray-100 p-5 rounded-xl font-mono text-xs my-6 overflow-x-auto border border-gray-800">
            <div className="text-gray-400 mb-2">% fdJacob2D.m: Central Finite Difference Jacobian Approximation</div>
            <pre className="m-0 leading-relaxed text-gray-200">
{`function J = fdJacob2D(l, theta, h)
    dpos_dtheta1 = ( evalRobot2D(l, theta+[h;0]) - evalRobot2D(l, theta-[h;0]) ) / (2*h);
    dpos_dtheta2 = ( evalRobot2D(l, theta+[0;h]) - evalRobot2D(l, theta-[0;h]) ) / (2*h);
    J = [dpos_dtheta1, dpos_dtheta2];
end`}
            </pre>
          </div>

          <div className="bg-gray-900 text-gray-100 p-5 rounded-xl font-mono text-xs my-6 overflow-x-auto border border-gray-800">
            <div className="text-gray-400 mb-2">% invKin2D.m: Newton &amp; Broyden Inverse Kinematics Solvers</div>
            <pre className="m-0 leading-relaxed text-gray-200">
{`function theta = invKin2D(l, theta0, pos, n, mode)
    tol = 0.001; % Tolerance threshold
    if mode == 0
        % Broyden's Quasi-Newton Method
        theta = theta0;
        [current_pos, J] = evalRobot2D(l, theta); % Initial Jacobian
        d = current_pos - pos;
    
        for k = 1:n
            if norm(d) < tol
                break;
            end
            s_k = -J \\ d;
            theta = theta + s_k;
    
            [new_pos, ~] = evalRobot2D(l, theta);
            d_new = new_pos - pos;
            y_k = d_new - d;
    
            % Rank-1 Broyden update
            J = J + ((y_k - J * s_k) * s_k') / (s_k' * s_k);
            d = d_new;
        end
    elseif mode == 1
        % Newton's Method
        theta = theta0;
        for k = 1:n
            [current_pos, J] = evalRobot2D(l, theta);
            d = pos - current_pos;
            if norm(d) < tol
                break;
            end
            s_k = J \\ d;
            theta = theta + s_k;
        end
    end
end`}
            </pre>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-800" />

          <h2>6. Key Conclusions &amp; Insights</h2>
          <p>
            Through experimental testing of both solvers across various workspace configurations, several core insights emerged:
          </p>
          <ul>
            <li>
              <strong>Initial Guess Matters:</strong> Because the inverse kinematics mapping has multiple solutions (elbow-up vs. elbow-down configurations) and local minima outside the reachable workspace, both Newton and Broyden depend on a reasonable initial posture &theta;<sub>0</sub>.
            </li>
            <li>
              <strong>Broyden Minimizes Function Calls:</strong> When the forward kinematics evaluation is computationally expensive, Broyden&apos;s method is vastly superior per second of CPU time, even though it requires roughly 1.5x to 2x more iteration steps than Newton&apos;s method.
            </li>
            <li>
              <strong>Exact Jacobians Accelerate Terminal Convergence:</strong> Once within the basin of attraction, Newton&apos;s method achieves machine precision in just a few steps, doubling the number of correct significant digits with each step due to quadratic convergence.
            </li>
          </ul>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>

        {/* Project Pager */}
        <ProjectPager
          category="engineering"
          currentPath="/projects/engineering/robotic-arm-simulation"
        />
      </article>
    </main>
  );
}
