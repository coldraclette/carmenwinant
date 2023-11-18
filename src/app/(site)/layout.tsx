'use client';

import { Old_Standard_TT } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Navigation from './components/Navigation';

import './globals.css';

import { useLockBodyScroll } from './store/modalStore';

const oldStandardTT = Old_Standard_TT({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useLockBodyScroll();
  return (
    <html lang="en" className={oldStandardTT.className}>
      <body>
        <Navigation />
        <main className="py-12 pt-24">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
