import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Courier Operations, SLA Performance & Claims Recovery Platform',
  description:
    'Enterprise multi-carrier tracking, 20-column Courier Performance Report automation, Linnworks order sync, automated out-of-SLA courier queries, and customizable per-courier claim invoice generation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-indigo-600 selection:text-white">{children}</body>
    </html>
  );
}
