/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LEADERS_DATA } from "../data";
import { Linkedin, Twitter, ArrowUpRight, Award, Shield, CheckCircle } from "lucide-react";

export default function Leadership() {
  return (
    <section id="leaders" className="relative py-24 md:py-32 bg-black overflow-hidden select-none">
      {/* Background spotlights mimicking physical spotlights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        {/* Title structured nicely */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
              Executive Board
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Meet The Visionaries Behind HARVIONIX
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            A multidisciplinary assembly of builders, systems architects, and product strategists engineering tomorrow's intelligent digital ecosystems.
          </p>
        </div>

        {/* Floating Glass Executives Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {LEADERS_DATA.map((leader, index) => (
            <div
              key={leader.name}
              id={`leader-card-${leader.initials.toLowerCase()}`}
              className="group relative rounded-2xl bg-zinc-950/40 border border-white/5 p-8 transition-all duration-500 hover:border-amber-400/40 hover:bg-zinc-950 hover:shadow-[0_15px_40px_rgba(245,158,11,0.06)] flex flex-col justify-between"
              style={{
                // Add a very subtle delayed entry offset feel visually
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Luxury thin golden gradient inner outline on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6">
                
                {/* Executive Avatar Block */}
                <div className="flex items-center justify-between">
                  {/* Monogram branding avatar emblem */}
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center font-serif text-lg font-black tracking-wider border border-amber-400/30 bg-gradient-to-tr from-amber-500/20 via-zinc-950 to-transparent group-hover:border-amber-400/70 transition-all duration-400 shadow-md shadow-black">
                    <span className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                      {leader.initials}
                    </span>
                    {/* Glowing outer halo */}
                    <div className="absolute -inset-1 rounded-full bg-amber-400/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="p-2 text-zinc-500 hover:text-amber-400 rounded-full hover:bg-white/5 transition-colors duration-300"
                      aria-label="LinkedIn profile"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-zinc-500 hover:text-amber-400 rounded-full hover:bg-white/5 transition-colors duration-300"
                      aria-label="Twitter profile"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Executive Metadata */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-sans font-extrabold text-white group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                    {leader.name}
                    <CheckCircle className="w-4 h-4 text-amber-500/70 flex-shrink-0" />
                  </h3>
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-500/80">
                    {leader.role}
                  </p>
                </div>

                {/* Mandate description text */}
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {leader.description}
                </p>

              </div>

              {/* Status and telemetry bottom row */}
              <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  CO_FOUNDER
                </span>
                <span className="group-hover:text-amber-400 transition-colors">
                  SECURE_COMMS_ON
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
