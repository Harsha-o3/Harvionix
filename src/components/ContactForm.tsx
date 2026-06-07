/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Send, Mail, User, MessageSquare, Check, AlertCircle, Loader } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = (data.get('name') as string) || '';
    const email = (data.get('email') as string) || '';
    const message = (data.get('message') as string) || '';

    const subject = `Website Inquiry from ${name || email || 'Visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:harvionix.info@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's email client with prefilled recipient, subject and body
    window.location.href = mailto;

    // Provide immediate UI feedback
    setIsLoading(false);
    setStatus('SUCCESS');
    form.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Center "Get in Touch" Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-amber-500/30 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE - Company Info & Response Time */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-sans font-extrabold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent tracking-tight">
                We're Here to Help
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Have questions? Our team is ready to assist you with any inquiries about our services and solutions.
              </p>
            </div>

            {/* Response Time Info Cards */}
            <div className="space-y-4">
              {/* Quick Response Card */}
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-zinc-900/60 to-black/60 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Quick Response</h3>
                      <p className="text-sm text-zinc-400">We typically respond within</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-amber-400 ml-13">24 Hours</div>
                </div>
              </div>

              {/* Available Team Card */}
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-zinc-900/60 to-black/60 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-lg">👥</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Expert Team</h3>
                      <p className="text-sm text-zinc-400">Dedicated professionals ready to</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 ml-13">Assist You</div>
                </div>
              </div>

              {/* Support Hours Card */}
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-zinc-900/60 to-black/60 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-lg">🕐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Business Hours</h3>
                      <p className="text-sm text-zinc-400">Monday - Friday</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 ml-13">9 AM - 6 PM IST</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tight mb-8">
              Send us a Message
            </h3>

        {/* Form Container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl hover:border-white/20 transition-all duration-300 group">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative group/field">
                <label htmlFor="name" className="flex items-center text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 group-hover/field:border-white/20"
                  />
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 pointer-events-none transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group/field">
                <label htmlFor="email" className="flex items-center text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5 mr-2 text-cyan-400" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your@email.com"
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 group-hover/field:border-white/20"
                  />
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 pointer-events-none transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group/field">
              <label htmlFor="message" className="flex items-center text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                Your Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300 group-hover/field:border-white/20 resize-none"
                />
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 pointer-events-none transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            {/* Submit Button and Status Messages */}
            <div className="space-y-4 pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-white hover:to-amber-100 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer transform hover:scale-105 active:scale-95"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {status === 'SUCCESS' && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-sm text-emerald-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {status === 'ERROR' && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400 font-medium">Oops! Something went wrong. Please try again.</p>
                </div>
              )}
            </div>

            {/* Footer Note */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-zinc-500 text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </div>
          </form>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
