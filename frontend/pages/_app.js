import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
    >
      <AuthProvider>
        {getLayout(<Component {...pageProps} />)}

        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0f172a',
              color: '#e2e8f0',
              border: '1px solid rgba(110, 231, 247, 0.2)',
              fontFamily: 'DM Sans, sans-serif',
            },
            success: {
              iconTheme: {
                primary: '#34d399',
                secondary: '#0f172a',
              },
            },
            error: {
              iconTheme: {
                primary: '#f472b6',
                secondary: '#0f172a',
              },
            },
          }}
        />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
