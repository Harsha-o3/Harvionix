/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import BackgroundParticles from "./components/BackgroundParticles";
import WhoWeAre from "./components/WhoWeAre";
import IndustriesGrid from "./components/IndustriesGrid";
import ServicesGrid from "./components/ServicesGrid";
import ProjectShowcase from "./components/ProjectShowcase";
import Leadership from "./components/Leadership";
import CompanyValues from "./components/CompanyValues";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import logo from "./assets/images/harvionix_logo_1780640461111.png";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <BackgroundParticles />
      <Header />
      <main className="relative z-10">
        <section id="hero" className="relative overflow-hidden pt-[110px] pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.5em] text-amber-200 shadow-[0_15px_50px_rgba(212,175,55,0.10)] backdrop-blur-sm">
                  ENTERPRISE INTELLIGENCE
                </div>
                <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-[-0.06em] text-white">
                  HARVIONIX
                  <span className="block text-3xl font-light text-amber-300 mt-4">Innovation Engineered for the Digital Era</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  Delivering premium enterprise systems, secure intelligent platforms, and operational resilience for global brands. Build bold, future-ready experiences for your customers and partners.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-black shadow-[0_20px_60px_rgba(212,175,55,0.2)] transition duration-300 hover:brightness-105"
                  >
                    Explore Services
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition duration-300 hover:border-amber-400/50 hover:bg-white/10"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>

              <div className="relative flex items-center justify-center rounded-[40px] border border-amber-400/15 bg-[#07101a]/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-amber-500/10 via-transparent to-cyan-500/10 blur-3xl" />
                <div className="relative w-full h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-[#05060b] shadow-[inset_0_0_40px_rgba(0,0,0,0.25)]">
                  <img src={logo} alt="HARVIONIX logo" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhoWeAre />
        <IndustriesGrid />
        <ServicesGrid />
        <ProjectShowcase />
        <Leadership />
        <CompanyValues />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
