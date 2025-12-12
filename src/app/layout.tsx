import type { Metadata } from 'next';
import React from 'react';
import '../styles/global.scss';
import '../styles/null.scss';

export const metadata: Metadata = {
  title: 'Bullet ToDo List | New Way of productivity',
  description: 'Max Knyaz develop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
