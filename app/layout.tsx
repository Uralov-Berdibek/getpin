import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GetPin',
  description:
    'Наша платформа предоставляет уникальную возможность организаторам мероприятий быстро и эффективно привлекать аудиторию. Здесь вы можете разместить свои объявления о предстоящих мероприятиях, мастер-классах и семинарах, привлекая внимание потенциальных участников.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
}
