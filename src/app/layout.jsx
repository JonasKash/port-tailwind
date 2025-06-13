import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ugarit - Automação Inteligente',
  description: 'Transformando o setor imobiliário com IA generativa e automação no-code.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#080808]">
          {children}
        </div>
      </body>
    </html>
  );
} 