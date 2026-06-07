/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BackgroundParticles from "./components/BackgroundParticles";
import WhoWeAre from "./components/WhoWeAre";
import IndustriesGrid from "./components/IndustriesGrid";
import ServicesGrid from "./components/ServicesGrid";
import ProjectShowcase from "./components/ProjectShowcase";
import Leadership from "./components/Leadership";
import CompanyValues from "./components/CompanyValues";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import harvionixLogo from "./assets/images/harvionix_logo_1780640461111.png";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);
  const openSignup = () => setShowSignup(true);
  const closeSignup = () => setShowSignup(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const normalizedX = x / rect.width - 0.5;
      const normalizedY = y / rect.height - 0.5;
      setMousePos({ x, y });
      setTilt({ x: normalizedX * 8, y: -normalizedY * 8 });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
      setMousePos({ x: -1000, y: -1000 });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener("mousemove", handleMouseMove);
      heroEl.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (heroEl) {
        heroEl.removeEventListener("mousemove", handleMouseMove);
        heroEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPosition = elRect - bodyRect;
      const offsetPosition = elPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Floating tech pill capsules
  const floatingElements = [
    { text: "Artificial Intelligence",      style: "top-[12%] left-[8%]  animate-float-1 border-amber-500/20",  icon: "🧠" },
    { text: "Environmental Sustainability", style: "top-[28%] left-[6%]  animate-float-2 border-emerald-500/20", icon: "🌍" },
    { text: "Healthcare Innovation",        style: "top-[54%] left-[8%]  animate-float-3 border-cyan-500/20",    icon: "🩺" },
    { text: "Automation Systems",           style: "top-[72%] left-[18%] animate-float-4 border-amber-500/20",   icon: "⚙️" },
    { text: "Smart Agriculture",            style: "top-[13%] right-[10%] animate-float-2 border-emerald-500/20", icon: "🌱" },
    { text: "Smart Cities",                 style: "top-[20%] right-[24%] animate-float-4 border-indigo-500/20",  icon: "🏙️" },
    { text: "Data Intelligence",            style: "top-[36%] right-[10%] animate-float-1 border-blue-500/20",   icon: "📊" },
    { text: "IoT Devices",                  style: "top-[58%] right-[12%] animate-float-3 border-amber-500/20",   icon: "📡" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden font-sans selection:bg-amber-400 selection:text-black">

      {/* GLOBAL MATRIX PARTICLES */}
      <BackgroundParticles />

      {/* HEADER */}
      <Header onOpenLogin={openLogin} onOpenSignup={openSignup} />

      {/* ══════════════════════════════════════════════
          HERO IMAGE SECTION — pure full-screen background,
          no text inside so nothing overlaps HARVIONIX
      ══════════════════════════════════════════════ */}
      <h1 id="hero-company-headline" className="sr-only">HARVIONIX — Architecting the Future. Empowering Humanity.</h1>

      <section
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden min-h-screen"
        style={{ marginTop: "-80px", height: "100vh" }}
      >
        {/* ── HERO IMAGE with smaller centered display ── */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none select-none bg-black flex items-center justify-center"
          style={{
            transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(1.03)`,
            transition: "transform 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={harvionixLogo}
              alt="HARVIONIX Corporate Background — Golden Eagle Crest on Dark Textured Background"
              className="max-w-[70%] max-h-[70%] object-contain rounded-[40px] shadow-[0_35px_120px_rgba(0,0,0,0.35)]"
              style={{ objectPosition: "center 42%", transform: "translateY(22px)" }}
            />
            <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_220px_110px_rgba(0,0,0,0.5)]" />
          </div>
        </div>

        {/* ── TOP EDGE FADE ── */}
        <div
          className="absolute top-0 left-0 w-full h-36 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)" }}
        />

        {/* ── LEFT + RIGHT EDGE FADES ── */}
        <div className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, rgba(0,0,0,0.65), transparent)" }} />

        {/* ── BOTTOM EDGE FADE into black ── */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, transparent, #000000)" }}
        />

        {/* ── PULSING GOLD SPOTLIGHT ── */}
        <div
          className="absolute top-[-12%] left-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none animate-spotlight-pulse z-10"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.20) 0%, rgba(245,158,11,0.07) 42%, transparent 70%)" }}
        />

        {/* ── INTERACTIVE CURSOR GOLD LIGHT BEAM ── */}
        <div
          className="absolute pointer-events-none rounded-full z-10"
          style={{
            width: "420px", height: "420px",
            left: mousePos.x - 210, top: mousePos.y - 210,
            background: "radial-gradient(circle, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0.04) 45%, transparent 70%)",
            willChange: "left, top",
            transition: "left 0.06s linear, top 0.06s linear",
            mixBlendMode: "screen",
          }}
        />

        {/* ── PERIODIC GOLD GLINT SHIMMER ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div
            className="absolute top-[18%] left-0 w-40 h-[65%] animate-glint pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 38%, rgba(255,215,80,0.15) 50%, transparent 62%)" }}
          />
        </div>

        {/* ── 3D FLOATING TECH PILL CAPSULES with counter-parallax ── */}
        <div
          className="absolute inset-0 w-full h-full hidden md:block pointer-events-none select-none z-20"
          style={{
            transform: `translate(${-tilt.x * 2.5}px, ${-tilt.y * 2.5}px)`,
            transition: "transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {floatingElements.map((el, i) => (
            <div
              key={i}
              className={`absolute px-4 py-2 bg-black/55 backdrop-blur-md rounded-full border text-xs font-mono tracking-wide text-zinc-300 flex items-center gap-2 pointer-events-auto hover:border-amber-400/60 hover:text-white hover:bg-black/70 transition-all duration-300 cursor-help ${el.style}`}
            >
              <span className="text-sm">{el.icon}</span>
              <span>{el.text}</span>
            </div>
          ))}
        </div>

      </section>

      {/* ══════════════════════════════════════════════
          HERO CONTENT BLOCK — sits BELOW the image section
          (below HARVIONIX text in the image), on black bg
      ══════════════════════════════════════════════ */}
      <div
        id="hero-content"
        className="relative bg-black flex flex-col items-center text-center gap-4 px-6 pt-6 pb-12 -mt-28 z-30"
      >
        {/* Tagline */}
        <p className="text-sm sm:text-base font-mono text-amber-400 font-bold uppercase tracking-[0.2em] drop-shadow-[0_2px_14px_rgba(212,175,55,0.5)]">
          Architecting the Future. Empowering Humanity.
        </p>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto tracking-normal font-sans">
          Engineering Intelligent Solutions for Agriculture, Healthcare &amp; Sustainability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md">
          <button
            id="hero-explore-btn"
            onClick={() => scrollToId("industries")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-white hover:to-amber-100 hover:shadow-[0_0_35px_rgba(245,158,11,0.65)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer transform hover:scale-105 active:scale-95"
          >
            Explore Solutions
            <ArrowDown className="w-3.5 h-3.5 transform group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            id="hero-partner-btn"
            onClick={() => scrollToId("leaders")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white border border-white/25 hover:border-amber-400/60 bg-white/5 hover:bg-amber-400/10 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95"
          >
            Partner With Us
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="pt-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={() => scrollToId("about-group")}
        >
          <ArrowDown className="w-5 h-5 text-amber-400/70 hover:text-amber-400 transition-colors" />
        </div>
      </div>

      {/* WHO WE ARE, VISION & MISSION SECTION */}
      <WhoWeAre />

      {/* INDUSTRIES GRID */}
      <IndustriesGrid />

      {/* CORE SERVICES */}
      <ServicesGrid />

      {/* PROJECTS SHOWCASE */}
      <ProjectShowcase />

      {/* LEADERSHIP EXECUTIVES */}
      <Leadership />

      {/* CORPORATE VALUES & STATS */}
      <CompanyValues />

      {/* CONTACT FORM */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />

      {showLogin && <Login onClose={closeLogin} />}
      {showSignup && <Signup onClose={closeSignup} />}

    </div>
  );
}
