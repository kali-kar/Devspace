import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center animate-slide-up">
          <p className="font-mono text-accent text-sm mb-4 tracking-widest">ERROR 404</p>
          <h1 className="font-display font-bold text-6xl text-white mb-4">
            Page not found
          </h1>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-primary">Go Home</Link>
            <Link href="/explore" className="btn-secondary">Explore Devs</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
