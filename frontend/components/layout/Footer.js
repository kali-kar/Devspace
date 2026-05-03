import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-space-700/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="text-accent font-bold text-xs">D</span>
          </div>
          <span className="font-display text-slate-400 text-sm">DevSpace &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/explore" className="hover:text-accent transition-colors">Explore</Link>
          <Link href="/register" className="hover:text-accent transition-colors">Join</Link>
        </div>
      </div>
    </footer>
  );
}
