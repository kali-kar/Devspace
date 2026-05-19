import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { GoogleLogin } from '@react-oauth/google';

import { useAuth } from '../lib/auth';
import api from '../lib/api';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post('/auth/login', form);

      login(res.data.token, res.data.user);

      toast.success(`Welcome back, ${res.data.user.name}!`);

      router.push('/dashboard');
    } catch (err) {
      toast.error(
        err.response?.data?.message || 'Login failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-space-950 bg-grid flex items-center justify-center px-4">
      <div className="w-full max-w-md animate-slide-up">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-display font-bold">
                D
              </span>
            </div>

            <span className="font-display font-bold text-2xl text-white">
              Dev<span className="text-accent">Space</span>
            </span>
          </Link>

          <p className="text-slate-400 mt-3">
            Sign in to your account
          </p>
        </div>

        <div className="glass rounded-2xl p-8">

          {/* Email Password Login */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="block text-sm text-slate-300 mb-1.5">
                Email
              </label>

              <input
                type="email"
                className="input-field"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1.5">
                Password
              </label>

              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-center text-sm"
            >
              {loading
                ? 'Signing in...'
                : 'Sign in'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-space-600" />
            </div>

            <div className="relative flex justify-center">
              <span className="px-3 bg-space-800 text-slate-500 text-xs">
                or continue with
              </span>
            </div>
          </div>

          {/* Google OAuth */}
          <GoogleButton />

          {/* Footer */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Don&apos;t have an account?{' '}

            <Link
              href="/register"
              className="text-accent hover:text-accent-dim transition-colors"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

function GoogleButton() {
  const { login } = useAuth();
  const router = useRouter();

  const handleGoogleSuccess = async (
    credentialResponse
  ) => {
    try {
      const res = await api.post(
        '/auth/google',
        {
          credential:
            credentialResponse.credential,
        }
      );

      login(res.data.token, res.data.user);

      toast.success(
        `Welcome ${res.data.user.name}!`
      );

      router.push('/dashboard');

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          'Google login failed'
      );
    }
  };

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() =>
          toast.error(
            'Google Login Failed'
          )
        }
      />
    </div>
  );
}