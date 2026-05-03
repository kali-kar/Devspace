import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { format } from 'date-fns';
import Layout from '../../components/layout/Layout';
import { useAuth } from '../../lib/auth';
import api from '../../lib/api';

export default function Messages() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [tab, setTab]           = useState('inbox');
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [user, loading]);

  useEffect(() => {
    if (!user) return;
    setFetching(true);
    setSelected(null);
    api.get(`/messages/${tab}`)
      .then(res => setMessages(res.data.messages))
      .catch(console.error)
      .finally(() => setFetching(false));
  }, [tab, user]);

  const handleSelect = async (msg) => {
    setSelected(msg);
    if (tab === 'inbox' && !msg.readAt) {
      try {
        await api.get(`/messages/${msg._id}`);
        setMessages(prev => prev.map(m => m._id === msg._id ? { ...m, readAt: new Date() } : m));
      } catch {}
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/messages/${id}`);
      setMessages(prev => prev.filter(m => m._id !== id));
      if (selected?._id === id) setSelected(null);
    } catch {}
  };

  const otherUser = (msg) => tab === 'inbox' ? msg.sender : msg.recipient;

  if (loading) return <Layout><div className="p-20 text-center"><div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" /></div></Layout>;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10 animate-fade-in">
        <h1 className="font-display font-bold text-2xl text-white mb-6">Messages</h1>

        <div className="flex gap-1 border-b border-space-700/50 mb-6">
          {['inbox', 'sent'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                tab === t ? 'border-accent text-accent' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >{t}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px]">
          {/* Message List */}
          <div className="lg:col-span-1 space-y-2">
            {fetching && [1,2,3].map(i => <div key={i} className="glass rounded-xl h-20 animate-pulse" />)}
            {!fetching && messages.length === 0 && (
              <div className="glass rounded-xl p-8 text-center text-slate-500 text-sm">
                No messages in {tab}.
              </div>
            )}
            {messages.map(msg => {
              const other = otherUser(msg);
              const isUnread = tab === 'inbox' && !msg.readAt;
              return (
                <button
                  key={msg._id}
                  onClick={() => handleSelect(msg)}
                  className={`w-full text-left glass rounded-xl p-4 transition-all ${
                    selected?._id === msg._id ? 'border-accent/40 bg-accent/5' : 'glass-hover'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {other?.avatar ? (
                      <img src={other.avatar} alt={other.name} className="w-7 h-7 rounded-full object-cover" />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent font-bold">
                        {other?.name?.[0]}
                      </div>
                    )}
                    <span className={`text-sm ${isUnread ? 'text-white font-semibold' : 'text-slate-300'}`}>{other?.name}</span>
                    {isUnread && <span className="w-2 h-2 rounded-full bg-accent ml-auto" />}
                  </div>
                  <p className={`text-sm truncate ${isUnread ? 'text-slate-200' : 'text-slate-400'}`}>{msg.subject}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{format(new Date(msg.createdAt), 'MMM d, h:mm a')}</p>
                </button>
              );
            })}
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2 glass rounded-xl p-6">
            {!selected && (
              <div className="flex items-center justify-center h-full min-h-[300px] text-slate-500 text-sm">
                Select a message to read
              </div>
            )}
            {selected && (
              <div className="animate-fade-in">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h2 className="font-display font-semibold text-white text-lg">{selected.subject}</h2>
                    <p className="text-slate-400 text-sm mt-0.5">
                      {tab === 'inbox' ? 'From' : 'To'}{' '}
                      <Link href={`/u/${otherUser(selected)?.username}`} className="text-accent hover:underline">
                        {otherUser(selected)?.name}
                      </Link>
                      {' · '}{format(new Date(selected.createdAt), 'MMM d, yyyy h:mm a')}
                    </p>
                  </div>
                  <button onClick={() => handleDelete(selected._id)} className="text-slate-500 hover:text-neon-pink text-sm transition-colors">
                    Delete
                  </button>
                </div>
                <div className="border-t border-space-700 pt-5">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{selected.body}</p>
                </div>
                {tab === 'inbox' && (
                  <div className="mt-6 pt-5 border-t border-space-700">
                    <Link
                      href={`/u/${otherUser(selected)?.username}`}
                      className="btn-secondary text-sm inline-block"
                    >
                      View profile & reply →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
