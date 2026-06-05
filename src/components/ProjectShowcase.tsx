/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS_DATA } from "../data";
import { ArrowUpRight, Zap, Target, LayoutGrid } from "lucide-react";

export default function ProjectShowcase() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] group-hover:border-emerald-500/40",
          text: "text-emerald-400",
          pointBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
        };
      case "amber":
        return {
          glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] group-hover:border-amber-500/40",
          text: "text-amber-400",
          pointBg: "bg-amber-500/10 border-amber-500/20 text-amber-300"
        };
      case "cyan":
        return {
          glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.08)] group-hover:border-cyan-500/40",
          text: "text-cyan-400",
          pointBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
        };
      case "indigo":
        return {
          glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] group-hover:border-indigo-500/40",
          text: "text-indigo-400",
          pointBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
        };
      default:
        return {
          glow: "group-hover:border-white/20",
          text: "text-white",
          pointBg: "bg-zinc-900 border-white/10 text-white"
        };
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-zinc-950 border-t border-b border-white/5 overflow-hidden">
      {/* Decorative vertical coordinates laser mapping */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-60" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        {/* Title structure */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
              Impact Proof
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-base">
            Empirical, production-grade systems answering critical agricultural, ecological, and clinical challenges worldwide.
          </p>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS_DATA.map((project) => {
            const styles = getColorClasses(project.color);
            return (
              <div
                key={project.title}
                className={`group relative rounded-2xl bg-black border border-white/5 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:bg-zinc-950/40 ${styles.glow}`}
              >
                {/* Back reflection lighting shine */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/[0.015] to-transparent rounded-tr-2xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Category Pill and Action Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-850 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Project Title and Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-xs font-mono font-semibold uppercase tracking-wider ${styles.text}`}>
                      {project.tagline}
                    </p>
                  </div>

                  {/* Body description */}
                  <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Performance telemetry stats row */}
                <div className="pt-8 mt-8 border-t border-white/5 space-y-4">
                  <div className="text-[9px] font-mono text-zinc-500 tracking-wider">
                    EMPIRICAL DEPLOYMENT METRICS
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className={`text-xs font-mono px-3.5 py-1.5 rounded-lg border flex items-center gap-1.5 ${styles.pointBg}`}
                      >
                        <Zap className="w-3 h-3 text-amber-400 flex-shrink-0 animate-pulse" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
