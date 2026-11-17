import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOSS LAB — детейлинг в Санкт-Петербурге: полировка, керамика, химчистка",
  description: "Полировка кузова, керамика, плёнка и химчистка салона в Приморском районе. Цены по классу авто, бесплатный осмотр.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
