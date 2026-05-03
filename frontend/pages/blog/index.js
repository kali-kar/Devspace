import { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import Layout from '../../components/layout/Layout';
import api from '../../lib/api';

export default function BlogList() {
  const [blogs, setBlogs]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [tag, setTag]       = useState('');
  const [page, setPage]     = useState(1);
  const [total, setTotal]   = useState(0);
  const [allTags, setAllTags] = useState([]);
  const LIMIT = 10;

  useEffect(() => {
    setLoading(true);
    api.get(`/blogs?page=${page}&limit=${LIMIT}${tag ? `&tag=${tag}` : ''}`)
      .then(res => {
        setBlogs(res.data.blogs);
        setTotal(res.data.total);
        // collect all tags
        const tags = [...new Set(res.data.blogs.flatMap(b => b.tags || []))];
        setAllTags(prev => [...new Set([...prev, ...tags])]);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page, tag]);

  const pages = Math.ceil(total / LIMIT);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="font-display font-bold text-3xl text-white mb-2">Developer Blog</h1>
          <p className="text-slate-400">Stories, tutorials, and insights from the community.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <div className="flex-1">
            {loading && (
              <div className="space-y-4">
                {[1,2,3].map(i => <div key={i} className="glass rounded-xl h-36 animate-pulse" />)}
              </div>
            )}
            {!loading && blogs.length === 0 && (
              <div className="text-center py-16 text-slate-500">
                No posts found {tag && `for tag "${tag}"`}.
                {tag && <button className="ml-2 text-accent hover:underline" onClick={() => setTag('')}>Clear filter</button>}
              </div>
            )}
            <div className="space-y-4">
              {blogs.map(blog => (
                <Link key={blog._id} href={`/blog/${blog.slug}`} className="glass glass-hover rounded-xl p-6 block group">
                  <div className="flex items-center gap-3 mb-3">
                    {blog.author?.avatar ? (
                      <img src={blog.author.avatar} alt={blog.author.name} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                        {blog.author?.name?.[0]}
                      </div>
                    )}
                    <div>
                      <Link href={`/u/${blog.author?.username}`} className="text-sm text-slate-300 hover:text-accent transition-colors" onClick={e => e.stopPropagation()}>
                        {blog.author?.name}
                      </Link>
                      <p className="text-xs text-slate-500">{format(new Date(blog.createdAt), 'MMM d, yyyy')}</p>
                    </div>
                  </div>
                  <h2 className="font-display font-semibold text-lg text-white group-hover:text-accent transition-colors mb-2">{blog.title}</h2>
                  {blog.excerpt && <p className="text-slate-400 text-sm line-clamp-2 mb-3">{blog.excerpt}</p>}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {blog.tags?.slice(0, 3).map(t => <span key={t} className="tag-badge">{t}</span>)}
                    </div>
                    <div className="flex gap-3 text-xs text-slate-500">
                      <span>{blog.readTime} min read</span>
                      <span>❤ {blog.likes?.length || 0}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {pages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
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
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-56 flex-shrink-0">
            <div className="glass rounded-xl p-5 sticky top-20">
              <h3 className="font-display font-semibold text-white mb-3 text-sm">Filter by Tag</h3>
              {tag && (
                <button onClick={() => { setTag(''); setPage(1); }} className="text-xs text-slate-400 hover:text-accent mb-3 flex items-center gap-1">
                  ✕ Clear: {tag}
                </button>
              )}
              <div className="flex flex-wrap gap-1.5">
                {allTags.map(t => (
                  <button
                    key={t}
                    onClick={() => { setTag(t); setPage(1); }}
                    className={`tag-badge cursor-pointer ${tag === t ? 'bg-accent/25 border-accent/50' : ''}`}
                  >
                    {t}
                  </button>
                ))}
                {allTags.length === 0 && <p className="text-slate-500 text-xs">No tags yet</p>}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
