import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import Layout from '../../components/layout/Layout';
import api from '../../lib/api';
import { useAuth } from '../../lib/auth';

// MDEditor must be loaded client-side only
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function NewBlog() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    title: '', content: '', excerpt: '', tags: '', coverImage: '', published: true,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [user, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      toast.error('Title and content are required');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        tags: form.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean),
      };
      const res = await api.post('/blogs', payload);
      toast.success('Blog post created!');
      router.push(`/blog/${res.data.blog.slug}`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Layout><div className="p-20 text-center"><div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" /></div></Layout>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display font-bold text-2xl text-white">New Blog Post</h1>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={form.published}
                onChange={e => setForm({...form, published: e.target.checked})}
                className="accent-accent"
              />
              Publish immediately
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <input
              type="text"
              className="w-full bg-transparent border-none outline-none text-3xl font-display font-bold text-white placeholder-space-600 py-2"
              placeholder="Your post title..."
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
            />
            <div className="h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Excerpt (optional)</label>
            <textarea
              className="input-field resize-none"
              rows={2}
              placeholder="Short description shown in blog listing..."
              value={form.excerpt}
              onChange={e => setForm({...form, excerpt: e.target.value})}
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Cover Image URL (optional)</label>
            <input
              type="url"
              className="input-field"
              placeholder="https://images.unsplash.com/..."
              value={form.coverImage}
              onChange={e => setForm({...form, coverImage: e.target.value})}
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Tags (comma-separated)</label>
            <input
              className="input-field"
              placeholder="react, typescript, tutorial..."
              value={form.tags}
              onChange={e => setForm({...form, tags: e.target.value})}
            />
          </div>

          {/* Markdown Editor */}
          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Content (Markdown)</label>
            <div data-color-mode="dark" className="rounded-xl overflow-hidden border border-space-600">
              <MDEditor
                value={form.content}
                onChange={val => setForm({...form, content: val || ''})}
                height={500}
                preview="live"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => router.back()} className="btn-secondary">Cancel</button>
            <button type="submit" disabled={saving} className="btn-primary">
              {saving ? 'Publishing...' : form.published ? 'Publish Post' : 'Save Draft'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
