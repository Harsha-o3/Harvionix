import { useState } from "react";
import { Lock, User } from "lucide-react";
import bgImage from "../assets/images/login-signup.png";

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1580px] items-center justify-end px-6 py-10 lg:px-12">
        <div className="w-full max-w-[460px]">
          <div className="rounded-[32px] border border-white/10 bg-[#06080d]/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="mb-8 space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/85">User {mode === "signin" ? "Login" : "Registration"}</p>
              <h1 className="text-4xl font-black tracking-[-0.04em] text-white">{mode === "signin" ? "Sign In" : "Sign Up"}</h1>
              <p className="text-sm text-slate-400">{mode === "signin" ? "Secure Access. Real-World Control." : "Create your account to get started."}</p>
            </div>

            {/* Toggle buttons */}
            <div className="mb-8 inline-flex rounded-[24px] bg-white/5 p-1 text-sm text-slate-300">
              <button
                onClick={() => setMode("signin")}
                className={`rounded-[20px] px-6 py-2 font-semibold transition ${
                  mode === "signin"
                    ? "bg-amber-400 text-black shadow-[0_8px_20px_rgba(212,175,55,0.24)]"
                    : "hover:bg-white/10"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`rounded-[20px] px-6 py-2 font-semibold transition ${
                  mode === "signup"
                    ? "bg-amber-400 text-black shadow-[0_8px_20px_rgba(212,175,55,0.24)]"
                    : "hover:bg-white/10"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-5">
              {mode === "signin" ? (
                <>
                  <label className="block">
                    <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">Email Address</div>
                    <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#0d131c]/90 px-4 py-4 text-slate-100 transition focus-within:border-amber-300 focus-within:ring-1 focus-within:ring-amber-400/20">
                      <span className="text-amber-300">@</span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">Password</div>
                    <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#0d131c]/90 px-4 py-4 text-slate-100 transition focus-within:border-amber-300 focus-within:ring-1 focus-within:ring-amber-400/20">
                      <span className="text-amber-300"><Lock className="h-5 w-5" /></span>
                      <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </label>

                  <button className="w-full rounded-[24px] bg-gradient-to-r from-amber-400 via-[#ffd264] to-amber-300 px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#070a0f] shadow-[0_18px_40px_rgba(212,175,55,0.32)] transition duration-300 hover:brightness-105">
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  <label className="block">
                    <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">Full Name</div>
                    <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#0d131c]/90 px-4 py-4 text-slate-100 transition focus-within:border-amber-300 focus-within:ring-1 focus-within:ring-amber-400/20">
                      <span className="text-amber-300"><User className="h-5 w-5" /></span>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">Email Address</div>
                    <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#0d131c]/90 px-4 py-4 text-slate-100 transition focus-within:border-amber-300 focus-within:ring-1 focus-within:ring-amber-400/20">
                      <span className="text-amber-300">@</span>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">Password</div>
                    <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#0d131c]/90 px-4 py-4 text-slate-100 transition focus-within:border-amber-300 focus-within:ring-1 focus-within:ring-amber-400/20">
                      <span className="text-amber-300"><Lock className="h-5 w-5" /></span>
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">Confirm Password</div>
                    <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-[#0d131c]/90 px-4 py-4 text-slate-100 transition focus-within:border-amber-300 focus-within:ring-1 focus-within:ring-amber-400/20">
                      <span className="text-amber-300"><Lock className="h-5 w-5" /></span>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                      />
                    </div>
                  </label>

                  <button className="w-full rounded-[24px] bg-gradient-to-r from-amber-400 via-[#ffd264] to-amber-300 px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#070a0f] shadow-[0_18px_40px_rgba(212,175,55,0.32)] transition duration-300 hover:brightness-105">
                    Create Account
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

