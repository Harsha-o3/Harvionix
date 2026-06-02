import { useEffect, useRef, useState } from 'react';
import {
  Brain, Cpu, Leaf, Heart, Globe, Zap, BarChart3, Wifi,
  ChevronDown, Menu, X, ArrowRight, Shield, Layers,
  Activity, Satellite, Wind, Droplets, Sun, FlaskConical,
  Database, Cloud, Lock, Star, Check, ExternalLink
} from 'lucide-react';

// ─── Utility ──────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['About', 'Services', 'Ecosystem', 'Team', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{ background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/image.png" alt="HARVIONIX" className="h-10 w-auto" style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' }} />
          <span className="font-display font-bold text-lg gold-text tracking-widest">HARVIONIX</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 tracking-wide">
              {l}
            </a>
          ))}
          <button className="px-5 py-2 rounded-full text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #d4af37, #f5c842, #d4af37)', boxShadow: '0 0 20px rgba(212,175,55,0.4)' }}>
            Get Started
          </button>
        </div>
        <button className="md:hidden text-yellow-400" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 py-4 space-y-3" style={{ background: 'rgba(8,8,8,0.98)', borderTop: '1px solid rgba(212,175,55,0.15)' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-yellow-400 py-2 transition-colors">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroOrbs() {
  return (
    <>
      <div className="orb w-96 h-96 top-20 -left-32" style={{ background: 'rgba(212,175,55,0.08)', opacity: 0.6 }} />
      <div className="orb w-64 h-64 bottom-20 -right-16" style={{ background: 'rgba(212,175,55,0.06)', opacity: 0.5 }} />
      <div className="orb w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(212,175,55,0.04)', opacity: 0.4 }} />
    </>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 4,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div key={p.id} className="particle"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            animation: `twinkle ${p.duration}s ${p.delay}s infinite`,
          }} />
      ))}
    </div>
  );
}

