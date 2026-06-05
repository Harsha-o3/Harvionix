/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import InteractiveGlobe from "./InteractiveGlobe";
import { Compass, Eye, Shield, Target, Award, ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section id="about-group" className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background radial glares */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-32">
        
        {/* WHO WE ARE SECTION */}
        <div id="who-we-are" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Illustration Container */}
          <div className="lg:col-span-6 relative group" id="about-illustration-block">
            {/* Holographic light beams and decorative borders */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/15 via-blue-500/10 to-transparent blur-lg opacity-75 group-hover:opacity-100 transition duration-700" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/40" />

            {/* Glowing HUD Metrics */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-mono text-zinc-400 tracking-wider z-10 flex items-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              INTELLIGENCE.LOCKED
            </div>

            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-mono text-zinc-400 tracking-wider z-10 select-none">
              SYS_TRANSFORM://V6.82
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 aspect-[4/3] bg-zinc-950 flex items-center justify-center relative">
              <img
                src="/src/assets/images/harvionix_tech_transform_1780640479807.png"
                alt="Technology Transformation Civilization"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Side: Who We Are Content */}
          <div className="lg:col-span-6 space-y-6" id="about-description-block">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] font-mono font-semibold text-amber-400 uppercase tracking-widest">
                Our Genesis
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight">
              Who We Are
            </h2>

            <p className="text-zinc-300 font-sans text-base leading-relaxed">
              <strong className="text-white font-semibold">HARVIONIX</strong> is a premium technology innovation powerhouse dedicated to forging highly intelligent solutions that solve immediate real-world challenges across Agriculture, Healthcare, Sustainability, and Digital Transformation.
            </p>

            <p className="text-zinc-400 font-sans text-base leading-relaxed">
              We seamlessly fuse industrial-grade Artificial Intelligence, automation frameworks, high-latency Data Intelligence, and empirical Human-Centered Design to build systems that yield measurable global impact and drive long-term structural value.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-amber-500/20 transition-all">
                <p className="text-amber-400 font-mono text-xs uppercase tracking-wider mb-1">Impact Radius</p>
                <p className="text-white font-sans text-lg font-bold">Global Scale</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-amber-500/20 transition-all">
                <p className="text-amber-400 font-mono text-xs uppercase tracking-wider mb-1">Architecture</p>
                <p className="text-white font-sans text-lg font-bold">Decentralized AI</p>
              </div>
            </div>
          </div>
        </div>

        {/* OUR VISION & OUR MISSION SECTION */}
        <div id="vision-mission" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Glowing Globe (Vision) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <InteractiveGlobe />
          </div>

          {/* Right Side: Vision & Mission Content Cards */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Vision Card */}
            <div className="relative p-8 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-amber-500/20 shadow-2xl transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-tr-2xl pointer-events-none" />
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold">
                    The Horizon
                  </p>
                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-amber-400 transition-colors">
                    Our Vision
                  </h3>
                  <p className="text-zinc-300 font-sans text-base leading-relaxed">
                    To become a global innovation company that empowers industries, cities, and communities through intelligent, sustainable, and deeply transformative technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative p-8 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-amber-500/20 shadow-2xl transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-tr-2xl pointer-events-none" />
              
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                    The Blueprint
                  </p>
                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-blue-400 transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-zinc-300 font-sans text-base leading-relaxed">
                    To design and deliver innovative technology solutions that directly improve human lives, skyrocket organizational efficiency, and robustly accelerate sustainable development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
