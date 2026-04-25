"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

type Step = {
  number: number;
  text: string;
  image?: string;
};

export default function RcCarProject() {
    const carSteps: Step[] = [
    { number: 1, text: "First we are going to build the actual car. (second part is the controller). Here are all the parts you may need.", image: "/images/projects/rc-car-pdf/img-p10-7.jpg" },
    { number: 2, text: "Take one of the large popsicle sticks and snap it in half. Try and be as precise as possible.", image: "/images/projects/rc-car-pdf/img-p11-7.jpg" },
    { number: 3, text: "Take 2 more full large popsicle sticks and hot glue the halves parallel making a box 1 by 1/2 popsicle sticks. Make sure both halves are hot glued on top.", image: "/images/projects/rc-car-pdf/img-p11-8.jpg" },
    { number: 4, text: "Take the last large popsicle stick and snap it in half too.", image: "/images/projects/rc-car-pdf/img-p12-7.jpg" },
    { number: 5, text: "Lay the large 3D printed wheel and motor from the bottom of the box. Lastly lay and hot glue the half popsicle stick across.", image: "/images/projects/rc-car-pdf/img-p12-8.jpg" },
    { number: 6, text: "Flip the base of hot glued popsicle sticks over. Place the large 3D printed wheel down along with the DC motor. Hot glue the last half large popsicle stick down around 5cm from the bottom.", image: "/images/projects/rc-car-pdf/img-p13-7.jpg" },
    { number: 7, text: "Cut/snap the thin skewers at around 12cm. (DO NOT HOT GLUE THESE).", image: "/images/projects/rc-car-pdf/img-p13-8.jpg" },
    { number: 8, text: "Cut the straw into 2 pieces each with the shorter length of the large popsicle stick. (DO NOT HOT GLUE THESE YET).", image: "/images/projects/rc-car-pdf/img-p14-7.jpg" },
    { number: 9, text: "Take 2 wheels, 1 thin skewer and the rest of the straw.", image: "/images/projects/rc-car-pdf/img-p14-8.jpg" },
    { number: 10, text: "Attach the wheels to the skewer.", image: "/images/projects/rc-car-pdf/img-p14-9.jpg" },
    { number: 11, text: "Measure and cut the straw to the length of the skewer with the wheels attached (Around 11.5cm).", image: "/images/projects/rc-car-pdf/img-p15-7.jpg" },
    { number: 12, text: "Cut a tiny bit more off so that it is not exactly the same length but half a cm or so shorter.", image: "/images/projects/rc-car-pdf/img-p15-8.jpg" },
    { number: 13, text: "Take one of the wheels off and slide the straw on then reattach the wheel.", image: "/images/projects/rc-car-pdf/img-p15-9.jpg" },
    { number: 14, text: "Now for the front wheel assembly. Take the 3D printed wheel, remaining two wheels, small cut pieces of straw, remaining thin skewer, and an elastic.", image: "/images/projects/rc-car-pdf/img-p16-7.jpg" },
    { number: 15, text: "Attach the elastic to the 3D printed wheel.", image: "/images/projects/rc-car-pdf/img-p16-8.jpg" },
    { number: 16, text: "Attach the skewer to one of the wheels.", image: "/images/projects/rc-car-pdf/img-p17-7.jpg" },
    { number: 17, text: "Slide one of the straw pieces on it. It should be loose and can move around.", image: "/images/projects/rc-car-pdf/img-p17-8.jpg" },
    { number: 18, text: "Slide the 3D printed wheel on.", image: "/images/projects/rc-car-pdf/img-p17-9.jpg" },
    { number: 19, text: "Slide the last straw piece and then attach the last wheel.", image: "/images/projects/rc-car-pdf/img-p18-7.jpg" },
    { number: 20, text: "Now you should have 2 sets of wheels ready for assembly.", image: "/images/projects/rc-car-pdf/img-p18-9.jpg" },
    { number: 21, text: "Hot glue the DC motor across the popsicle sticks leaving the shaft clear. Copper connections facing UP.", image: "/images/projects/rc-car-pdf/img-p19-7.jpg" },
    { number: 22, text: "Place the small 3D printed wheel on the end of the shaft of the DC motor.", image: "/images/projects/rc-car-pdf/img-p19-8.jpg" },
    { number: 23, text: "Take the battery holder and strip the wires to make them easier to work with.", image: "/images/projects/rc-car-pdf/img-p19-9.jpg" },
    { number: 24, text: "Hot glue the battery holder to the car structure, filling the gap on the left.", image: "/images/projects/rc-car-pdf/img-p20-7.jpg" },
    { number: 25, text: "Take the RF receiver board and hot glue the base of the wires to make them more secure.", image: "/images/projects/rc-car-pdf/img-p20-8.jpg" },
    { number: 26, text: "Wire strip the red, black, SHORT white and green wires of the RF receiver. (DO NOT TOUCH THE LONG WHITE CORD).", image: "/images/projects/rc-car-pdf/img-p21-7.jpg" },
    { number: 27, text: "Hot glue the board to the structure. Position the short white and green wires closer to the motor.", image: "/images/projects/rc-car-pdf/img-p22-7.jpg" },
    { number: 28, text: "Twist the red and black wires from the battery hub and the RF receiver together.", image: "/images/projects/rc-car-pdf/img-p23-7.jpg" },
    { number: 29, text: "Add electrical tape to the ends so they cannot touch and short circuit.", image: "/images/projects/rc-car-pdf/img-p23-8.jpg" },
    { number: 30, text: "Thread the wires through the motor holes and twist them. Ensure correct forward/backward order.", image: "/images/projects/rc-car-pdf/img-p24-7.jpg" },
    { number: 31, text: "Carefully hot glue them (or solder) so they stay attached better.", image: "/images/projects/rc-car-pdf/img-p24-8.jpg" },
    { number: 32, text: "Put in the batteries and flip the red switch. Verify the red LEDs light up.", image: "/images/projects/rc-car-pdf/img-p25-7.jpg" },
    { number: 33, text: "Hold the 3V coin battery to the RF Transmitter circuit board wires.", image: "/images/projects/rc-car-pdf/img-p25-8.jpg" },
    { number: 34, text: "Verify transmitter LED lights up when pressing buttons.", image: "/images/projects/rc-car-pdf/img-p26-7.jpg" },
    { number: 35, text: "Confirm the motor spins when pressing F or B.", image: "/images/projects/rc-car-pdf/img-p26-8.jpg" },
    { number: 36, text: "Tape the longer white wire so it faces upwards as an antenna.", image: "/images/projects/rc-car-pdf/img-p27-7.jpg" },
    { number: 37, text: "Glue the back wheels across the back half popsicle stick. (Glue straw ONLY).", image: "/images/projects/rc-car-pdf/img-p27-8.jpg" },
    { number: 38, text: "Glue the front wheels, ensuring 3D printed wheel doesn&apos;t touch anything.", image: "/images/projects/rc-car-pdf/img-p28-7.jpg" },
    { number: 39, text: "(Optional) Add tape to reinforce the straw mounts.", image: "/images/projects/rc-car-pdf/img-p28-8.jpg" },
    { number: 40, text: "Use the elastic tool to pull the elastic from the 3D printed wheel onto the motor.", image: "/images/projects/rc-car-pdf/img-p29-7.jpg" },
    { number: 41, text: "Add a bit of hot glue to fix the 3D printed wheel to the skewer.", image: "/images/projects/rc-car-pdf/img-p29-8.jpg" },
    { number: 42, text: "THE CAR IS DONE!", image: "/images/projects/rc-car-pdf/img-p30-7.jpg" },
    { number: 43, text: "Optional: Cut a bubble tea straw in half for a bumper.", image: "/images/projects/rc-car-pdf/img-p30-8.jpg" },
    { number: 44, text: "Cut the straw open as straight as possible.", image: "/images/projects/rc-car-pdf/img-p31-7.jpg" },
    { number: 45, text: "Attach it to the front of the car and hot glue it down.", image: "/images/projects/rc-car-pdf/img-p31-8.jpg" },
  ];

  const controllerSteps: Step[] = [
    { number: 1, text: "Gather controller materials: RF transmitter, copper wire, coin battery, fasteners.", image: "/images/projects/rc-car-pdf/img-p32-7.jpg" },
    { number: 2, text: "Strip the ends of the stiff copper wire (long strip on one side for the coil).", image: "/images/projects/rc-car-pdf/img-p32-8.jpg" },
    { number: 3, text: "Verify skewer diameter is 4mm.", image: "/images/projects/rc-car-pdf/img-p33-7.jpg" },
    { number: 4, text: "Wrap wire around skewer.", image: "/images/projects/rc-car-pdf/img-p33-8.jpg" },
    { number: 5, text: "Form the coil antenna.", image: "/images/projects/rc-car-pdf/img-p34-7.jpg" },
    { number: 6, text: "Locate ANT holes on the board.", image: "/images/projects/rc-car-pdf/img-p34-8.jpg" },
    { number: 7, text: "Solder the antenna to the smaller ANT hole.", image: "/images/projects/rc-car-pdf/img-p34-9.jpg" },
    { number: 8, text: "Glue battery wires for strain relief.", image: "/images/projects/rc-car-pdf/img-p35-7.jpg" },
    { number: 9, text: "Strip power wire ends.", image: "/images/projects/rc-car-pdf/img-p36-7.jpg" },
    { number: 10, text: "Slide wires through board center.", image: "/images/projects/rc-car-pdf/img-p36-8.jpg" },
    { number: 11, text: "Snap jumbo stick for base.", image: "/images/projects/rc-car-pdf/img-p36-9.jpg" },
    { number: 12, text: "Trim stick edges.", image: "/images/projects/rc-car-pdf/img-p36-10.jpg" },
    { number: 13, text: "Glue base sticks side-by-side.", image: "/images/projects/rc-car-pdf/img-p37-7.jpg" },
    { number: 14, text: "Cut regular stick for rails.", image: "/images/projects/rc-car-pdf/img-p37-8.jpg" },
    { number: 15, text: "Trim rail segments.", image: "/images/projects/rc-car-pdf/img-p37-9.jpg" },
    { number: 16, text: "Test fit board with rails.", image: "/images/projects/rc-car-pdf/img-p38-7.jpg" },
    { number: 17, text: "Glue side rails.", image: "/images/projects/rc-car-pdf/img-p38-8.jpg" },
    { number: 18, text: "Insert brass fasteners through base.", image: "/images/projects/rc-car-pdf/img-p38-9.jpg" },
    { number: 19, text: "Lock fasteners at 90 degrees.", image: "/images/projects/rc-car-pdf/img-p39-7.jpg" },
    { number: 20, text: "Align board holes with fasteners.", image: "/images/projects/rc-car-pdf/img-p39-8.jpg" },
    { number: 21, text: "Cut small popsicle stick segments.", image: "/images/projects/rc-car-pdf/img-p39-9.jpg" },
    { number: 22, text: "Stack and glue spacers.", image: "/images/projects/rc-car-pdf/img-p40-7.jpg" },
    { number: 23, text: "Glue spacer to left side.", image: "/images/projects/rc-car-pdf/img-p40-8.jpg" },
    { number: 24, text: "Tape Red wire to Battery (+).", image: "/images/projects/rc-car-pdf/img-p40-9.jpg" },
    { number: 25, text: "Tape Black wire to Battery (-).", image: "/images/projects/rc-car-pdf/img-p41-7.jpg" },
    { number: 26, text: "Place battery in the case.", image: "/images/projects/rc-car-pdf/img-p41-8.jpg" },
    { number: 27, text: "Secure board with fasteners.", image: "/images/projects/rc-car-pdf/img-p41-9.jpg" },
    { number: 28, text: "The Entire Project is Complete!", image: "/images/projects/rc-car-pdf/img-p41-10.jpg" },
  ];

  return (
    <main className="animate-page-enter flex flex-col items-center p-4 md:p-8 lg:p-24 bg-white dark:bg-black w-full">
      <article className="w-full max-w-6xl flex flex-col items-start">
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
              February 2025
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Remote Control Car
          </h1>
          <p className="text-xl italic mb-6">A Beginner-Friendly, Cost-Efficient Build</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
            <Image
              src="/images/projects/rc-car-title.jpg"
              alt="Remote Control Car Final Build"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
            This project combines mechanical and electrical engineering to create a functional RC car from scratch. Designed for students and hobbyists, it focuses on teaching core concepts like torque, gear ratios, and RF (Radio Frequency) transmission while keeping the total cost under $10.
          </p>
        </header>

        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          {/* Project Overview */}
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
                  <li>3V DC Motor + AA Battery Holder</li>
                  <li>RF Receiver & Transmitter Boards</li>
                  <li>3D Printed Gears & 42mm Wheels</li>
                  <li>Skewers (Axles) & Plastic Straws</li>
                  <li>Loom Bands (Drive Belt)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">Quick Stats</h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li><span className="font-semibold">Target Cost:</span> ~$9.36</li>
                  <li><span className="font-semibold">Build Time:</span> ~3.5 Hours</li>
                  <li><span className="font-semibold">Complexity:</span> Level 1 (Beginner)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Part 1: The Car (Step-by-Step)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {carSteps.map((step) => (
              <div key={`car-step-${step.number}`} className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-800">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={`Step ${step.number}`}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Step {step.number}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Part 2: The Controller (Step-by-Step)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {controllerSteps.map((step) => (
              <div key={`con-step-${step.number}`} className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-800">
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={`Controller Step ${step.number}`}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Step {step.number}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Prototypes</h2>
          <p>
            The final design was the result of 6 major iterations, refining chassis stability and axle friction to ensure a reliable build.
          </p>
          <div className="flex justify-center my-8">
            <figure className="max-w-2xl w-full">
              <Image
                src="/images/projects/rc-car-prototypes-01.jpg"
                alt="Prototype Iterations"
                width={4032}
                height={3024}
                className="rounded-xl border border-gray-100 dark:border-gray-800"
              />
            </figure>
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>
        <ProjectPager
          category="engineering"
          currentPath="/projects/engineering/rc-car"
        />
      </article>
    </main>
  );
}
