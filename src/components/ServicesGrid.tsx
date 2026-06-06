/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES_DATA } from "../data";
import * as Icons from "lucide-react";

export default function ServicesGrid() {
  // Dynamically resolve lucide icons
  const renderIcon = (iconName?: string) => {
    if (!iconName) return <Icons.Globe className="w-5 h-5 text-amber-400" />;
    
    // Resolve icon from Lucide
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-amber-400" />;
    }
    return <Icons.Globe className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Visual background spotlights mimicking cinematic ray tracing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        
        {/* Header content section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
              Core Services
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              We engineer fully integrated hardware-to-cloud software ecosystems. Empowering corporate networks with scalable computational pipelines.
            </p>
          </div>
          
          <div className="text-right">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              ENGINEERING MATRIX
            </span>
            <span className="text-white font-mono font-medium text-xs border border-white/10 px-3.5 py-1.5 rounded bg-zinc-950">
              SOLUTIONSCOUNT: 11_UNITS
            </span>
          </div>
        </div>

        {/* Bento/Glass Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.title}
              id={`service-card-${idx}`}
              className="group relative rounded-xl bg-zinc-950/45 border border-white/5 p-6 hover:border-amber-400/40 hover:bg-zinc-950/80 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(245,158,11,0.06)]"
            >
              {/* Corner ambient golden laser dot */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-t border-r border-amber-400/30" />

              <div className="space-y-4">
                {/* Icon & Category Row */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 group-hover:bg-amber-400/5 transition-all duration-300">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="text-[9px] font-mono font-semibold tracking-wider text-zinc-500 uppercase bg-zinc-900/50 px-2 py-0.5 rounded border border-white/5">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-sans font-extrabold text-white group-hover:text-amber-400 transition-colors duration-350">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Micro-detail */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-600">
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
