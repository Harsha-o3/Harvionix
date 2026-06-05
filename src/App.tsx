/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import BackgroundParticles from "./components/BackgroundParticles";
import InteractiveMap from "./components/InteractiveMap";
import WhoWeAre from "./components/WhoWeAre";
import IndustriesGrid from "./components/IndustriesGrid";
import ServicesGrid from "./components/ServicesGrid";
import ProjectShowcase from "./components/ProjectShowcase";
import Leadership from "./components/Leadership";
import CompanyValues from "./components/CompanyValues";
import Footer from "./components/Footer";

import harvionixLogo from "./assets/images/harvionix_logo_1780640461112.png";
import { ArrowDown, Cpu, Sparkles, ChevronRight, CheckCircle, ArrowUpRight } from "lucide-react";

export default function App() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      const offsetPosition = elPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Absolute positioning definitions for floating representational capsules
  const floatingElements = [
    { text: "Artificial Intelligence", style: "top-[15%] left-[8%] animate-float-1 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]", icon: "🧠" },
    { text: "Smart Agriculture", style: "top-[25%] right-[6%] animate-float-2 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]", icon: "🌱" },
    { text: "Healthcare Innovation", style: "bottom-[28%] left-[7%] animate-float-3 border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.05)]", icon: "🩺" },
    { text: "IoT Devices", style: "bottom-[18%] right-[10%] animate-float-4 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]", icon: "📡" },
    { text: "Environmental Sustainability", style: "top-[38%] left-[12%] animate-float-2 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]", icon: "🌍" },
    { text: "Data Intelligence", style: "bottom-[42%] right-[12%] animate-float-1 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]", icon: "📊" },
    { text: "Smart Cities", style: "top-[18%] left-[45%] lg:left-[35%] animate-float-4 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.05)]", icon: "🏙️" },
    { text: "Automation Systems", style: "bottom-[12%] left-[40%] animate-float-3 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]", icon: "⚙️" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden pt-20 font-sans selection:bg-amber-400 selection:text-black">
      
      {/* GLOBAL MATRIX PARTICLES */}
      <BackgroundParticles />

      {/* HEADER SECTION */}
      <Header />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden border-b border-white/5"
      >
        {/* Cinematic Golden spotlights overlay */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] r-500 h-[300px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-10" />
        
        {/* Interactive Holographic World Map in the background */}
        <InteractiveMap />

        {/* 3D floating element capsules surrounding the hero */}
        <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none select-none z-20">
          {floatingElements.map((el, i) => (
            <div
              key={i}
              className={`absolute px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border text-xs font-mono tracking-wide text-zinc-300 flex items-center gap-2 pointer-events-auto hover:border-amber-400/50 hover:text-white transition-all duration-300 cursor-help ${el.style}`}
            >
              <span className="text-sm">{el.icon}</span>
              <span>{el.text}</span>
            </div>
          ))}
        </div>

        {/* Core Hero Content container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 z-30 px-4 mt-8">
          
          {/* Subtle gold badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/5 border border-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-amber-400">
              GLOBAL TECHNOLOGY PIONEERS
            </span>
          </div>

          {/* Golden Winged corporate logo & glowing spotlight container */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-full bg-gradient-radial from-amber-500/5 to-transparent border border-white/5 shadow-[0_0_50px_rgba(245,158,11,0.06)] group">
            {/* Top reflective spotlight flare */}
            <div className="absolute -top-10 w-24 h-24 rounded-full bg-amber-400/10 blur-xl pointer-events-none animate-pulse" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-amber-500/15 via-transparent to-white/10 blur-md pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Real Logo image from generated asset */}
            <div className="w-[88%] h-[88%] rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-black/80 relative">
              <img
                src={harvionixLogo}
                alt="HARVIONIX Gold-and-Black Winged Corporate Crest Logo"
                className="w-full h-full object-contain rounded-full opacity-90 scale-95 hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Interactive glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
            </div>

            {/* Futuristic ticks overlay */}
            <div className="absolute -bottom-2 px-2 py-0.5 rounded bg-zinc-950 border border-amber-400/30 text-[8px] font-mono text-amber-400 uppercase tracking-widest leading-none">
              VERIFIED: AUTHENTIC_BRAND
            </div>
          </div>

          {/* Corporate Title Group */}
          <div className="space-y-4">
            <h1
              id="hero-company-headline"
              className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-zinc-400 tracking-[-0.035em] leading-none"
            >
              HARVIONIX
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl font-mono text-amber-400 font-bold uppercase tracking-[0.25em] max-w-2xl mx-auto leading-relaxed">
              Architecting the Future. Empowering Humanity.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto tracking-normal font-sans pt-1">
              Engineering Intelligent Solutions for Agriculture, Healthcare & Sustainability.
            </p>
          </div>

          {/* Luxury glass CTAs buttons block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full max-w-md">
            
            <button
              id="hero-explore-btn"
              onClick={() => scrollToId("industries")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Explore Solutions
              <ArrowDown className="w-3.5 h-3.5 transform group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              id="hero-partner-btn"
              onClick={() => scrollToId("leaders")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white border border-white/10 hover:border-amber-400/40 bg-white/5 hover:bg-amber-400/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Partner With Us
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>

          </div>

          {/* Floating interactive indicator */}
          <div className="pt-16 animate-bounce opacity-40">
            <ArrowDown className="w-6 h-6 text-zinc-500 hover:text-amber-400 cursor-pointer" onClick={() => scrollToId("about-group")} />
          </div>

        </div>
      </section>

      {/* WHO WE ARE, VISION, & MISSION SECTION (INCLUDES INTERACTIVE GLOBE & GLOBULE) */}
      <WhoWeAre />

      {/* INDUSTRIES GRID DOMAIN BLOCK */}
      <IndustriesGrid />

      {/* CORE SERVICES SPECIFIED BLOCK */}
      <ServicesGrid />

      {/* PROJECTS SHOWCASE SECTION */}
      <ProjectShowcase />

      {/* LEADERSHIP EXECUTIVES INTEL PANEL */}
      <Leadership />

      {/* CORPORATE VALUES AND STATS COUNTING MODULE */}
      <CompanyValues />

      {/* FOOTER SECTION */}
      <Footer />

    </div>
  );
}
