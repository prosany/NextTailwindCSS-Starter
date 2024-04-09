import ContainerLayout from '@/layouts/ContainerLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js TailwindCSS Starter',
  description: 'Next.js TailwindCSS Starter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ContainerLayout>{children}</ContainerLayout>
    </html>
  );
}
