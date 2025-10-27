import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChatwootWidget } from '@/components/ChatwootWidget';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ModalProvider } from '@/components/providers/ModalProvider';
import { CookieConsentProvider } from '@/components/providers/CookieConsentProvider';
import { CookieBanner } from '@/components/CookieBanner';
import { CookieSettings } from '@/components/CookieSettings';
import { Preloader } from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Simplex Soluções Tecnológicas | Tecnologia que Conecta, Protege e Escala',
  description: 'Soluções completas em infraestrutura de rede, segurança, automação, desenvolvimento de software e atendimento omnichannel. Transforme seu negócio com a Simplex.',
  keywords: ['tecnologia', 'infraestrutura', 'segurança', 'automação', 'software', 'omnichannel', 'Simplex', 'TI', 'desenvolvimento', 'redes', 'whatsapp'],
  authors: [{ name: 'Simplex Soluções Tecnológicas' }],
  icons: {
    icon: '/logo-favicon.png',
    shortcut: '/logo-favicon.png',
    apple: '/logo-favicon.png',
  },
  openGraph: {
    title: 'Simplex Soluções Tecnológicas | Tecnologia que Conecta, Protege e Escala',
    description: 'Soluções completas em infraestrutura de rede, segurança, automação, desenvolvimento de software e atendimento omnichannel. Transforme seu negócio com a Simplex.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Simplex Soluções Tecnológicas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simplex Soluções Tecnológicas',
    description: 'Tecnologia que conecta, protege e escala seu negócio',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="simplex-theme"
        >
          <CookieConsentProvider>
            <ModalProvider>
              {children}
              <ChatwootWidget />
              <CookieBanner />
              <CookieSettings />
            </ModalProvider>
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
