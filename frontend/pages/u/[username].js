import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Layout from '../../components/layout/Layout';
import SendMessageForm from '../../components/messaging/SendMessageForm';
import api from '../../lib/api';
import { useAuth } from '../../lib/auth';

export default function ProfilePage({ user, blogs }) {
  const { user: currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('about');
  const [showMsgForm, setShowMsgForm] = useState(false);
  const router = useRouter();

  if (router.isFallback) return <Layout><div className="p-20 text-center text-slate-400">Loading...</div></Layout>;
  if (!user) return <Layout><div className="p-20 text-center text-slate-400">User not found.</div></Layout>;

  const isOwn = currentUser?.username === user.username;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10 animate-fade-in">
        {/* Profile Header */}
        <div className="glass rounded-2xl p-8 mb-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-2xl object-cover ring-2 ring-accent/20 flex-shrink-0" />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-neon-purple/20 border border-accent/20 flex items-center justify-center text-3xl font-display font-bold text-accent flex-shrink-0">
                {user.name?.[0]?.toUpperCase()}
              </div>
            )}

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="font-display font-bold text-2xl text-white">{user.name}</h1>
                  <p className="text-accent text-sm">@{user.username}</p>
                  {user.location && <p className="text-slate-400 text-sm mt-1">📍 {user.location}</p>}
                </div>
                <div className="flex gap-2">
                  {isOwn ? (
                    <Link href="/dashboard?tab=profile" className="btn-secondary text-sm">Edit Profile</Link>
                  ) : currentUser ? (
                    <button onClick={() => setShowMsgForm(!showMsgForm)} className="btn-primary text-sm">
                      {showMsgForm ? 'Cancel' : '✉ Send Message'}
                    </button>
                  ) : (
                    <Link href="/login" className="btn-primary text-sm">Message</Link>
                  )}
                </div>
              </div>

              {user.bio && <p className="text-slate-300 mt-3 leading-relaxed">{user.bio}</p>}

              {/* Social links */}
              <div className="flex flex-wrap gap-3 mt-4">
                {user.website  && <a href={user.website}  target="_blank" rel="noopener" className="text-slate-400 hover:text-accent text-sm transition-colors">🌐 Website</a>}
                {user.github   && <a href={`https://github.com/${user.github}`}   target="_blank" rel="noopener" className="text-slate-400 hover:text-accent text-sm transition-colors">GitHub</a>}
                {user.linkedin && <a href={`https://linkedin.com/in/${user.linkedin}`} target="_blank" rel="noopener" className="text-slate-400 hover:text-accent text-sm transition-colors">LinkedIn</a>}
                {user.twitter  && <a href={`https://twitter.com/${user.twitter}`}  target="_blank" rel="noopener" className="text-slate-400 hover:text-accent text-sm transition-colors">Twitter</a>}
              </div>
            </div>
          </div>
        </div>

        {/* Send Message Form */}
        {showMsgForm && (
          <div className="glass rounded-xl p-6 mb-6 animate-slide-up">
            <h3 className="font-display font-semibold text-white mb-4">Send Message to @{user.username}</h3>
            <SendMessageForm recipientUsername={user.username} onSent={() => setShowMsgForm(false)} />
          </div>
        )}

        {/* Skills */}
        {user.skills?.length > 0 && (
          <div className="glass rounded-xl p-6 mb-6">
            <h2 className="font-display font-semibold text-white mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, i) => (
                <span key={i} className="tag-badge">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 border-b border-space-700/50 mb-6">
          {['about', 'blogs', 'projects'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? 'border-accent text-accent'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab} {tab === 'blogs' && `(${blogs?.length || 0})`}
              {tab === 'projects' && `(${user.projects?.length || 0})`}
            </button>
          ))}
        </div>

        {/* About tab */}
        {activeTab === 'about' && (
          <div className="space-y-6 animate-fade-in">
            {user.experience?.length > 0 && (
              <div className="glass rounded-xl p-6">
                <h2 className="font-display font-semibold text-white mb-4">Experience</h2>
                <div className="space-y-5">
                  {user.experience.map((exp) => (
                    <div key={exp._id} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-white">{exp.title}</h3>
                        <p className="text-accent text-sm">{exp.company} {exp.location && `· ${exp.location}`}</p>
                        <p className="text-slate-500 text-xs mt-0.5">
                          {format(new Date(exp.from), 'MMM yyyy')} – {exp.current ? 'Present' : exp.to ? format(new Date(exp.to), 'MMM yyyy') : ''}
                        </p>
                        {exp.description && <p className="text-slate-400 text-sm mt-1">{exp.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Blogs tab */}
        {activeTab === 'blogs' && (
          <div className="space-y-4 animate-fade-in">
            {blogs?.length === 0 && <p className="text-slate-500 text-center py-10">No blog posts yet.</p>}
            {blogs?.map(blog => (
              <Link key={blog._id} href={`/blog/${blog.slug}`} className="glass glass-hover rounded-xl p-5 flex flex-col gap-2 block">
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags?.map(t => <span key={t} className="tag-badge">{t}</span>)}
                </div>
                <h3 className="font-display font-semibold text-white hover:text-accent transition-colors">{blog.title}</h3>
                {blog.excerpt && <p className="text-slate-400 text-sm line-clamp-2">{blog.excerpt}</p>}
                <div className="flex gap-4 text-xs text-slate-500 mt-1">
                  <span>{format(new Date(blog.createdAt), 'MMM d, yyyy')}</span>
                  <span>{blog.readTime} min read</span>
                  <span>❤ {blog.likes?.length || 0}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Projects tab */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
            {user.projects?.length === 0 && <p className="text-slate-500 col-span-2 text-center py-10">No projects listed yet.</p>}
            {user.projects?.map(project => (
              <div key={project._id} className="glass glass-hover rounded-xl p-5">
                <h3 className="font-display font-semibold text-white mb-2">{project.name}</h3>
                {project.description && <p className="text-slate-400 text-sm mb-3">{project.description}</p>}
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((t, i) => <span key={i} className="tag-badge">{t}</span>)}
                  </div>
                )}
                <div className="flex gap-3">
                  {project.link   && <a href={project.link}   target="_blank" rel="noopener" className="text-accent text-sm hover:underline">Live →</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener" className="text-slate-400 text-sm hover:text-white">GitHub</a>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const res = await fetch(`${API}/users/${params.username}`);
    const data = await res.json();
    if (!data.success) return { notFound: true };
    return { props: { user: data.user, blogs: data.blogs } };
  } catch {
    return { notFound: true };
  }
}
