import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

// Importar WhatsAppFloat solo en el cliente para evitar errores de SSR
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'A Bit Nerd — Tu Tribu Nerd',
  description:
    'Únete a A Bit Nerd, la comunidad nerd más inclusiva. Un espacio seguro donde la curiosidad, la creatividad y las pasiones nerd se encuentran. ¡Encuentra tu tribu!',
  robots: 'index,follow',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'A Bit Nerd — Tu Tribu Nerd',
    description:
      'Comunidad nerd inclusiva con 500+ miembros activos. Charlas, workshops, gaming, anime y más. ¡Únete a tu tribu!',
    type: 'website',
    images: ['/icon.svg'],
  },
  themeColor: '#7c3aed',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center p-6">
            <div className="nerd-card">{children}</div>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
