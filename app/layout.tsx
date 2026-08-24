import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/"),
  title: {
    default: "Miss Arnold's Tutoring Table",
    template: "%s",
  },
  description: "Personalized tutoring that turns confusion into confidence for students in Grades 2–7 and adult learners.",
  openGraph: {
    title: "Miss Arnold's Tutoring Table",
    description: "Support that helps learning click.",
    images: [{ url: "https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/og.png", width: 1731, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miss Arnold's Tutoring Table",
    description: "Support that helps learning click.",
    images: ["https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/og.png"],
  },
  icons: {
    icon: "/miss-arnold-s-tutoring-table/favicon.svg",
    shortcut: "/miss-arnold-s-tutoring-table/favicon.svg",
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
