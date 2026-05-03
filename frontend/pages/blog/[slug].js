import { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import toast from 'react-hot-toast';
import Layout from '../../components/layout/Layout';
import api from '../../lib/api';
import { useAuth } from '../../lib/auth';

export default function BlogPost({ blog: initialBlog }) {
  const { user } = useAuth();
  const [blog, setBlog] = useState(initialBlog);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!blog) return <Layout><div className="p-20 text-center text-slate-400">Post not found.</div></Layout>;

  const isLiked = user && blog.likes?.some(id => id === user._id || id?._id === user._id);
  const isAuthor = user && blog.author?._id === user._id;

  const handleLike = async () => {
    if (!user) { toast.error('Sign in to like posts'); return; }
    try {
      const res = await api.post(`/blogs/${blog._id}/like`);
      setBlog(prev => ({
        ...prev,
        likes: res.data.liked
          ? [...(prev.likes || []), user._id]
          : (prev.likes || []).filter(id => id !== user._id),
      }));
    } catch { toast.error('Failed to like'); }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!user) { toast.error('Sign in to comment'); return; }
    if (!comment.trim()) return;
    setSubmitting(true);
    try {
      const res = await api.post(`/blogs/${blog._id}/comments`, { content: comment });
      setBlog(prev => ({ ...prev, comments: [...(prev.comments || []), res.data.comment] }));
      setComment('');
    } catch { toast.error('Failed to post comment'); }
    finally { setSubmitting(false); }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await api.delete(`/blogs/${blog._id}/comments/${commentId}`);
      setBlog(prev => ({ ...prev, comments: prev.comments.filter(c => c._id !== commentId) }));
    } catch { toast.error('Failed to delete comment'); }
  };

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 py-10 animate-fade-in">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags?.map(t => (
              <Link key={t} href={`/blog?tag=${t}`} className="tag-badge">{t}</Link>
            ))}
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">{blog.title}</h1>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              {blog.author?.avatar ? (
                <img src={blog.author.avatar} alt={blog.author.name} className="w-10 h-10 rounded-full object-cover ring-1 ring-accent/20" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {blog.author?.name?.[0]}
                </div>
              )}
              <div>
                <Link href={`/u/${blog.author?.username}`} className="text-slate-200 font-medium hover:text-accent transition-colors text-sm">
                  {blog.author?.name}
                </Link>
                <p className="text-slate-500 text-xs">
                  {format(new Date(blog.createdAt), 'MMMM d, yyyy')} · {blog.readTime} min read
                </p>
              </div>
            </div>
            {isAuthor && (
              <div className="flex gap-2">
                <Link href={`/dashboard/edit-blog/${blog._id}`} className="btn-secondary text-xs px-3 py-1.5">Edit</Link>
              </div>
            )}
          </div>
        </div>

        {blog.coverImage && (
          <img src={blog.coverImage} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        )}

        {/* Content */}
        <div className="prose-dark mb-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
        </div>

        <hr className="border-space-700 mb-8" />

        {/* Like */}
        <div className="flex items-center gap-4 mb-10">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              isLiked
                ? 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink'
                : 'border-space-600 text-slate-400 hover:border-neon-pink/30 hover:text-neon-pink'
            }`}
          >
            ❤ {blog.likes?.length || 0} {isLiked ? 'Liked' : 'Like'}
          </button>
          <span className="text-slate-500 text-sm">{blog.comments?.length || 0} comments</span>
        </div>

        {/* Comments */}
        <section>
          <h2 className="font-display font-semibold text-white mb-5">Comments</h2>

          {user && (
            <form onSubmit={handleComment} className="mb-6">
              <textarea
                className="input-field resize-none mb-3"
                rows={3}
                placeholder="Share your thoughts..."
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <button type="submit" disabled={submitting || !comment.trim()} className="btn-primary text-sm">
                {submitting ? 'Posting...' : 'Post Comment'}
              </button>
            </form>
          )}
          {!user && (
            <div className="glass rounded-xl p-4 mb-6 text-center text-slate-400 text-sm">
              <Link href="/login" className="text-accent hover:underline">Sign in</Link> to leave a comment.
            </div>
          )}

          <div className="space-y-4">
            {blog.comments?.length === 0 && <p className="text-slate-500 text-sm">No comments yet. Be the first!</p>}
            {blog.comments?.map(c => (
              <div key={c._id} className="glass rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {c.user?.avatar ? (
                      <img src={c.user.avatar} alt={c.user.name} className="w-7 h-7 rounded-full object-cover" />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent font-bold">
                        {c.user?.name?.[0]}
                      </div>
                    )}
                    <Link href={`/u/${c.user?.username}`} className="text-sm text-slate-300 hover:text-accent transition-colors">
                      {c.user?.name}
                    </Link>
                    <span className="text-slate-600 text-xs">{format(new Date(c.createdAt), 'MMM d')}</span>
                  </div>
                  {(user?._id === c.user?._id || isAuthor) && (
                    <button onClick={() => handleDeleteComment(c._id)} className="text-slate-600 hover:text-neon-pink text-xs transition-colors">
                      Delete
                    </button>
                  )}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{c.content}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const res = await fetch(`${API}/blogs/${params.slug}`);
    const data = await res.json();
    if (!data.success) return { notFound: true };
    return { props: { blog: data.blog } };
  } catch {
    return { notFound: true };
  }
}
