/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Globe, Compass } from "lucide-react";

export default function InteractiveGlobe() {
  return (
    <div
      id="vision-glowing-globe-container"
      className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center select-none"
    >
      {/* Cinematic backing glows */}
      {/* <div className="absolute w-[240px] h-[240px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute w-[180px] h-[180px] rounded-full bg-blue-500/5 blur-2xl" /> */}

      {/* Holographic orbital rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-amber-500/40 animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-4 rounded-full border border-dashed border-amber-500/40 animate-[spin_35s_linear_infinite_reverse]" />
      <div className="absolute inset-8 rounded-full border border-dashed border-amber-500/40" />

      {/* Primary Glowing Sphere container */}
      <div className="relative w-56 h-56 rounded-full bg-transparent border-amber-500/20 flex items-center justify-center overflow-hidden">
        {/* Shading reflection overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-950/20 to-amber-500/10 mix-blend-color-dodge z-10" />
        <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-transparent via-black/80 to-black z-10" /> */}

        {/* Global wireframe grid lines using animated SVG */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full text-zinc-800 opacity-60 z-0 animate-[spin_40s_linear_infinite]"
        >
          {/* Latitude lines */}
          <ellipse cx="50" cy="50" rx="49" ry="12" fill="none" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="45" ry="24" fill="none" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="35" ry="36" fill="none" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="0.3" />
          <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="0.3" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(245, 158, 11, 0.12)" strokeWidth="0.3" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="0.4" />

          {/* Longitude curved contours */}
          <ellipse cx="50" cy="50" rx="12" ry="49" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="24" ry="45" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.4" />
          <ellipse cx="50" cy="50" rx="36" ry="35" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="0.3" />
          <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="0.3" />
        </svg>

        {/* Pulsating core beacon */}
        <div className="absolute w-8 h-8 rounded-full bg-amber-500/15 border border-amber-400/30 blur-sm animate-pulse z-10" />
        <div className="absolute w-2 h-2 rounded-full bg-amber-400 z-20 shadow-[0_0_15px_#f59e0b]" />

        {/* Orbiting spatial particles */}
        <div className="absolute w-[94%] h-[94%] rounded-full animate-[spin_8s_linear_infinite] z-20">
          <div className="absolute top-1/2 left-2 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>
        <div className="absolute w-[80%] h-[80%] rounded-full animate-[spin_12s_linear_infinite_reverse] z-20">
          <div className="absolute bottom-4 right-1/4 w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
        </div>
      </div>

      {/* Decorative vertical crosshairs */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-amber-500/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-amber-500/15 to-transparent pointer-events-none" />
    </div>
  );
}
