import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doğum Günün Kutlu Olsun Sevgilim 💚",
  description: "Sana özel hazırladığım doğum günü hediyesi - 17 Mayıs 2024'ten beri kalbimin sahibi sensin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