function NeuralNetwork() {
  const nodes = [
    { x: 10, y: 20 }, { x: 10, y: 50 }, { x: 10, y: 80 },
    { x: 35, y: 10 }, { x: 35, y: 35 }, { x: 35, y: 60 }, { x: 35, y: 85 },
    { x: 60, y: 20 }, { x: 60, y: 50 }, { x: 60, y: 80 },
    { x: 85, y: 35 }, { x: 85, y: 65 },
  ];
  const connections = [
    [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
    [3,7],[4,7],[4,8],[5,8],[5,9],[6,8],[6,9],
    [7,10],[8,10],[8,11],[9,11],
  ];
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
      {connections.map(([a,b],i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#d4af37" strokeWidth="0.3" strokeDasharray="1 2"
          style={{ animation: `neural 4s ${i * 0.2}s ease-in-out infinite` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="1.5" fill="#d4af37"
          style={{ filter: 'drop-shadow(0 0 2px #d4af37)', animation: `neural 4s ${i * 0.3}s ease-in-out infinite` }} />
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay grid-bg">
      <HeroOrbs />
      <FloatingParticles />
      <NeuralNetwork />

      {/* Light streaks */}
      {[0, 1.5, 3, 4.5].map((delay, i) => (
        <div key={i} className="light-streak" style={{ top: `${20 + i * 18}%`, animationDelay: `${delay}s`, animationDuration: `${5 + i}s` }} />
      ))}

      {/* Floating data cards */}
      <div className="absolute top-28 left-6 lg:left-16 animate-float glass-card p-3 hidden lg:block" style={{ maxWidth: 180 }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400 font-mono">AI System Active</span>
        </div>
        <div className="text-xs text-gray-500 mb-1">Processing</div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: '78%', background: 'linear-gradient(90deg, #d4af37, #f5c842)', boxShadow: '0 0 8px rgba(212,175,55,0.6)' }} />
        </div>
        <div className="text-right text-xs gold-text font-bold mt-1">78%</div>
      </div>

      <div className="absolute top-40 right-6 lg:right-16 animate-float-delay glass-card p-3 hidden lg:block" style={{ maxWidth: 190 }}>
        <div className="text-xs text-gray-400 font-mono mb-2">Data Analytics</div>
        <div className="flex items-end gap-1 h-8">
          {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="wave-bar flex-1" style={{ height: `${h}%`, opacity: 0.7 + i * 0.04 }} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-32 left-6 lg:left-20 animate-float-slow glass-card p-3 hidden lg:block" style={{ maxWidth: 160 }}>
        <div className="flex items-center gap-2 mb-1">
          <Leaf size={12} className="text-green-400" />
          <span className="text-xs text-gray-400">Sustainability</span>
        </div>
        <div className="text-xl font-bold gold-text font-display">94%</div>
        <div className="text-xs text-gray-500">Green Score</div>
      </div>

      <div className="absolute bottom-40 right-6 lg:right-20 animate-float glass-card p-3 hidden lg:block" style={{ maxWidth: 170 }}>
        <div className="flex items-center gap-2 mb-1">
          <Heart size={12} className="text-red-400" />
          <span className="text-xs text-gray-400">Health Monitor</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-yellow-400" />
          <span className="text-sm font-bold text-green-400">Normal</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'rgba(212,175,55,0.15)', transform: 'scale(1.5)' }} />
            <img src="/image.png" alt="HARVIONIX Logo"
              className="relative w-32 h-32 lg:w-48 lg:h-48 object-contain"
              style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.6)) drop-shadow(0 0 60px rgba(212,175,55,0.3))', animation: 'glow 3s ease-in-out infinite' }} />
          </div>
        </div>

        {/* Company name */}
        <div className="mb-4">
          <h1 className="font-display font-black tracking-[0.25em] text-5xl lg:text-8xl gold-text-shimmer" style={{ lineHeight: 1 }}>
            HARVIONIX
          </h1>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="glow-line-h w-12 lg:w-24" />
          <span className="text-gray-300 tracking-[0.3em] text-xs lg:text-sm font-medium uppercase">
            Innovate &bull; Integrate &bull; Elevate
          </span>
          <div className="glow-line-h w-12 lg:w-24" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Building Smart Solutions for <span className="text-yellow-400 font-medium">Agriculture</span>,{' '}
          <span className="text-yellow-400 font-medium">Healthcare</span> &{' '}
          <span className="text-yellow-400 font-medium">Sustainability</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 rounded-full font-semibold text-black flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #d4af37, #f5c842, #d4af37)', backgroundSize: '200% auto', boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}>
            Explore Solutions
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full font-semibold text-yellow-400 border transition-all duration-300 hover:scale-105 hover:bg-yellow-400/10"
            style={{ borderColor: 'rgba(212,175,55,0.5)' }}>
            Our Vision
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={18} className="animate-bounce text-yellow-600" />
        </div>
      </div>
    </section>
  );
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────

function StatCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const { ref, inView } = useInView(0.5);
  const count = useCountUp(target, 2000, inView);
  return (
    <div ref={ref} className="text-center px-8 py-6">
      <div className="font-display font-black text-4xl lg:text-5xl gold-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

function StatsBanner() {
  return (
    <div className="relative py-2 overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.03), rgba(212,175,55,0.08), rgba(212,175,55,0.03))' }}>
      <div className="glow-line-h absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-yellow-900/30">
        <StatCounter target={150} suffix="+" label="Projects Delivered" />
        <StatCounter target={12} suffix="+" label="Industries Served" />
        <StatCounter target={98} suffix="%" label="Client Satisfaction" />
        <StatCounter target={24} suffix="/7" label="Support Available" />
      </div>
      <div className="glow-line-h absolute bottom-0 left-0 right-0" />
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const { ref, inView } = useInView(0.2);
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-80 h-80 -top-20 right-0 opacity-30" style={{ background: 'rgba(212,175,55,0.06)' }} />
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase font-medium"
              style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
              <Star size={12} />
              About HARVIONIX
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="gold-text">Transforming Ideas</span>
              <br /><span className="text-white">Into Impactful</span>
              <br /><span className="text-white">Technology</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              HARVIONIX is a next-generation technology company that bridges the gap between innovation and real-world impact. We build intelligent, scalable solutions that empower industries and improve lives globally.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From AI-powered agriculture to cutting-edge healthcare platforms, our holistic approach to technology ensures every solution is sustainable, efficient, and future-proof.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Brain size={18} />, label: 'AI-First Approach' },
                { icon: <Shield size={18} />, label: 'Enterprise Security' },
                { icon: <Globe size={18} />, label: 'Global Reach' },
                { icon: <Zap size={18} />, label: 'Rapid Delivery' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <div className="text-yellow-400">{item.icon}</div>
                  <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative flex items-center justify-center h-80 lg:h-96">
            {/* Outer ring */}
            <div className="absolute w-72 h-72 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.15)', animation: 'rotateSlow 30s linear infinite' }}>
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full" style={{ background: '#d4af37', boxShadow: '0 0 8px #d4af37', transform: 'translateX(-50%)' }} />
            </div>
            {/* Middle ring */}
            <div className="absolute w-52 h-52 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.2)', animation: 'rotateSlow 20s linear reverse infinite' }}>
              <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full" style={{ background: '#f5c842', boxShadow: '0 0 6px #f5c842', transform: 'translateX(-50%)' }} />
            </div>
            {/* Inner ring */}
            <div className="absolute w-36 h-36 rounded-full" style={{ border: '1px solid rgba(212,175,55,0.25)', animation: 'rotateSlow 12s linear infinite' }} />
            {/* Center */}
            <div className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center glass-card gold-glow">
              <img src="/image.png" alt="HARVIONIX" className="w-20 h-20 object-contain" style={{ filter: 'drop-shadow(0 0 15px rgba(212,175,55,0.6))' }} />
            </div>
            {/* Orbit icons */}
            {[
              { Icon: Brain, color: '#d4af37', angle: 0, r: 126 },
              { Icon: Leaf, color: '#4ade80', angle: 120, r: 126 },
              { Icon: Heart, color: '#f87171', angle: 240, r: 126 },
            ].map(({ Icon, color, angle, r }, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * r / 2 + 50;
              const y = Math.sin(rad) * r / 2 + 50;
              return (
                <div key={i} className="absolute w-10 h-10 rounded-full flex items-center justify-center glass-card"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)', color, border: `1px solid ${color}33` }}>
                  <Icon size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mission ──────────────────────────────────────────────────────────────────

function Mission() {
  const { ref, inView } = useInView(0.2);
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="orb w-96 h-96 top-0 left-1/4 opacity-20" style={{ background: 'rgba(212,175,55,0.07)' }} />
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase font-medium"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
            <Satellite size={12} />
            Our Mission
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Driving Innovation Toward a <span className="gold-text">Better World</span>
          </h2>
          <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
            <div className="scan-line" />
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
              To create innovative technology that drives{' '}
              <span className="text-yellow-400 font-medium">sustainable growth</span>,{' '}
              <span className="text-yellow-400 font-medium">healthcare advancement</span>, and{' '}
              <span className="text-yellow-400 font-medium">agricultural transformation</span>{' '}
              — shaping a smarter, more equitable future for all.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Innovation Driven', 'Future Ready', 'Sustainable Solutions', 'Smart Technology'].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
                  <Check size={12} className="inline mr-1.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Ecosystems ───────────────────────────────────────────────────────────────

function EcosystemCard({ title, description, icon: Icon, color, items, delay = 0 }: {
  title: string; description: string; icon: React.ElementType;
  color: string; items: string[]; delay?: number;
}) {
  const { ref, inView } = useInView(0.2);
  return (
    <div ref={ref} className={`glass-card-dark p-8 relative overflow-hidden group gold-glow-hover transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10" style={{ background: `radial-gradient(circle at top right, ${color}, transparent)` }} />
      <div className="absolute bottom-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }} />

      <div className="service-icon mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${color}20, ${color}08)`, borderColor: `${color}40` }}>
        <Icon size={24} style={{ color }} />
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Ecosystems() {
  const { ref, inView } = useInView(0.1);
  const ecosystems = [
    {
      title: 'Smart Agriculture',
      description: 'Precision farming powered by AI, IoT sensors, and autonomous drones for next-generation crop management.',
      icon: Leaf,
      color: '#4ade80',
      items: ['AI-powered drone fleets', 'Precision farming analytics', 'IoT sensor networks', 'Smart irrigation systems', 'Digital crop monitoring', 'Yield prediction models'],
    },
    {
      title: 'Healthcare Innovation',
      description: 'AI-driven diagnostics and intelligent healthcare platforms that transform patient outcomes globally.',
      icon: Heart,
      color: '#f87171',
      items: ['AI diagnostic systems', 'Medical data dashboards', 'Remote health monitoring', 'Predictive health analytics', 'Telemedicine platforms', 'Wearable device integration'],
    },
    {
      title: 'Sustainability Solutions',
      description: 'Smart environmental systems and green energy platforms creating sustainable futures for communities.',
      icon: Globe,
      color: '#60a5fa',
      items: ['Renewable energy management', 'Smart city infrastructure', 'Environmental monitoring', 'Recycling optimization systems', 'Carbon footprint tracking', 'Climate data analytics'],
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-96 h-96 bottom-0 right-0 opacity-20" style={{ background: 'rgba(212,175,55,0.06)' }} />
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase font-medium"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
            <Globe size={12} />
            Digital Ecosystems
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Three Pillars of <span className="gold-text">Innovation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Integrated technology ecosystems built to solve humanity's most pressing challenges
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {ecosystems.map((eco, i) => (
            <EcosystemCard key={i} {...eco} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  const { ref, inView } = useInView(0.1);
  const services = [
    { icon: Brain, title: 'AI & Machine Learning', desc: 'Custom neural networks, predictive models, and intelligent automation' },
    { icon: Layers, title: 'Web & Mobile Development', desc: 'High-performance applications built for scale and excellence' },
    { icon: Leaf, title: 'Smart Agriculture Tech', desc: 'Precision tools, drone systems, and IoT farm intelligence' },
    { icon: Activity, title: 'Healthcare Platforms', desc: 'Medical-grade software for diagnostics, monitoring, and patient care' },
    { icon: Wind, title: 'Sustainability Solutions', desc: 'Green energy systems, smart cities, and environmental platforms' },
    { icon: Cpu, title: 'IoT & Automation', desc: 'Connected device ecosystems with real-time data pipelines' },
    { icon: Database, title: 'Data Engineering', desc: 'Scalable data infrastructure, warehousing, and analytics' },
    { icon: Cloud, title: 'Cloud Architecture', desc: 'Resilient multi-cloud deployments with enterprise-grade reliability' },
    { icon: Lock, title: 'Cybersecurity', desc: 'End-to-end security frameworks protecting critical infrastructure' },
  ];

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-80 h-80 top-10 -left-20 opacity-20" style={{ background: 'rgba(212,175,55,0.06)' }} />
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase font-medium"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
            <Cpu size={12} />
            Core Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            What We <span className="gold-text">Build</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive technology services that move industries forward
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const { ref: sRef, inView: sIn } = useInView(0.1);
            return (
              <div key={i} ref={sRef}
                className={`service-card glass-card-dark p-6 group gold-glow-hover transition-all duration-700 ${sIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="service-icon mb-4">
                  <svc.icon size={22} className="text-yellow-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-yellow-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────

function TechStack() {
  const { ref, inView } = useInView(0.2);
  const techs = [
    'Machine Learning', 'Computer Vision', 'Natural Language Processing',
    'Edge Computing', 'Blockchain', 'Digital Twins',
    'Quantum Computing', 'Federated Learning', 'AR / VR',
    'Generative AI', '5G Networks', 'Robotics',
  ];
  return (
    <section className="py-16 px-6 overflow-hidden relative">
      <div className="glow-line-h mb-12 max-w-7xl mx-auto" />
      <div ref={ref} className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs tracking-[0.4em] text-gray-600 uppercase mb-2">Technology Frontier</p>
        <h3 className="font-display text-2xl font-bold gold-text">Cutting-Edge Stack</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {techs.map((t, i) => (
          <span key={i} className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              transitionDelay: `${i * 60}ms`,
              background: 'rgba(212,175,55,0.06)',
              border: '1px solid rgba(212,175,55,0.2)',
              color: '#d4af37',
            }}>
            {t}
          </span>
        ))}
      </div>
      <div className="glow-line-h mt-12 max-w-7xl mx-auto" />
    </section>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

function TeamCard({ name, role, initials, isFounder = false, delay = 0 }: {
  name: string; role: string; initials: string; isFounder?: boolean; delay?: number;
}) {
  const { ref, inView } = useInView(0.2);
  const colors = ['#d4af37', '#a07d20', '#c9a227'];
  const color = colors[delay % colors.length];

  return (
    <div ref={ref} className={`team-card h-72 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="team-card-inner h-full">
        {/* Front */}
        <div className="team-card-front h-full glass-card-dark p-8 flex flex-col items-center justify-center relative overflow-hidden"
          style={{ border: `1px solid ${color}30` }}>
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 0%, ${color}10, transparent 70%)` }} />

          {/* Avatar */}
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center font-display font-black text-2xl text-black"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, boxShadow: `0 0 20px ${color}50` }}>
              {initials}
            </div>
            {isFounder && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: '#d4af37', boxShadow: '0 0 8px rgba(212,175,55,0.8)' }}>
                <Star size={10} className="text-black" fill="black" />
              </div>
            )}
          </div>

          <h3 className="font-display font-bold text-white text-center text-lg mb-1">{name}</h3>
          <p className="text-sm font-medium text-center" style={{ color }}>{role}</p>
          <p className="text-xs text-gray-600 mt-3">Hover to view profile</p>

          {/* Bottom border glow */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }} />
        </div>

        {/* Back */}
        <div className="team-card-back rounded-2xl p-8 flex flex-col items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${color}15, rgba(0,0,0,0.9))`, border: `1px solid ${color}50`, boxShadow: `0 0 30px ${color}20` }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-black mb-4"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}>
            {initials[0]}
          </div>
          <h3 className="font-display font-bold text-white text-lg mb-1">{name}</h3>
          <p className="text-sm mb-4 font-medium" style={{ color }}>{role}</p>
          <p className="text-xs text-gray-400 text-center leading-relaxed mb-4">
            {isFounder
              ? 'Visionary leader driving HARVIONIX\'s mission to transform global industries through intelligent technology.'
              : 'Strategic co-founder committed to delivering world-class innovation across agriculture, health, and sustainability.'}
          </p>
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
              <ExternalLink size={12} style={{ color }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const { ref, inView } = useInView(0.1);
  return (
    <section id="team" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-96 h-96 -bottom-20 left-1/2 opacity-20" style={{ background: 'rgba(212,175,55,0.08)' }} />
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase font-medium"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
            <Star size={12} />
            Leadership Team
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Minds Behind <span className="gold-text">HARVIONIX</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Visionary leaders building the future of intelligent technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamCard name="Chekuri Harsha Vardhan" role="Founder & CEO" initials="CHV" isFounder delay={0} />
          <TeamCard name="Mohan Krishna Thalla" role="Co-Founder" initials="MKT" delay={150} />
          <TeamCard name="Rakesh Kolipaka" role="Co-Founder" initials="RK" delay={300} />
          <TeamCard name="Ranjith Kumar Digutla" role="Co-Founder" initials="RKD" delay={450} />
        </div>
      </div>
    </section>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────

function Achievements() {
  const { ref, inView } = useInView(0.3);
  const items = [
    { icon: Brain, label: 'Innovation Driven', desc: 'Pioneering AI-first solutions across every vertical' },
    { icon: Zap, label: 'Future Ready', desc: 'Built on next-generation architectures and frameworks' },
    { icon: Leaf, label: 'Sustainable Solutions', desc: 'Every product designed with environmental responsibility' },
    { icon: Cpu, label: 'Smart Technology', desc: 'Intelligent systems that learn, adapt, and evolve' },
  ];
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.03), transparent)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {items.map((item, i) => (
            <div key={i} className={`glass-card p-6 text-center group gold-glow-hover transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)' }}>
                <item.icon size={24} className="text-yellow-400" />
              </div>
              <h4 className="font-display font-bold text-white text-sm mb-2">{item.label}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const { ref, inView } = useInView(0.2);
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="orb w-80 h-80 top-0 right-1/4 opacity-25" style={{ background: 'rgba(212,175,55,0.07)' }} />
      <div className="max-w-3xl mx-auto text-center">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs tracking-widest uppercase font-medium"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#d4af37' }}>
            <Wifi size={12} />
            Get In Touch
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="gold-text">Innovate?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Partner with HARVIONIX and bring your most ambitious technology vision to life.
          </p>
          <div className="glass-card p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none focus:border-yellow-600 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.15)' }} />
              <input type="email" placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none focus:border-yellow-600 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.15)' }} />
            </div>
            <input type="text" placeholder="Subject / Industry"
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none focus:border-yellow-600 transition-colors mb-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.15)' }} />
            <textarea rows={4} placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none focus:border-yellow-600 transition-colors resize-none mb-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.15)' }} />
            <button className="w-full py-4 rounded-full font-bold text-black text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #d4af37, #f5c842, #d4af37)', backgroundSize: '200% auto', boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}>
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 overflow-hidden" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/image.png" alt="HARVIONIX" className="h-10 w-auto" style={{ filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.5))' }} />
              <span className="font-display font-bold text-xl gold-text tracking-widest">HARVIONIX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Building smart solutions for Agriculture, Healthcare, and Sustainability through the power of innovative technology.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Systems Operational</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {['Smart Agriculture', 'Healthcare Tech', 'Sustainability', 'AI Solutions', 'IoT Systems'].map(item => (
                <li key={item}><a href="#" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Mission', 'Leadership', 'Careers', 'Contact'].map(item => (
                <li key={item}><a href="#" className="text-gray-500 text-sm hover:text-yellow-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glow-line-h mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <span>&copy; 2024 HARVIONIX Technologies. All rights reserved.</span>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-yellow-600 mx-1">precision</span>
            <span>by</span>
            <span className="gold-text font-semibold ml-1">HARVIONIX Team</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-onyx-900 text-white" style={{ background: '#080808' }}>
      <Navbar />
      <Hero />
      <StatsBanner />
      <About />
      <Mission />
      <Ecosystems />
      <TechStack />
      <Services />
      <Team />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
