import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import Layout from '../../../components/layout/Layout';
import api from '../../../lib/api';
import { useAuth } from '../../../lib/auth';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function EditBlog() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm]     = useState(null);
  const [saving, setSaving] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [user, loading]);

  useEffect(() => {
    if (!id) return;
    // Fetch the blog by id via my blogs list
    api.get('/blogs/my').then(res => {
      const blog = res.data.blogs.find(b => b._id === id);
      if (!blog) { toast.error('Blog not found'); router.push('/dashboard'); return; }
      setForm({
        title: blog.title || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        tags: blog.tags?.join(', ') || '',
        coverImage: blog.coverImage || '',
        published: blog.published ?? true,
      });
    }).catch(() => router.push('/dashboard'))
      .finally(() => setFetching(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, tags: form.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) };
      const res = await api.put(`/blogs/${id}`, payload);
      toast.success('Post updated!');
      router.push(`/blog/${res.data.blog.slug}`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update');
    } finally {
      setSaving(false);
    }
  };

  if (fetching || !form) return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-10 animate-fade-in">
        <h1 className="font-display font-bold text-2xl text-white mb-8">Edit Post</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Excerpt</label>
            <textarea className="input-field resize-none" rows={2} value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Cover Image URL</label>
            <input type="url" className="input-field" value={form.coverImage} onChange={e => setForm({...form, coverImage: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Tags (comma-separated)</label>
            <input className="input-field" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})} />
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="pub" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} className="accent-accent" />
            <label htmlFor="pub" className="text-sm text-slate-300">Published</label>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Content (Markdown)</label>
            <div data-color-mode="dark" className="rounded-xl overflow-hidden border border-space-600">
              <MDEditor value={form.content} onChange={val => setForm({...form, content: val || ''})} height={500} preview="live" />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => router.back()} className="btn-secondary">Cancel</button>
            <button type="submit" disabled={saving} className="btn-primary">{saving ? 'Saving...' : 'Save Changes'}</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
