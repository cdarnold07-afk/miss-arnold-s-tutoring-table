import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miss Arnold's Tutoring Table",
  description: "Personalized tutoring that turns confusion into confidence for students in Grades 2–7 and adult learners.",
  openGraph: {
    title: "Miss Arnold's Tutoring Table",
    description: "Support that helps learning click.",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miss Arnold's Tutoring Table",
    description: "Support that helps learning click.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
