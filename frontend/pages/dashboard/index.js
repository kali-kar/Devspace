import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Layout from '../../components/layout/Layout';
import ProfileEditor from '../../components/profile/ProfileEditor';
import BlogManager from '../../components/blog/BlogManager';
import { useAuth } from '../../lib/auth';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 'overview');

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [user, loading]);

  useEffect(() => {
    if (router.query.tab) setActiveTab(router.query.tab);
  }, [router.query.tab]);

  if (loading || !user) return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    </Layout>
  );

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'profile',  label: '👤 Profile' },
    { id: 'blogs',    label: '✍️ My Blogs' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-2xl text-white">Dashboard</h1>
            <p className="text-slate-400 text-sm">Welcome back, {user.name?.split(' ')[0]}</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/u/${user.username}`} className="btn-secondary text-sm">View Profile</Link>
            <Link href="/blog/new" className="btn-primary text-sm">+ New Post</Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-space-700/50 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && <OverviewTab user={user} />}
        {activeTab === 'profile'  && <ProfileEditor />}
        {activeTab === 'blogs'    && <BlogManager />}
      </div>
    </Layout>
  );
}

function OverviewTab({ user }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Skills" value={user.skills?.length || 0} icon="🛠" />
        <StatCard label="Experience" value={user.experience?.length || 0} icon="💼" />
        <StatCard label="Projects" value={user.projects?.length || 0} icon="🚀" />
      </div>

      <div className="glass rounded-xl p-6">
        <h2 className="font-display font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <QuickLink href="/blog/new"        icon="✍️" label="Write a Blog Post" />
          <QuickLink href="/messages"        icon="💬" label="Check Messages" />
          <QuickLink href="/explore"         icon="🔍" label="Explore Developers" />
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <h2 className="font-display font-semibold text-white mb-1">Profile Completion</h2>
        <p className="text-slate-400 text-sm mb-4">Complete your profile to get discovered.</p>
        <div className="space-y-2">
          {[
            { label: 'Profile picture', done: !!user.avatar },
            { label: 'Bio', done: !!user.bio },
            { label: 'Location', done: !!user.location },
            { label: 'Skills', done: user.skills?.length > 0 },
            { label: 'Experience', done: user.experience?.length > 0 },
            { label: 'Projects', done: user.projects?.length > 0 },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center text-xs ${
                item.done ? 'bg-neon-green/20 border-neon-green text-neon-green' : 'border-space-600'
              }`}>
                {item.done && '✓'}
              </div>
              <span className={`text-sm ${item.done ? 'text-slate-300' : 'text-slate-500'}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-2xl font-display font-bold text-white">{value}</p>
          <p className="text-slate-400 text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ href, icon, label }) {
  return (
    <Link href={href} className="glass glass-hover rounded-lg p-4 flex items-center gap-3 group">
      <span className="text-xl">{icon}</span>
      <span className="text-slate-300 text-sm group-hover:text-accent transition-colors">{label}</span>
    </Link>
  );
}
