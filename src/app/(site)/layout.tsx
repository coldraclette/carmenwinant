import { Analytics } from '@vercel/analytics/react';

import Navigation from './components/Navigation';

import './globals.css';

import { getSettings } from '../../../sanity/sanity.query';

export const revalidate = 60;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { googleFontName, fontColor } = await getSettings();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${googleFontName.replace(
            /\s/g,
            '+'
          )}&display=swap`}
          rel="stylesheet"
        />
        <style>
          {`
          body {
            font-family: ${googleFontName};
            color: ${fontColor.hex};
          }
        `}
        </style>
      </head>

      <body>
        <Navigation />
        <main className="font-primary py-12 pt-24">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
