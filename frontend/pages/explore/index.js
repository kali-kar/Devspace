import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import api from '../../lib/api';

export default function Explore() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState('');
  const [page, setPage]       = useState(1);
  const [total, setTotal]     = useState(0);
  const [searching, setSearching] = useState(false);
  const LIMIT = 12;

  useEffect(() => {
    if (search.trim()) return; // handled by search effect
    setLoading(true);
    api.get(`/users?page=${page}&limit=${LIMIT}`)
      .then(res => { setUsers(res.data.users); setTotal(res.data.total); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, search]);

  useEffect(() => {
    if (!search.trim()) return;
    const timer = setTimeout(() => {
      setSearching(true);
      api.get(`/users/search?q=${encodeURIComponent(search)}`)
        .then(res => { setUsers(res.data.users); setTotal(res.data.users.length); })
        .catch(console.error)
        .finally(() => setSearching(false));
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const pages = Math.ceil(total / LIMIT);
  const isLoading = loading || searching;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display font-bold text-3xl text-white mb-2">Explore Developers</h1>
          <p className="text-slate-400 mb-6">Discover talented developers from the community.</p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="input-field pl-10"
              placeholder="Search by name, username or skill..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
            {searching && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            )}
          </div>
        </div>

        {/* Grid */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="glass rounded-xl h-56 animate-pulse" />
            ))}
          </div>
        )}

        {!isLoading && users.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No developers found{search ? ` for "${search}"` : ''}.
            {search && (
              <button className="ml-2 text-accent hover:underline" onClick={() => setSearch('')}>Clear search</button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {users.map((dev, i) => (
            <Link
              key={dev._id}
              href={`/u/${dev.username}`}
              className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 group animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-3">
                {dev.avatar ? (
                  <img src={dev.avatar} alt={dev.name} className="w-12 h-12 rounded-xl object-cover ring-1 ring-accent/20 group-hover:ring-accent/40 transition-all" />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-neon-purple/20 border border-accent/20 flex items-center justify-center font-display font-bold text-accent text-lg group-hover:border-accent/40 transition-all">
                    {dev.name?.[0]?.toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-display font-semibold text-white text-sm truncate group-hover:text-accent transition-colors">{dev.name}</p>
                  <p className="text-slate-500 text-xs">@{dev.username}</p>
                </div>
              </div>

              {/* Bio */}
              {dev.bio && (
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{dev.bio}</p>
              )}

              {/* Skills */}
              {dev.skills?.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-auto">
                  {dev.skills.slice(0, 4).map((skill, j) => (
                    <span key={j} className="tag-badge text-[10px] px-2 py-0.5">{skill}</span>
                  ))}
                  {dev.skills.length > 4 && (
                    <span className="text-slate-600 text-[10px] px-2 py-0.5">+{dev.skills.length - 4}</span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Pagination - only when not searching */}
        {!search && pages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-space-800 text-slate-400 text-sm hover:bg-space-700 disabled:opacity-40 transition-colors"
            >
              ← Prev
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  page === p ? 'bg-accent text-space-950' : 'bg-space-800 text-slate-400 hover:bg-space-700'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(pages, p + 1))}
              disabled={page === pages}
              className="px-4 py-2 rounded-lg bg-space-800 text-slate-400 text-sm hover:bg-space-700 disabled:opacity-40 transition-colors"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
