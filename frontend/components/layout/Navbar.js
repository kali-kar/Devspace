import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../lib/auth';
import api from '../../lib/api';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (user) {
      api.get('/messages/unread-count')
        .then(res => setUnread(res.data.count))
        .catch(() => {});
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-space-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:border-accent/60 transition-colors">
              <span className="text-accent font-display font-bold text-sm">D</span>
            </div>
            <span className="font-display font-bold text-xl text-white">Dev<span className="text-accent">Space</span></span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/blog" className="btn-ghost text-sm">Blog</Link>
            <Link href="/explore" className="btn-ghost text-sm">Explore</Link>
            {user ? (
              <>
                <Link href="/dashboard" className="btn-ghost text-sm">Dashboard</Link>
                <Link href="/messages" className="btn-ghost text-sm relative">
                  Messages
                  {unread > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink text-white text-xs rounded-full flex items-center justify-center">
                      {unread}
                    </span>
                  )}
                </Link>
                <Link href={`/u/${user.username}`} className="flex items-center gap-2 ml-2 px-3 py-1.5 rounded-lg hover:bg-space-700 transition-colors">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover ring-1 ring-accent/30" />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                      {user.name?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <span className="text-sm text-slate-300">{user.name?.split(' ')[0]}</span>
                </Link>
                <button onClick={handleLogout} className="btn-ghost text-sm text-slate-400">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn-ghost text-sm">Login</Link>
                <Link href="/register" className="btn-primary text-sm ml-2">Get Started</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-slate-400 hover:text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-space-700/50 flex flex-col gap-1 animate-fade-in">
            <Link href="/blog" className="btn-ghost text-sm" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/explore" className="btn-ghost text-sm" onClick={() => setMenuOpen(false)}>Explore</Link>
            {user ? (
              <>
                <Link href="/dashboard" className="btn-ghost text-sm" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <Link href="/messages" className="btn-ghost text-sm" onClick={() => setMenuOpen(false)}>Messages {unread > 0 && `(${unread})`}</Link>
                <Link href={`/u/${user.username}`} className="btn-ghost text-sm" onClick={() => setMenuOpen(false)}>My Profile</Link>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="btn-ghost text-sm text-left text-slate-400">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn-ghost text-sm" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link href="/register" className="btn-primary text-sm text-center mt-2" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
