import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            The developer community platform
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Build your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-neon-purple glow-text">
              developer identity
            </span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Showcase your skills, share your knowledge through blog posts, and connect with other developers. Your space. Your story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary text-base px-8 py-3 inline-block">
              Start for free →
            </Link>
            <Link href="/explore" className="btn-secondary text-base px-8 py-3 inline-block">
              Explore devs
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-display font-bold text-3xl text-white text-center mb-4">Everything you need</h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">Built for developers who want to grow their presence and share their work.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass glass-hover rounded-xl p-6 group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:border-accent/40 transition-colors">
                <span className="text-accent text-xl">{f.icon}</span>
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="glass rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-neon-purple/5" />
          <div className="relative">
            <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to join?</h2>
            <p className="text-slate-400 mb-8">Create your profile and start sharing with the developer community.</p>
            <Link href="/register" className="btn-primary text-base px-10 py-3 inline-block">
              Create your DevSpace →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const features = [
  { icon: '👤', title: 'Developer Profile', desc: 'Showcase skills, experience, and projects in a beautiful LinkedIn-style profile.' },
  { icon: '✍️', title: 'Blog & Writing', desc: 'Write technical posts with Markdown support, tags, likes and comments.' },
  { icon: '💬', title: 'Direct Messaging', desc: 'Send and receive messages with other developers directly on the platform.' },
  { icon: '🔍', title: 'Explore Community', desc: 'Discover developers by skills, browse projects, and find collaborators.' },
  { icon: '🎨', title: 'Portfolio Projects', desc: 'List your projects with descriptions, tech stacks, and live links.' },
  { icon: '📊', title: 'Personal Dashboard', desc: 'Manage your profile, blogs, and messages from one central place.' },
];
