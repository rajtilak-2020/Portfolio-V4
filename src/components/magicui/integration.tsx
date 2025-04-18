"use client";

import React, { forwardRef, useRef } from "react";
import { SiCss3,SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }>
(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  html: () => <SiHtml5 size={24} color="#E34F26" />,
  javascript: () => <SiJavascript size={24} color="#F7DF1E" />,
  css: () => <SiCss3 size={24} color="#1572B6" />,
  react: () => <SiReact size={24} color="#61DAFB" />,
  tailwind: () => <SiTailwindcss size={24} color="#06B6D4" />,
  typescript: () => <SiTypescript size={24} color="#3178C6" />,
  vscode: () => (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"></stop><stop offset=".257" stop-color="#0069b0"></stop><stop offset=".28" stop-color="#0069b0"></stop><stop offset=".424" stop-color="#0069b0"></stop><stop offset=".491" stop-color="#0072b7"></stop><stop offset=".577" stop-color="#0076bb"></stop><stop offset=".795" stop-color="#0076bb"></stop><stop offset="1" stop-color="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path></svg>)
};

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}>
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}><Icons.html /></Circle>
          <Circle ref={div5Ref}><Icons.css /></Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}><Icons.react /></Circle>
          <Circle ref={div4Ref} className="size-16"><Icons.vscode /></Circle>
          <Circle ref={div6Ref}><Icons.tailwind /></Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}><Icons.javascript /></Circle>
          <Circle ref={div7Ref}><Icons.typescript /></Circle>
        </div>
      </div>
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10}/>
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref}/>
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10}/>
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse/>
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse/>
      </div>
  );
}