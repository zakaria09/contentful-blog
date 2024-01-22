import type {Metadata} from 'next';
import './globals.css';
import Layout from './components/layout';
import {Roboto} from 'next/font/google';

const roboto = Roboto({subsets: ['latin'], weight: '500'});

export const metadata: Metadata = {
  title: 'Somali Hiker',
  description: 'Somali Hiker Established 2023',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
