import React from "react";
import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

export default function RcCarProject() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-4 md:p-8 lg:p-24 bg-white dark:bg-black w-full">
      <article className="w-full max-w-4xl flex flex-col items-start px-2 md:px-0">
        <Link
          href="/projects/engineering"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Engineering Projects
        </Link>

        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">November 2024 - January 2025</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Remote Control Car</h1>
          <p className="text-xl italic mb-6">Robotics, Electrical, and Mechanical Engineering for Students Grades 8/9</p>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <Image src="/images/projects/rc-car-title.webp" alt="Remote Control Car Final Build" fill className="object-cover" priority />
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            While working at DiscoverE engineering camp at the University of Alberta I was tasked with creating the curriculum for a remote control car project. The challenge was to create a car that could be built in a single day by students grades 8 and 9 with minimal tools and materials.
          </p>
          <br />
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            This project combines mechanical and electrical engineering to create a functional RC car from scratch. Designed for students and hobbyists, it focuses on teaching core concepts like torque, gear ratios, and RF (Radio Frequency) transmission while keeping the total cost under $10.
          </p>
        </header>

        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gray-85 dark:bg-gray-900 rounded-xl p-6 my-8 border border-gray-200 dark:border-gray-800">
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
                  <li>RF Receiver & Transmitter Circuits (GS-170TX2A)</li>
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
                  <li><span className="font-semibold">Required:</span> 3D Printer</li>
                  <li><span className="font-semibold">Required:</span> Soldering Iron (Semi-Optional)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="w-full md:w-1/3 mx-auto rounded-xl overflow-hidden mb-12 bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-sm">
            <video
              controls
              playsInline
              className="w-full h-auto block"
              poster="/images/projects/rc-car-title.webp"
            >
              <source src="/images/projects/rc-car-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="text-2xl font-bold mb-4">Prototypes</h2>
          <p>The final design was the result of 6 major iterations, refining chassis stability and axle friction to ensure a reliable build that could be completed by students within the camp timeframe.</p>
          <div className="flex justify-center my-8">
            <figure className="max-w-2xl w-full">
              <Image src="/images/projects/rc-car-prototypes-01.webp" alt="Prototype Iterations" width={4032} height={3024} className="rounded-xl border border-gray-200 dark:border-gray-800" />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">Evolution from early popsicle stick experiments to the final standardized design.</figcaption>
            </figure>
          </div>

          <div className="bg-gray-85 dark:bg-gray-900 rounded-xl p-8 my-12 border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-lg p-3 text-white shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">3D Print Files</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Download the STL files for the custom drive gears.</p>
                </div>
              </div>
              <a
                href="/images/projects/rc-car-drive-gears.stl"
                download="RC_Car_Drive_Gears.stl"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download Drive Gears (.STL)
              </a>
            </div>
          </div>



          <h2 className="text-3xl font-bold mt-12 mb-8">Part 1: The Car</h2>
          <div className="bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p10-7.webp" alt="Car Materials" fill className="object-cover" style={{ objectPosition: "15% center" }} />
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

          <h3 className="text-2xl font-bold mb-8">Building the Chassis & Axles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p11-7.webp" alt="Step 1" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 1:</strong> Take one of the large popsicle sticks and snap it in half. Try and be as precise as possible.</figcaption>
            </figure>
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p11-8.webp" alt="Step 2" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 2:</strong> Take 2 more full sticks and hot glue the halves parallel, making a box 1 by 1/2 sticks.</figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p12-7.webp" alt="Step 3" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 3:</strong> Take the last large popsicle stick and snap it in half too.</figcaption>
            </figure>
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p12-8.webp" alt="Step 4" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 4:</strong> Hot glue the half stick across at 8-9cm. Ensure the pieces are level.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p13-7.webp" alt="Step 5" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 5:</strong> Flip the base over. Hot glue the last half stick 5cm from the bottom.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p13-8.webp" alt="Step 6" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 6:</strong> Cut thin skewers at 12cm. Do not hot glue these!</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p14-7.webp" alt="Step 7" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 7:</strong> Cut straw into 2 pieces matching the shorter stick length.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p14-8.webp" alt="Step 8" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 8:</strong> Take 2 wheels, 1 skewer and the straw.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p14-9.webp" alt="Step 9" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 9:</strong> Attach wheels to the skewer.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p15-7.webp" alt="Step 10" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 10:</strong> Cut the straw to ~11.5cm (the length of the axle assembly).</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p15-8.webp" alt="Step 11" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 11:</strong> Trim another 0.5cm so the straw doesn\u0027t touch the wheels.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p15-9.webp" alt="Step 12" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 12:</strong> Slide the straw on. Ensure it doesn\u0027t create friction against the wheels.</figcaption>
            </figure >
          </div >

          <h3 className="text-2xl font-bold mt-16 mb-8">Front Wheel Assembly</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[5/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p16-7.webp" alt="Step 13" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 13:</strong> Gather the 3D printed wheel, remaining wheels, straw pieces, and elastic.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[5/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p16-8.webp" alt="Step 14" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 14:</strong> Attach the elastic to the 3D printed wheel.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p17-7.webp" alt="Step 15" fill className="object-cover" style={{ objectPosition: "center 60%" }} />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 15:</strong> Attach the skewer to one of the wheels.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p17-8.webp" alt="Step 16" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 16:</strong> Slide a straw piece on. It should be loose and free-moving.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p17-9.webp" alt="Step 17" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>17:</strong> Slide on the 3D wheel.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p18-7.webp" alt="Step 18" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>18:</strong> Add the last straw and wheel.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p18-9.webp" alt="Step 19" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>19:</strong> Wheels are ready.</figcaption>
            </figure >
          </div >

          <h3 className="text-2xl font-bold mt-16 mb-8">Mounting Components</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p19-7.webp" alt="Step 20" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 20:</strong> Glue the DC motor across the sticks. Keep copper connections facing up.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p19-8.webp" alt="Step 21" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 21:</strong> Place the small 3D wheel on the motor shaft. Glue the tip if loose.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p20-7.webp" alt="Step 22" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 22:</strong> Glue the battery holder to the gap on the left. Watch the wiring.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p21-7.webp" alt="Step 23" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 23:</strong> Secure RF board wire bases with hot glue to prevent breakage.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p21-8.webp" alt="Step 24" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 24:</strong> Strip red, black, short white, and green wires. Be extremely careful.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p22-7.webp" alt="Step 25" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 25:</strong> Glue the board so motor wires are positioned for easy connection.</figcaption>
            </figure >
          </div >

          <h3 className="text-2xl font-bold mt-16 mb-8">Wiring & Electrical</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p23-7.webp" alt="Step 26" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 26:</strong> Twist power wires together from battery and circuit.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p23-8.webp" alt="Step 27" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 27:</strong> Use electrical tape to insulate the power connections.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p24-7.webp" alt="Step 28" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 28:</strong> Thread and twist wires through the motor terminals.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p25-8.webp" alt="Step 29" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 29:</strong> Secure motor connections with hot glue or solder for reliability.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p25-9.webp" alt="Step 30" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 30:</strong> Test power. Red LEDs should light up when the switch is flipped.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p26-7.webp" alt="Step 31" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 31:</strong> Power the transmitter with the 3V coin battery to test F/B controls.</figcaption>
            </figure >
          </div >

          <h3 className="text-2xl font-bold mt-16 mb-8">Final Car Assembly</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p26-8.webp" alt="Step 32" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 32:</strong> Verify motor spin. Troubleshoot connections if it doesn\u0027t activate.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p27-7.webp" alt="Step 33" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 33:</strong> Position the long white antenna wire facing upward.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p27-8.webp" alt="Step 34" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 34:</strong> Glue back wheels. ONLY glue the straw, never the skewer or wheels.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p28-7.webp" alt="Step 35" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 35:</strong> Mount front wheels. Ensure no glue touches moving parts.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p29-7.webp" alt="Step 36" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 36:</strong> Hook the elastic from the 3D wheel onto the motor shaft.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p29-9.webp" alt="Step 37" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 37:</strong> Center everything and add a small drop of glue to lock the 3D wheel to the axle.</figcaption>
            </figure >
          </div >

          <h2 className="text-3xl font-bold mt-16 mb-8">Part 2: The Controller</h2>
          <div className="bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square bg-gray-85 dark:bg-gray-800/50">
                <Image
                  src="/images/projects/rc-car-pdf/img-p32-8.webp"
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

          <h3 className="text-2xl font-bold mt-16 mb-8">Antenna & Body Construction</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p33-7.webp" alt="Step 1" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 1:</strong> Strip the ends of the stiff copper wire.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p33-8.webp" alt="Step 2" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 2:</strong> Use a ~4mm diameter skewer as a coil template.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p33-10.webp" alt="Step 3" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 3:</strong> Wrap the stripped wire tightly around the skewer.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p34-7.webp" alt="Step 4" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 4:</strong> Remove and compress the coil to form the antenna.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p34-8.webp" alt="Step 5" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 5:</strong> Locate the ANT connection holes on the transmitter board.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[3/4] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p35-7.webp" alt="Step 6" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 6:</strong> Solder the antenna to the designated hole for best results.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p36-8.webp" alt="Step 9" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 9:</strong> Feed power wires through the chassis center hole.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p37-8.webp" alt="Step 13" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 13:</strong> Cut sticks to match the chassis width.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p38-8.webp" alt="Step 14" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 14:</strong> Glue support sticks around the transmitter circuit.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p38-9.webp" alt="Step 15" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 15:</strong> Install brass fasteners through the base to hold the board.</figcaption>
            </figure >
          </div >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p41-7.webp" alt="Step 19" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 19:</strong> Tape power wires to the coin battery terminals.</figcaption>
            </figure >
            <figure className="m-0 bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="relative w-full aspect-video bg-gray-85 dark:bg-gray-800/50">
                <Image src="/images/projects/rc-car-pdf/img-p41-9.webp" alt="Step 21" fill className="object-cover" />
              </div>
              <figcaption className="p-8 flex flex-col justify-center text-gray-700 dark:text-gray-300 leading-relaxed text-sm"><strong>Step 21:</strong> Secure the board with brass fasteners. Project Complete!</figcaption>
            </figure >
          </div >

          <div className="my-16 bg-gray-85 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-600 dark:bg-blue-500 rounded-2xl p-4 text-white shadow-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Your Mission</h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    You&apos;ve built a functional, AA battery powered vehicle that can zip forward and backward. But a truly great engineer never stops at just &quot;functional.&quot; Currently, this car is limited to a single axis of motion.
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
                    Take the foundation you&apos;ve built here and make it steerable. The best designs often come from the simplest materials!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div >
        <ProjectPager category="engineering" currentPath="/projects/engineering/rc-car" />
      </article >
    </main >
  );
}
