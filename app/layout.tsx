import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Simplex Soluções Tecnológicas | Tecnologia que Conecta, Protege e Escala',
  description: 'Soluções completas em infraestrutura de rede, segurança, automação, desenvolvimento de software e atendimento omnichannel. Transforme seu negócio com a Simplex.',
  keywords: ['tecnologia', 'infraestrutura', 'segurança', 'automação', 'software', 'omnichannel', 'Simplex'],
  authors: [{ name: 'Simplex Soluções Tecnológicas' }],
  openGraph: {
    title: 'Simplex Soluções Tecnológicas',
    description: 'Tecnologia que conecta, protege e escala seu negócio',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
