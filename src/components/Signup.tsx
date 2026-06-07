import React, { useState } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';

type Props = { onClose: () => void };

export default function Signup({ onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = localStorage.getItem('harvionix_users');
    const users = raw ? JSON.parse(raw) as Array<{ email: string; password: string; name?: string }> : [];
    const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 1800);
      return;
    }
    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem('harvionix_users', JSON.stringify(users));
    localStorage.setItem('harvionix_current_user', JSON.stringify({ email, name }));
    setStatus('success');
    setTimeout(() => { setStatus('idle'); onClose(); }, 900);
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-2xl p-6 border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Create Account</h3>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white rounded"> <X /> </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400">Full name</label>
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-2 px-3 py-2 rounded bg-zinc-900 border border-white/10 text-white" />
          </div>
          <div>
            <label className="text-xs text-zinc-400">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 px-3 py-2 rounded bg-zinc-900 border border-white/10 text-white" />
          </div>
          <div>
            <label className="text-xs text-zinc-400">Password</label>
            <input required minLength={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-2 px-3 py-2 rounded bg-zinc-900 border border-white/10 text-white" />
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full px-4 py-2 rounded bg-amber-400 text-black font-bold">Create account</button>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-4 flex items-center gap-3 p-3 rounded bg-emerald-500/10 border border-emerald-400/30">
            <Check className="text-emerald-400" />
            <span className="text-emerald-300">Account created — signed in</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 flex items-center gap-3 p-3 rounded bg-red-500/10 border border-red-400/30">
            <AlertCircle className="text-red-400" />
            <span className="text-red-300">Account already exists</span>
          </div>
        )}
      </div>
    </div>
  );
}
