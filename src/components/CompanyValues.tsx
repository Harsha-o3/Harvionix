/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VALUES_DATA, STATS_DATA } from "../data";
import MetricCounter from "./MetricCounter";
import * as Icons from "lucide-react";

export default function CompanyValues() {
  const renderIcon = (iconName: string) => {
    const IconComp = (Icons as any)[iconName];
    if (IconComp) {
      return <IconComp className="w-5 h-5 text-amber-500" />;
    }
    return <Icons.Shield className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="values" className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative space-y-28">
        
        {/* COMPANY VALUES PART */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              Company Values
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              The fundamental principles anchoring our innovation methodology and product deployment paradigms globally.
            </p>
          </div>

          {/* 6 Elegant Values Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {VALUES_DATA.map((val) => (
              <div
                key={val.title}
                className="group relative p-6 rounded-xl bg-black border border-white/5 hover:border-amber-400/30 hover:bg-zinc-950/40 transition-all duration-500 hover:shadow-[0_8px_25px_rgba(245,158,11,0.05)]"
              >
                {/* Visual accent */}
                <div className="absolute top-0 left-6 w-8 h-[2px] bg-amber-400/0 group-hover:bg-amber-400/50 transition-all duration-500" />

                <div className="space-y-4">
                  {/* Icon Block */}
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-amber-400/20 group-hover:bg-amber-400/5 transition-all">
                    {renderIcon(val.iconName)}
                  </div>

                  {/* Text group */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-sans font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                      {val.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENT COUNTERS STATISTICS PART */}
        <div id="achievements" className="pt-16 border-t border-white/5 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
                Realized Benchmarks
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              A Culture of Achievement
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Quantifiable evidence of our technical acceleration and empirical outcomes across target domains.
            </p>
          </div>

          {/* Glowing horizontal statistics dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STATS_DATA.map((stat, i) => (
              <div
                key={stat.label}
                className="relative p-6 rounded-xl bg-zinc-950 border border-white/5 hover:border-white/10 flex flex-col justify-between hover:bg-black transition-all duration-500 text-center sm:text-left h-full"
              >
                {/* Top tracking line index */}
                <span className="text-[9px] font-mono text-zinc-600 block mb-2">
                  METRIC_0{i + 1}
                </span>

                <div className="space-y-2">
                  {/* Scalar Number Indicator */}
                  <div className="text-3xl md:text-4xl font-black">
                    <MetricCounter finalValue={stat.value} />
                  </div>

                  {/* Value description layout */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      {stat.label}
                    </h4>
                    <p className="text-zinc-500 text-[11px] leading-relaxed font-sans">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
