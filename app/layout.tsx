import type { Metadata } from "next";
import "./globals.css";
import ClientScripts from "@/components/scripts/ClientScripts";

export const metadata: Metadata = {
  title: "Aleric - Digital Agency & Creative Portfolio HTML Template",
  description: "Aleric - Digital Agency & Creative Portfolio HTML Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx" className="no-js aleric-dark">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/logo/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="tp-magic-cursor">
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
