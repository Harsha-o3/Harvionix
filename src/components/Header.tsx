/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Shield, Globe, Award } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Overview", target: "hero" },
    { label: "About", target: "who-we-are" },
    { label: "Vision", target: "vision-mission" },
    { label: "Industries", target: "industries" },
    { label: "Services", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Leaders", target: "leaders" },
    { label: "Values", target: "values" }
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-black/65 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo Brand Title */}
          <div
            id="brand-logo-trigger"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:border-amber-400/80 transition-all duration-300">
              <span className="text-amber-400 font-serif font-black text-lg tracking-wider">H</span>
              <div className="absolute inset-0 rounded-lg bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-sans font-extrabold tracking-[0.165em] text-[15px] sm:text-[17px] leading-tight group-hover:text-amber-400 transition-colors duration-300">
                HARVIONIX
              </span>
              <span className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase">
                INTELLIGENT FUTURE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => scrollToSection(item.target)}
                className="px-4 py-1.5 text-[13px] font-sans font-medium text-zinc-300 hover:text-amber-400 tracking-wide hover:bg-white/5 rounded-full transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions & Partner Trigger Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="header-cta"
              onClick={() => scrollToSection("leaders")}
              className="px-5 py-2 text-[12px] font-mono tracking-wider text-amber-400 hover:text-white border border-amber-500/30 hover:border-amber-400 rounded-full bg-amber-500/5 hover:bg-amber-400/10 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300 flex items-center gap-1.5"
            >
              Partner Program
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/40 rounded-lg transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Glass Drawer Overlay */}
      <div
        id="mobile-nav-panel"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center items-center ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500/20 to-transparent border border-amber-400/40">
              <span className="text-amber-400 font-serif font-black text-xl">H</span>
            </div>
            <span className="text-white font-sans font-black tracking-[0.2em] text-xl">
              HARVIONIX
            </span>
          </div>

          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.target}
                id={`mobile-nav-link-${item.target}`}
                onClick={() => scrollToSection(item.target)}
                className="text-lg font-sans font-medium text-zinc-300 hover:text-amber-400 tracking-wider transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            id="mobile-header-cta"
            onClick={() => scrollToSection("leaders")}
            className="mt-4 px-8 py-3 text-sm font-mono tracking-widest text-amber-400 border border-amber-500/30 rounded-full bg-amber-500/5 hover:bg-amber-400/20 transition-all flex items-center gap-2"
          >
            Partner With Us
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
