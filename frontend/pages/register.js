import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useAuth } from '../lib/auth';
import api from '../lib/api';

export default function Register() {
  const { login } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/auth/register', form);
      login(res.data.token, res.data.user);
      toast.success('Welcome to DevSpace!');
      router.push('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const field = (label, key, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm text-slate-300 mb-1.5">{label}</label>
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={form[key]}
        onChange={e => setForm({ ...form, [key]: e.target.value })}
        required
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-space-950 bg-grid flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-slide-up">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-display font-bold">D</span>
            </div>
            <span className="font-display font-bold text-2xl text-white">Dev<span className="text-accent">Space</span></span>
          </Link>
          <p className="text-slate-400 mt-3">Create your developer account</p>
        </div>

        <div className="glass rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {field('Full Name', 'name', 'text', 'Jane Doe')}
            <div>
              <label className="block text-sm text-slate-300 mb-1.5">Username</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">@</span>
                <input
                  type="text"
                  className="input-field pl-8"
                  placeholder="janedoe"
                  value={form.username}
                  onChange={e => setForm({ ...form, username: e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, '') })}
                  required
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">Your profile will be at devspace.app/u/{form.username || 'username'}</p>
            </div>
            {field('Email', 'email', 'email', 'you@example.com')}
            {field('Password', 'password', 'password', 'Min 6 characters')}

            <button type="submit" disabled={loading} className="btn-primary w-full text-center text-sm">
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-accent hover:text-accent-dim transition-colors">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
