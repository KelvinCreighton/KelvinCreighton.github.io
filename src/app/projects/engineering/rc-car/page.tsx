"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

type Step = {
  number: number;
  text: string;
  image?: string | string[];
  orientation: "horizontal" | "vertical";
  isHalfWidth?: boolean;
  isFullWidth?: boolean;
  rotate?: number;
  customWidth?: string;
  customCrop?: string;
  objectPosition?: string;
  isEmpty?: boolean;
};

export default function RcCarProject() {
  const carSteps: Step[] = [
    { number: 1, customCrop: "aspect-[3/4]", text: "Take one of the large popsicle sticks and snap it in half. \nTry and be as precise as possible (with every step).", image: "/images/projects/rc-car-pdf/img-p11-7.jpg", orientation: "vertical" },
    { number: 2, customCrop: "aspect-[3/4]", text: "Take 2 more full large popsicle sticks and hot glue the halves parallele making a box 1 by 1/2 popsicle sticks. \nMake sure both halves are hot glued on top.", image: "/images/projects/rc-car-pdf/img-p11-8.jpg", orientation: "vertical" },
    { number: 3, customCrop: "aspect-[3/4]", text: "Take the last large popsicle stick and snap it in half too.", image: "/images/projects/rc-car-pdf/img-p12-7.jpg", orientation: "vertical" },
    { number: 4, isHalfWidth: true, customCrop: "aspect-[3/4]", text: "Lay the large 3d printed wheel and motor from the bottom of the box. Lastly lay and hot glue the half popsicle stick across. \nOr use a ruler and measure around 8cm to 9cm where it should lay. \nMAKE SURE: the 3rd half that is glued in the center is also on top of the longer pieces. All the halves should be level with each other.", image: "/images/projects/rc-car-pdf/img-p12-8.jpg", orientation: "horizontal" },
    { number: 5, isHalfWidth: true, customCrop: "aspect-[3/4]", text: "Flip the base of hot glued popsicle sticks over. \nPlace the large 3d printed wheel down along with the dc motor similar to how it was in the last step. \nHot glue the last half large popsicle stick down around 5 cm from the bottom of the structure. (it should be just above the 3d printed wheel and exactly on the dc motor).", image: "/images/projects/rc-car-pdf/img-p13-7.jpg", orientation: "horizontal" },
    { number: 6, isHalfWidth: true, text: "Cut/snap the thin skewers at around 12cm. If you wish for longer then that means the wheels will be “out” more. (do not cut shorter) \nDO NOT HOT GLUE THESE!", image: "/images/projects/rc-car-pdf/img-p13-8.jpg", orientation: "horizontal" },
    { number: 7, isHalfWidth: true, text: "Cut the straw into 2 pieces each with the shorter length of the large popsicle stick. \nDO NOT HOT GLUE THESE YET!", image: "/images/projects/rc-car-pdf/img-p14-7.jpg", orientation: "horizontal" },
    { number: 8, isHalfWidth: true, text: "Take 2 wheels, 1 thin skewer and the rest of the straw.", image: "/images/projects/rc-car-pdf/img-p14-8.jpg", orientation: "horizontal" },
    { number: 9, isHalfWidth: true, text: "Attach the wheels to the skewer.", image: "/images/projects/rc-car-pdf/img-p14-9.jpg", orientation: "horizontal" },
    { number: 10, isHalfWidth: true, text: "Measure and cut the straw to the length of the skewer with the wheels attacked. Around 11.5cm.", image: "/images/projects/rc-car-pdf/img-p15-7.jpg", orientation: "vertical" },
    { number: 11, isHalfWidth: true, text: "Cut a tiny bit more off so that it is not exactly the same length but half a cm or so shorter.", image: "/images/projects/rc-car-pdf/img-p15-8.jpg", orientation: "vertical" },
    { number: 12, text: "Take one of the wheels off and slide the straw on then reattach the wheel. \nIf you notice that the straw is still touching the wheels on both sides then cut it a little bit shorter. it should be close but should have enough space on either side to not touch any wheel.", image: "/images/projects/rc-car-pdf/img-p15-9.jpg", orientation: "vertical" },
    { number: 13, customCrop: "aspect-[5/4]", text: "Now for the front wheel assembly \nTake the 3d printed wheel, the remaining two wheels, the small cut pieces of straw, the remaining thin skewer and an elastic.", image: "/images/projects/rc-car-pdf/img-p16-7.jpg", orientation: "vertical" },
    { number: 14, customCrop: "aspect-[5/4]", text: "Attach the elastic to the 3d printed wheel.", image: "/images/projects/rc-car-pdf/img-p16-8.jpg", orientation: "vertical" },
    { number: 15, isHalfWidth: true, customCrop: "aspect-[4/3]", objectPosition: "center 60%", text: "Attach the skewer to one of the wheels.", image: "/images/projects/rc-car-pdf/img-p17-7.jpg", orientation: "vertical" },
    { number: 16, isHalfWidth: true, customCrop: "aspect-[4/3]", text: "Slide one of the straw pieces on it. \nIt should be loose and can move around.", image: "/images/projects/rc-car-pdf/img-p17-8.jpg", orientation: "vertical" },
    { number: 17, customCrop: "aspect-video", text: "Slide the 3d printed wheel on.", image: "/images/projects/rc-car-pdf/img-p17-9.jpg", orientation: "vertical" },
    { number: 18, customCrop: "aspect-video", text: "Slide the last straw piece and then attach the last wheel.", image: "/images/projects/rc-car-pdf/img-p18-7.jpg", orientation: "vertical" },
    { number: 19, customCrop: "aspect-video", text: "Now you should have 2 sets of wheels ready for assembly.", image: "/images/projects/rc-car-pdf/img-p18-9.jpg", orientation: "vertical" },
    { number: 20, text: "Hot glue the dc motor across the popsicle sticks leaving the spinning shaft out in the open air. \nMAKE SURE the copper connections are facing up!", image: "/images/projects/rc-car-pdf/img-p19-7.jpg", orientation: "vertical" },
    { number: 21, text: "Place the small 3d printed wheel on the end of the shaft of the dc motor. \nHot glue the end if it seems like it keeps falling off.", image: "/images/projects/rc-car-pdf/img-p19-8.jpg", orientation: "vertical" },
    { number: 22, text: "Hot glue the battery holder to the car structure filling the gap on the left. \nMake sure the wires facing out from the car and do not interfere with the motor.", image: "/images/projects/rc-car-pdf/img-p20-7.jpg", orientation: "vertical" },
    { number: 23, isHalfWidth: true, text: "Take the RF receiver board and hot glue the base of the wires to make them more secure. \nThese wires are flimsy and tend to break so hot gluing them will help keep them in place better.", image: "/images/projects/rc-car-pdf/img-p21-7.jpg", orientation: "horizontal" },
    { number: 24, isHalfWidth: true, text: "Wire strip the red, black, SHORT white and green wires of the RF receiver circuit board \nDO NOT TOUCH THE LONG WHITE CORD YET \nThese wires are labelled: \nV+ red \nV- black \nB green \nF white \non the circuit board \nBE VERY CAREFUL to NOT accidentally cut the wires when doing this. They are short and will make it harder to connect them later. If they are cut too short then solder or attach a longer wire onto it as replacement.", image: "/images/projects/rc-car-pdf/img-p21-8.jpg", orientation: "horizontal" },
    { number: 25, text: "Hot glue the board to the car structure. Make it so that the SHORT White and Green wires are closer to the dc motor. \nThis will make it easier to connect them to it later.", image: "/images/projects/rc-car-pdf/img-p22-7.jpg", orientation: "vertical" },
    { number: 26, text: "Twist the red and black wires together from the battery hub and the RF receiver circuit.", image: "/images/projects/rc-car-pdf/img-p23-7.jpg", orientation: "vertical" },
    { number: 27, text: "Add electrical tape to the ends so they cannot touch and short circuit.", image: "/images/projects/rc-car-pdf/img-p23-8.jpg", orientation: "vertical" },
    { number: 28, text: "Thread the wires through the holes of the motor and twist them so they stay as best as they can. \nMAKE SURE YOU PUT THE WIRES IN THIS ORDER. If you don’t then the controls will be inverted (forward is backward and backward is forward) which is not a huge problem but if it can be avoided then great.", image: "/images/projects/rc-car-pdf/img-p24-7.jpg", orientation: "vertical" },
    { number: 29, text: "Carefully hot glue them so they stay attached better. \nIf this is not done right then this can be a failure point of the project. As a last resort just solder them.", image: "/images/projects/rc-car-pdf/img-p25-8.jpg", orientation: "vertical" },
    { number: 30, text: "Now we are going to check that everything was connected properly before continuing with the rest of the car. \nPut in the batteries and flip the red switch on the circuit board. The red leds should light up meaning it has power.", image: "/images/projects/rc-car-pdf/img-p25-9.jpg", orientation: "vertical" },
    { number: 31, text: "Next take the 3v coin battery and the RF Transmitter circuit board and hold the negative and positive wires to the battery \nRed wire goes to the side of the battery with the “+” sign and Black wire goes to the other side of the battery. \nWhen pressing the button labelled F or B you should see the red light up on the Transmitter circuit board.", image: "/images/projects/rc-car-pdf/img-p26-7.jpg", orientation: "vertical" },
    { number: 32, text: "Hold each part close together and you should see the motor spin when pressing F or B. \nIF IT DOESN’T WORK: \n- Try pressing it a few times and move the transmitter board around, there may be something blocking the wireless connection or there may be some external interference. \n- Try reattaching the wires connected to the motor. If the red leds are on then the board has power it is just not connecting to the motor. \n- Try with a different motor, different receiver board, or different transmitter board.", image: "/images/projects/rc-car-pdf/img-p26-8.jpg", orientation: "vertical" },
    { number: 33, text: "Use electrical tape to hold the longer white wire allowing it to face upward to the sky. \nThis wire is the antenna and having it face UP will help the wireless connection.", image: "/images/projects/rc-car-pdf/img-p27-7.jpg", orientation: "vertical" },
    { number: 34, isHalfWidth: true, text: "Flip the car over gently and hot glue the back wheels across the back half popsicle stick. \nONLY HOT GLUE THE STRAW NEVER THE SKEWER OR WHEELS.", image: "/images/projects/rc-car-pdf/img-p27-8.jpg", orientation: "vertical" },
    { number: 35, isHalfWidth: true, text: "Do the same with the front wheels. \nAGAIN ONLY HOT GLUE THE STRAW PARTS. \nMake sure no hot glue touches anything else this is very important to the movement of the wheels. \nAdditionally make sure the 3d printed wheel does not touch anything even when it wiggles a little. Anything touching it will give it friction and could make it not more properly. \nKeep it as straight as possible. \n\n(Optional) Add tape after hot glueing the straws down to reinforce them.", image: ["/images/projects/rc-car-pdf/img-p28-7.jpg", "/images/projects/rc-car-pdf/img-p28-8.jpg"], orientation: "vertical" },
    { number: 36, isHalfWidth: true, customCrop: "aspect-[3/4]", text: "Flip the car back over. \nUse the elastic tool to grab the elastic out of the 3d printed wheel. And attach it to the motor.", image: "/images/projects/rc-car-pdf/img-p29-7.jpg", orientation: "vertical" },
    { number: 37, isHalfWidth: true, customCrop: "aspect-[4/3]", text: "Once everything is in place and positioned evenly / centered. Add a bit of hot glue to the 3d printed wheel and the skewer to attach them properly. \nOnly add a little bit in case you end up needing to take this part off to replace the elastic in the future.. \n\nTHE CAR IS DONE!!!!! \nFeel free to test it with the RF Transmitter circuit board like was done to test the connections earlier in the step-by-step. \n\nNOW on to part 2: the controller.", image: "/images/projects/rc-car-pdf/img-p29-9.jpg", orientation: "vertical" },
    { number: 38, text: "OPTIONAL: \nAdditionally feel free to add a bumper to the front of the car so it has support when it crashes into a wall.", image: "/images/projects/rc-car-pdf/img-p30-8.jpg", orientation: "vertical" },
    { number: 39, text: "First cut the straw in half. Then cut the straw open, as straight as possible.", image: "/images/projects/rc-car-pdf/img-p31-7.jpg", orientation: "vertical" },
    { number: 40, text: "Attach it to the front of the car and hot glue it down.", image: "/images/projects/rc-car-pdf/img-p31-9.jpg", orientation: "vertical" },
  ];

  const controllerSteps: Step[] = [
    { number: 1, isHalfWidth: true, text: "First take the stiffer wire (one that is harder to bend) and strip a bit off one of the ends. \nDo the same with the other side but strip a lot more off.", image: "/images/projects/rc-car-pdf/img-p33-7.jpg", orientation: "vertical" },
    { number: 2, isHalfWidth: true, text: "Verify that the skewer is exactly 3.8mm to 4mm diameter.", image: "/images/projects/rc-car-pdf/img-p33-8.jpg", orientation: "vertical" },
    { number: 3, isHalfWidth: true, text: "Take the skewer and wrap the wire with the longer stripped side around it.", image: "/images/projects/rc-car-pdf/img-p33-10.jpg", orientation: "vertical" },
    { number: 4, isHalfWidth: true, text: "Take it off the skewer and press the circles together so it forms a coil. This will be the antenna for the controller.", image: "/images/projects/rc-car-pdf/img-p34-7.jpg", orientation: "vertical" },
    { number: 5, text: "Find the large ANT hole (antenna connection hole) and locate the smaller hole beside it (also an antenna connection hole)", image: "/images/projects/rc-car-pdf/img-p34-8.jpg", orientation: "vertical" },
    { number: 6, text: "Solder the antenna wire in this hole. This should be the only soldering you will need to do. \nIf you do not solder this it is likely not going to work. \n(Yes I tried attaching it to the resistor).", image: "/images/projects/rc-car-pdf/img-p35-7.jpg", orientation: "vertical" },
    { number: 7, text: "Hot glue the base of the Red and Black wires. This will help them stay attached better.", image: "/images/projects/rc-car-pdf/img-p35-9.jpg", orientation: "vertical" },
    { number: 8, text: "Strip the ends of the wires to a decent length.", image: "/images/projects/rc-car-pdf/img-p36-7.jpg", orientation: "vertical" },
    { number: 9, customCrop: "aspect-[3/2]", text: "Slide the Red and Black wires through the hole in the center.", image: "/images/projects/rc-car-pdf/img-p36-8.jpg", orientation: "horizontal" },
    { number: 10, text: "Take the jumbo popsicle stick and snap it in half.", image: "/images/projects/rc-car-pdf/img-p36-9.jpg", orientation: "horizontal" },
    { number: 11, text: "Trim the ends with some scissors.", image: "/images/projects/rc-car-pdf/img-p36-10.jpg", orientation: "horizontal" },
    { number: 12, text: "Lay them side by side and hot glue the sides and the middle. \nLeave some space between these dots.", image: "/images/projects/rc-car-pdf/img-p37-7.jpg", orientation: "horizontal" },
    { number: 13, customCrop: "aspect-video", text: "Cut a regular popsicle stick the the size of the width of the two jumbo popsicle sticks.", image: "/images/projects/rc-car-pdf/img-p37-8.jpg", orientation: "horizontal" },
    { number: 14, customCrop: "aspect-[4/3]", text: "Lay the transmitter circuit down for reference. Then hot glue the regular popsicle sticks on the sides.", image: "/images/projects/rc-car-pdf/img-p38-8.jpg", orientation: "horizontal" },
    { number: 15, text: "Take the transmitter circuit out and flip over the box. \nPut two 3/4 inch brass fasteners through the two jumbo popsicle sticks (between the hot glue dots).", image: "/images/projects/rc-car-pdf/img-p38-9.jpg", orientation: "horizontal" },
    { number: 16, text: "Twist the left brass fastener 90 degrees. Move the brass fasteners around so that they can fit through the two holes of the transmitter board.", image: "/images/projects/rc-car-pdf/img-p39-7.jpg", orientation: "horizontal" },
    { number: 17, text: "Take the rest of the popsicle sticks left and snap off two small parts and tack them with hot glue.", image: "/images/projects/rc-car-pdf/img-p40-7.jpg", orientation: "horizontal" },
    { number: 18, text: "Then hot glue stack to the left of the box.", image: "/images/projects/rc-car-pdf/img-p40-8.jpg", orientation: "horizontal" },
    { number: 19, text: "Use some electrical tape to attach the red wire to the positive ‘+’ side of the battery and the black wire to the negative ‘-’ side.", image: "/images/projects/rc-car-pdf/img-p41-7.jpg", orientation: "horizontal" },
    { number: 20, text: "Place the battery on the right side of the box.", image: "/images/projects/rc-car-pdf/img-p41-8.jpg", orientation: "horizontal" },
    { number: 21, text: "Place in the transmitter circuit. Open the brass fasteners to hold the circuit in place.", image: "/images/projects/rc-car-pdf/img-p41-9.jpg", orientation: "horizontal" }
  ];

  const renderStep = (step: Step, badgeColor: string) => {
    if (step.isEmpty) {
      return <div key={`empty-${Math.random()}`} className={`hidden lg:block lg:w-[calc(50%-1rem)]`} />;
    }

    const widthClass = step.customWidth ? step.customWidth : step.isFullWidth ? "lg:w-full" : (step.isHalfWidth || step.orientation === "horizontal") ? "md:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)]" : "md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)]";

    return (
      <div key={`step-${step.number}`} className={`flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 w-full ${widthClass}`} style={{ flexGrow: 1 }}>
        <div className="flex flex-col">
          {(Array.isArray(step.image) ? step.image : [step.image]).map((imgSrc, idx) => (
            <div key={`${step.number}-img-${idx}`} className={`relative bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center overflow-hidden ${step.customCrop ? step.customCrop : step.isFullWidth ? "h-auto" : (step.number === 8 || step.number === 9 || step.orientation === "horizontal") ? "aspect-video" : "min-h-[300px]"}`}>
              {imgSrc && (
                <img
                  src={imgSrc}
                  alt={`Step ${step.number} image ${idx + 1}`}
                  className={`block w-full ${step.customCrop ? "h-full object-cover" : "h-auto object-contain"}`}
                  style={{
                    height: step.customCrop ? "100%" : "auto",
                    ...(step.rotate ? { transform: `rotate(${step.rotate}deg)` } : {}),
                    ...(step.objectPosition ? { objectPosition: step.objectPosition } : {})
                  }}
                />
              )}
              {idx === 0 && (
                <div className={`absolute top-2 left-2 ${badgeColor} text-white text-xs font-bold px-2 py-1 rounded shadow-md`}>
                  Step {step.number}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug whitespace-pre-wrap">
            {step.text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className="animate-page-enter flex flex-col items-center p-4 md:p-8 lg:p-24 bg-white dark:bg-black w-full">
      <article className="w-full max-w-6xl flex flex-col items-start">
        <Link
          href="/projects/engineering"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Engineering Projects
        </Link>

        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">February 2025</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Remote Control Car</h1>
          <p className="text-xl italic mb-6">Robotics, Electrical, and Mechanical Engineering for Students Grades 8/9</p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
            <Image src="/images/projects/rc-car-title.jpg" alt="Remote Control Car Final Build" fill className="object-cover" priority />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            While working at DiscoverE engineering camp at the University of Alberta I was tasked with creating the curriculum for a remote control car project. The challenge was to create a car that could be built in a single day by students grades 8 and 9 with minimal tools and materials.
          </p>
          <br />
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            This project combines mechanical and electrical engineering to create a functional RC car from scratch. Designed for students and hobbyists, it focuses on teaching core concepts like torque, gear ratios, and RF (Radio Frequency) transmission while keeping the total cost under $10.
          </p>
        </header>

        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 my-8 border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
              Project Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">Materials</h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>4 Jumbo Popsicle Sticks</li>
                  <li>2 Thin Skewers (2.5mm dia)</li>
                  <li>4 Wheels (42mm dia)</li>
                  <li>3V DC Motor</li>
                  <li>2 AA Batteries + Holder</li>
                  <li>RF Receiver & Transmitter Circuits</li>
                  <li>3D Printed Gears (Drive & Stopper)</li>
                  <li>1 Regular Straw & 1 Bubble Tea Straw</li>
                  <li>Loom Band Elastics</li>
                  <li>Googly Eyes (Optional)</li>
                  <li>Tools: Ruler, Wire Strippers, Scissors, Hot Glue</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">Quick Stats</h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li><span className="font-semibold">Target Cost:</span> ~$9.36</li>
                  <li><span className="font-semibold">Build Time:</span> ~3.5 Hours</li>
                  <li><span className="font-semibold">Complexity:</span> Level 1 (Beginner)</li>
                  <li><span className="font-semibold">Requires:</span> 3D Printer</li>
                  <li><span className="font-semibold">Requires:</span> Soldering Iron (Semi-Optional)</li>
                </ul>
              </div>
            </div>
          </div>

                    <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="w-full md:w-1/4 mx-auto rounded-xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
            <video 
              controls 
              className="w-full h-auto block"
              poster="/images/projects/rc-car-title.jpg"
            >
              <source src="/images/projects/rc-car-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="text-2xl font-bold mb-4">Prototypes</h2>
          <p>The final design was the result of 6 major iterations, refining chassis stability and axle friction to ensure a reliable build that could be completed by students within the camp timeframe.</p>
          <div className="flex justify-center my-8">
            <figure className="max-w-2xl w-full">
              <Image src="/images/projects/rc-car-prototypes-01.jpg" alt="Prototype Iterations" width={4032} height={3024} className="rounded-xl border border-gray-100 dark:border-gray-800" />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">Evolution from early popsicle stick experiments to the final standardized design.</figcaption>
            </figure>
          </div>

          <h2 className="text-3xl font-bold mb-8">Part 1: The Car</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p10-7.jpg" alt="Car Materials" fill className="object-cover" style={{ objectPosition: "15% center" }} />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Materials Overview</h3>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  <p className="mb-4">Ensure you have the following components ready for the car assembly:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
                    <li><strong>4 Jumbo Popsicle Sticks</strong></li>
                    <li><strong>8” Plastic Straw</strong></li>
                    <li><strong>3V DC Motor</strong></li>
                    <li><strong>2 AA Batteries & Holder</strong></li>
                    <li><strong>2 Thin Skewers (6”)</strong></li>
                    <li><strong>4 Wheels (42mm)</strong></li>
                    <li><strong>Loom Band Elastics</strong></li>
                    <li><strong>RF Receiver</strong></li>
                    <li><strong>3D Printed Wheel Gears</strong></li>
                    <li><strong>Bubble Tea Straw (1)</strong></li>
                    <li><strong>Googly Eyes (2)</strong></li>
                  </ul>
                  <p className="mt-6 italic opacity-80">(The thick skewer shown in the photo is used for the controller, not the car.)</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8">Step-by-Step Build</h3>
          <div className="flex flex-wrap justify-start gap-8 mb-16">
            {carSteps.map((step) => renderStep(step, "bg-blue-600"))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Part 2: The Controller</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-800/50">
                <Image
                  src="/images/projects/rc-car-pdf/img-p32-8.jpg"
                  alt="Controller Materials"
                  fill
                  className="object-cover" style={{ objectPosition: "40% center" }}
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Materials Overview</h3>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  <p className="mb-4">Gather the following components for the controller assembly:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>RF Transmitter Circuit</strong></li>
                    <li><strong>Stiff Copper Wire (12cm)</strong></li>
                    <li><strong>CR2032 Coin Battery</strong></li>
                    <li><strong>2 Brass Fasteners</strong></li>
                    <li><strong>Tools:</strong> Wire Strippers, Skewer (4mm), Hot Glue, Ruler, Tape</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8">Step-by-Step Build</h3>
          <div className="flex flex-wrap justify-start gap-8 mb-16">
            {controllerSteps.map((step) => renderStep(step, "bg-green-600"))}
          </div>

          <div className="my-16 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-2xl p-4 text-white shadow-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Your Mission</h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    You've built a functional, AA battery powered vehicle that can zip forward and backward. But a truly great engineer never stops at just "functional." Currently, this car is limited to a single axis of motion.
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    The Challenge: Design and implement a steering system.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>How could you pivot the front axle while maintaining structural integrity?</li>
                    <li>Can you utilize a second motor or a servo to control the direction?</li>
                    <li>How would you modify the RF controller to handle left and right commands?</li>
                  </ul>
                  <p className="italic pt-2">
                    Take the foundation you've built here and make it steerable. The best designs often come from the simplest materials!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>
        <ProjectPager category="engineering" currentPath="/projects/engineering/rc-car" />
      </article>
    </main>
  );
}
