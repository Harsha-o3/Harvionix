/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Twitter, Linkedin, Github, Shield, Globe, Award, HeartHandshake, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="app-footer" className="relative bg-black pt-20 pb-10 border-t border-white/5 overflow-hidden select-none">
      {/* Background visual elements representing orbital nodes or volumetric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] rounded-full bg-amber-500/10 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative space-y-16">
        
        {/* Main upper footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info and Tagline block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-400/40">
                <span className="text-amber-400 font-serif font-black text-xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-sans font-black tracking-[0.2em] text-xl leading-none">
                  HARVIONIX
                </span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest mt-1 uppercase">
                  INNOVATING THE UNCHARTED
                </span>
              </div>
            </div>

            <p className="text-lg font-mono tracking-widest text-amber-500 uppercase font-semibold">
              Innovate • Integrate • Elevate
            </p>

            <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-sans">
              Engineering Intelligent Solutions for Agriculture, Healthcare & Sustainability. Building robust cyber-physical neural grids to transform structural industry systems.
            </p>
          </div>

          {/* Column 2: Legal & Information Nodes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Technology Domains
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-500 font-sans">
              <li className="hover:text-amber-400 cursor-pointer transition-colors duration-300 hover:translate-x-1">Cognitive Agriculture</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors duration-300 hover:translate-x-1">Digital Medical Telemetry</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors duration-300 hover:translate-x-1">Renewable Grid Optimization</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors duration-300 hover:translate-x-1">Autonomous Automation Edge</li>
            </ul>
          </div>

          {/* Column 3: Communication & Partnerships */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Partnership Network
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Accepting inquiries for enterprise proof-of-concepts, governmental pilots, and high-impact tech programs.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@harvionix.tech"
                className="text-xs font-mono font-semibold text-amber-400 hover:text-white border border-amber-500/30 hover:border-amber-400/60 px-4 py-2 bg-amber-500/5 hover:bg-amber-400/10 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transform hover:scale-105"
                onClick={(e) => e.preventDefault()}
              >
                Inquire Portal
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Rights row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          <div className="text-zinc-600 text-xs font-sans text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} HARVIONIX Co. All rights reserved. </span>
            <span className="hidden sm:inline-block mx-2 text-zinc-800">|</span>
            <span className="text-zinc-500">Security Encrypted Layer Active</span>
          </div>

          {/* Premium Glowing Golden Social Icons Panel */}
          <div className="flex items-center gap-4">
            {/* Twitter */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full bg-zinc-950 border border-white/5 hover:border-amber-400/40 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Twitter profile"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full bg-zinc-950 border border-white/5 hover:border-amber-400/40 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full bg-zinc-950 border border-white/5 hover:border-amber-400/40 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub integration"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Global Network */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full bg-zinc-950 border border-white/5 hover:border-amber-400/40 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Network stats"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Dynamic Scroll to Top trigger */}
          <button
            onClick={handleScrollToTop}
            id="scroll-to-top"
            className="p-3 text-zinc-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transform hover:scale-110"
            aria-label="Scroll to top of company page"
          >
            <ArrowUp className="w-5 h-5 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
