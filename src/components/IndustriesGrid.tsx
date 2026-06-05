/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { INDUSTRIES_DATA } from "../data";
import { Leaf, HeartPulse, Globe, ArrowRight } from "lucide-react";

export default function IndustriesGrid() {
  // Mapping names to icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Agriculture":
        return <Leaf className="w-8 h-8 text-amber-500" />;
      case "Healthcare":
        return <HeartPulse className="w-8 h-8 text-cyan-400" />;
      case "Sustainability":
        return <Globe className="w-8 h-8 text-emerald-400" />;
      default:
        return <Globe className="w-8 h-8 text-zinc-400" />;
    }
  };

  // Color mapping for borders & glows on hover
  const getGlowColor = (name: string) => {
    switch (name) {
      case "Agriculture":
        return "group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]";
      case "Healthcare":
        return "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]";
      case "Sustainability":
        return "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]";
      default:
        return "group-hover:border-zinc-500/20";
    }
  };

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-zinc-950 border-t border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />

      {/* Decorative background vectors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.02),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
              Global Domains
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Deploying bulletproof cyber-physical intelligence arrays to optimize outputs, patient diagnostics, and eco-resource loops worldwide.
          </p>
        </div>

        {/* Triple Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {INDUSTRIES_DATA.map((industry) => (
            <div
              key={industry.name}
              id={`industry-card-${industry.name.toLowerCase()}`}
              className={`group relative rounded-2xl bg-black border border-white/5 p-8 md:p-10 transition-all duration-500 flex flex-col justify-between h-full ${getGlowColor(
                industry.name
              )}`}
            >
              {/* Card backing graphic flare */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-white/[0.01] to-transparent rounded-tr-2xl pointer-events-none" />

              <div className="space-y-6">
                {/* Icon header */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-500 shadow-inner">
                  {getIcon(industry.name)}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-sans font-bold text-white group-hover:text-amber-400 transition-colors duration-400">
                    {industry.name}
                  </h3>
                  <p className="text-zinc-400 text-xs font-mono tracking-wide uppercase">
                    {industry.tagline}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3.5 pt-4">
                  {industry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-zinc-300 text-sm font-sans"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400/80 group-hover:bg-amber-400 transition-all" />
                      <span className="group-hover:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative CTA foot */}
              <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between text-[11px] font-mono tracking-widest text-zinc-500 uppercase group-hover:text-amber-400 transition-colors">
                <span>View Domain Logic</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
