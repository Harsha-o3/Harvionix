/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";

interface Hub {
  id: string;
  name: string;
  region: string;
  x: number; // Percent relative coordinates for SVG
  y: number;
  status: string;
}

export default function InteractiveMap() {
  const [activeHub, setActiveHub] = useState<Hub | null>(null);
  const [pulseCount, setPulseCount] = useState(0);

  // Innovation hubs coordinates on a custom-scaled widescreen cartography coordinates grid
  const hubs: Hub[] = [
    { id: "sv", name: "Silicon Valley Hub", region: "North America", x: 18, y: 35, status: "Active AI Research" },
    { id: "ny", name: "New York Lab", region: "North America", x: 28, y: 33, status: "Smart Cities & Policy" },
    { id: "ldn", name: "London HQ Core", region: "Europe", x: 47, y: 25, status: "Global Operations" },
    { id: "mun", name: "Munich Engineering", region: "Europe", x: 52, y: 27, status: "IoT Systems Center" },
    { id: "dxb", name: "Dubai Sustainable Tech", region: "Middle East", x: 62, y: 44, status: "Smart Infrastructure & Solar Grid" },
    { id: "blr", name: "Bengaluru AI Dev", region: "Asia Pacific", x: 70, y: 53, status: "Machine Learning Solutions" },
    { id: "sin", name: "Singapore AgriTech Lab", region: "Asia-Pacific", x: 76, y: 62, status: "Precision Farming & Ecology" },
    { id: "tky", name: "Tokyo Automation Hub", region: "Asia Pacific", x: 84, y: 36, status: "Robotics and Healthcare AI" },
    { id: "syd", name: "Sydney Future Climate", region: "Australia", x: 88, y: 80, status: "Sustainable Resource Systems" }
  ];

  // Auto rotate highlighted hubs for atmospheric micro-intelligence dynamics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHub((prev) => {
        if (!prev) return hubs[0];
        const currentIndex = hubs.findIndex((h) => h.id === prev.id);
        const nextIndex = (currentIndex + 1) % hubs.length;
        return hubs[nextIndex];
      });
      setPulseCount((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="futuristic-holographic-map"
      className="absolute inset-0 w-full h-full opacity-35 hover:opacity-55 transition-opacity duration-1000 overflow-hidden flex items-center justify-center select-none pointer-events-none"
    >
      {/* Background radial glow */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-amber-500/5 via-blue-500/2 to-transparent blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-[1200px] aspect-[2/1] px-4">
        {/* Radar grids overlay */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-[35%] h-[0.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-[65%] h-[0.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-zinc-800"
          style={{ filter: "drop-shadow(0 0 12px rgba(245,158,11,0.05))" }}
        >
          {/* Abstract background grid dots to look like a clean holographic interface */}
          <defs>
            <pattern id="grid" width="3" height="3" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.45" fill="rgba(255, 255, 255, 0.04)" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="opacity-70" />

          {/* Connected optical telemetry arcs (Bridges of global hubs) */}
          {hubs.map((hub, idx) => {
            // Draw a curved line to the next hub in line
            const nextHub = hubs[(idx + 1) % hubs.length];
            const dx = nextHub.x - hub.x;
            const dy = nextHub.y - hub.y;
            const mx = hub.x + dx / 2;
            const my = hub.y + dy / 2 - Math.abs(dx) * 0.18; // Apex of arch arc

            const isActivePath = activeHub?.id === hub.id;

            return (
              <path
                key={`arc-${hub.id}`}
                d={`M ${hub.x} ${hub.y} Q ${mx} ${my} ${nextHub.x} ${nextHub.y}`}
                fill="none"
                stroke={isActivePath ? "url(#gold-gradient)" : "rgba(255, 255, 255, 0.03)"}
                strokeWidth={isActivePath ? "0.35" : "0.15"}
                strokeDasharray={isActivePath ? "1, 1" : "none"}
                className="transition-all duration-1000"
              />
            );
          })}

          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(245, 158, 11, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
          </defs>

          {/* Continents Vector Geometry Represented Glossily via abstract curved pathways */}
          {/* USA & America segment path */}
          <path
            d="M 12 25 Q 16 28 18 36 T 25 45 T 28 65 T 22 80 M 8 18 Q 15 15 22 25 T 32 35 T 40 50 L 32 58 Z"
            fill="none"
            stroke="rgba(255, 255, 255, 0.015)"
            strokeWidth="0.8"
          />
          {/* Eurasia and Africa segment paths */}
          <path
            d="M 45 20 Q 55 15 65 18 T 80 22 T 88 32 M 43 25 Q 48 35 45 48 T 52 65 T 58 78 M 62 40 Q 72 45 80 55 T 85 70"
            fill="none"
            stroke="rgba(255, 255, 255, 0.015)"
            strokeWidth="0.8"
          />

          {/* Hub Circles and Signal Rings */}
          {hubs.map((hub) => {
            const isActive = activeHub?.id === hub.id;
            return (
              <g key={hub.id} className="pointer-events-auto cursor-crosshair">
                {/* Outermost sweeping radar circle */}
                {isActive && (
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="4.5"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="0.1"
                    className="animate-ping opacity-60"
                    style={{ transformOrigin: `${hub.x}px ${hub.y}px`, animationDuration: "3s" }}
                  />
                )}

                {/* Ambient breathing signal glowing circle */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isActive ? "2.2" : "1.2"}
                  fill={isActive ? "#f8fafc" : "#b45309"}
                  className="transition-all duration-700"
                  opacity={isActive ? 0.95 : 0.6}
                />

                {/* Concentric node highlight */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isActive ? "0.8" : "0.5"}
                  fill={isActive ? "#f59e0b" : "#f59e0b"}
                  className="transition-all duration-700"
                  opacity={isActive ? 1 : 0.4}
                />
              </g>
            );
          })}
        </svg>

        {/* Global Hub Hovering Telemetry Badge HUD */}
        {activeHub && (
          <div
            id={`hub-tooltip-${activeHub.id}`}
            className="absolute bg-zinc-950/85 backdrop-blur-md rounded-lg p-3.5 border border-amber-500/35 shadow-2xl shadow-amber-500/5 max-w-[240px] pointer-events-none transition-all duration-500 hidden md:block"
            style={{
              left: `${activeHub.x}%`,
              top: `${activeHub.y - 12}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-[10px] font-mono font-medium text-amber-400 uppercase tracking-widest leading-none">
                {activeHub.region}
              </p>
            </div>
            <p className="text-[12.5px] font-sans font-bold text-slate-100 mb-0.5">
              {activeHub.name}
            </p>
            <p className="text-[10px] font-mono text-zinc-400 leading-tight">
              {activeHub.status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
