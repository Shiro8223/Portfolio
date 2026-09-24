import '@/styles/globals.css';
import "@fontsource/inter";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import { RefreshProvider } from '../context/RefreshContext';

export default function App({ Component, pageProps }) {
  return (
    <RefreshProvider>
      <Component {...pageProps} />
    </RefreshProvider>
  );
}
