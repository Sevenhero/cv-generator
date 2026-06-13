import "./globals.css";

import { Inter } from "next/font/google";
import { Metadata } from "next";
import userData from "../data/userData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function formatDateFull() {
  return new Date().toLocaleDateString("de-DE", {
    year: "numeric", month: "long", day: "numeric",
  });
}

const fullName = `${userData.firstName} ${userData.lastName}`;
const slugTitle = `${userData.lastName.toLowerCase()}_${userData.firstName.toLowerCase()}`;

export const metadata: Metadata = {
  title: {
    default: `${fullName}`,
    template: `%s | CV von ${fullName}`,
  },
  description: userData.description?.slice(0, 160) ?? `Lebenslauf von ${fullName}. Titel: ${userData.title}.`,
  authors: [{ name: fullName }],
  creator: fullName,
  publisher: fullName,
  keywords: [
    ...new Set([...(userData.skills ?? []), userData.title, "Lebenslauf", "CV", fullName]),
  ],
  openGraph: {
    title: `${fullName} — Lebenslauf / CV`,
    description: userData.description?.slice(0, 160) ?? `Lebenslauf von ${fullName}, ${userData.title}`,
    type: "website",
    locale: "de_DE",
  },
  other: {
    "og:locale": "de_DE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  jobTitle: userData.title,
  description: userData.description,
  url: `https://${process.env.VERCEL_URL || "example.com"}/${slugTitle}`,
  sameAs: (userData.social ?? [])
    .filter((s) => s.url && !s.email && !s.phone)
    .map((s) => s.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="de" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <main id="content" tabIndex={-1}>{children}</main>
      </body>
    </html>
  );
}
