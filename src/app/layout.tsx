import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import userData from "../data/userData";

const inter = Inter({ subsets: ["latin"] });

function formatDateDDMMYYYY(date = new Date()) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}${mm}${yyyy}`;
}

const title = () => `${userData.lastName}_${userData.firstName}_${formatDateDDMMYYYY()}`;

export const metadata: Metadata = {
  title: title(),
  description: "To generate your CV with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
