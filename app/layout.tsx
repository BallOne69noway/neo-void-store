import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Обновляем метаданные для PWA и iOS
export const metadata: Metadata = {
  title: "NEO-VOID STORE",
  description: "Premium Garments Archive",
  manifest: "/manifest.json", // Ссылка на наш паспорт приложения
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NEO-VOID",
    // startupImage: "/logo.png", // Можно добавить позже для заставки
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Дополнительный тег для того, чтобы контент заходил под статус-бар на iOS */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}