import { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import api from '../../lib/api';

export default function BlogManager() {
  const [blogs, setBlogs]     = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = () => {
    setLoading(true);
    api.get('/blogs/my')
      .then(res => setBlogs(res.data.blogs))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await api.delete(`/blogs/${id}`);
      setBlogs(prev => prev.filter(b => b._id !== id));
      toast.success('Blog deleted');
    } catch { toast.error('Failed to delete'); }
  };

  const handleTogglePublish = async (blog) => {
    try {
      await api.put(`/blogs/${blog._id}`, { published: !blog.published });
      setBlogs(prev => prev.map(b => b._id === blog._id ? { ...b, published: !b.published } : b));
      toast.success(blog.published ? 'Unpublished' : 'Published');
    } catch { toast.error('Failed to update'); }
  };

  if (loading) return (
    <div className="space-y-3">
      {[1,2,3].map(i => <div key={i} className="glass rounded-xl h-20 animate-pulse" />)}
    </div>
  );

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display font-semibold text-white">My Blog Posts</h2>
        <Link href="/blog/new" className="btn-primary text-sm">+ New Post</Link>
      </div>

      {blogs.length === 0 && (
        <div className="glass rounded-xl p-12 text-center">
          <p className="text-slate-500 mb-4">You haven&apos;t written any posts yet.</p>
          <Link href="/blog/new" className="btn-primary text-sm inline-block">Write your first post</Link>
        </div>
      )}

      <div className="space-y-3">
        {blogs.map(blog => (
          <div key={blog._id} className="glass rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full border ${
                  blog.published
                    ? 'text-neon-green border-neon-green/30 bg-neon-green/10'
                    : 'text-slate-500 border-space-600 bg-space-800'
                }`}>
                  {blog.published ? 'Published' : 'Draft'}
                </span>
                {blog.tags?.slice(0, 2).map(t => <span key={t} className="tag-badge">{t}</span>)}
              </div>
              <h3 className="font-medium text-white truncate">{blog.title}</h3>
              <p className="text-slate-500 text-xs mt-0.5">
                {format(new Date(blog.createdAt), 'MMM d, yyyy')} · {blog.readTime} min read · ❤ {blog.likes?.length || 0} · 💬 {blog.comments?.length || 0}
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => handleTogglePublish(blog)}
                className="text-xs px-3 py-1.5 rounded-lg border border-space-600 text-slate-400 hover:border-accent/40 hover:text-accent transition-all"
              >
                {blog.published ? 'Unpublish' : 'Publish'}
              </button>
              <Link
                href={`/dashboard/edit-blog/${blog._id}`}
                className="text-xs px-3 py-1.5 rounded-lg border border-space-600 text-slate-400 hover:border-accent/40 hover:text-accent transition-all"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(blog._id, blog.title)}
                className="text-xs px-3 py-1.5 rounded-lg border border-space-600 text-slate-400 hover:border-neon-pink/40 hover:text-neon-pink transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
