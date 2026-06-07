import React, { useState } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';

type Props = { onClose: () => void };

export default function Login({ onClose }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = localStorage.getItem('harvionix_users');
    const users = raw ? JSON.parse(raw) as Array<{ email: string; password: string; name?: string }> : [];
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      localStorage.setItem('harvionix_current_user', JSON.stringify({ email: user.email, name: user.name }));
      setStatus('success');
      setTimeout(() => { setStatus('idle'); onClose(); }, 900);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 1800);
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-2xl p-6 border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Sign In</h3>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white rounded"> <X /> </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 px-3 py-2 rounded bg-zinc-900 border border-white/10 text-white" />
          </div>
          <div>
            <label className="text-xs text-zinc-400">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mt-2 px-3 py-2 rounded bg-zinc-900 border border-white/10 text-white" />
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full px-4 py-2 rounded bg-amber-400 text-black font-bold">Sign In</button>
          </div>
        </form>

        {status === 'success' && (
          <div className="mt-4 flex items-center gap-3 p-3 rounded bg-emerald-500/10 border border-emerald-400/30">
            <Check className="text-emerald-400" />
            <span className="text-emerald-300">Signed in successfully</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 flex items-center gap-3 p-3 rounded bg-red-500/10 border border-red-400/30">
            <AlertCircle className="text-red-400" />
            <span className="text-red-300">Invalid credentials</span>
          </div>
        )}
      </div>
    </div>
  );
}
