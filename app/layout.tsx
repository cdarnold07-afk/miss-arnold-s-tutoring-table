import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/"),
  title: {
    default: "Lexington SC Tutor | Miss Arnold's Tutoring Table",
    template: "%s",
  },
  description: "One-on-one reading and math tutoring in Lexington, SC for Grades 2–7, plus GED and adult math support in Lexington, West Columbia, and online.",
  openGraph: {
    title: "Lexington SC Tutor | Miss Arnold's Tutoring Table",
    description: "Personalized reading, math, GED, and adult tutoring in Lexington, South Carolina.",
    url: "https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/",
    siteName: "Miss Arnold's Tutoring Table",
    locale: "en_US",
    type: "website",
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
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
          "@context":"https://schema.org",
          "@type":"EducationalOrganization",
          name:"Miss Arnold's Tutoring Table",
          url:"https://cdarnold07-afk.github.io/miss-arnold-s-tutoring-table/",
          description:"Personalized one-on-one reading and math tutoring for Grades 2–7, GED students, and adult learners.",
          areaServed:[{"@type":"City",name:"Lexington, South Carolina"},{"@type":"City",name:"West Columbia, South Carolina"}],
          founder:{"@type":"Person",name:"Claire Arnold"},
          knowsAbout:["Reading tutoring","Math tutoring","GED preparation","Adult math education","Dyslexia-aware instruction"],
          priceRange:"$40 per hour"
        })}} />
        {children}
      </body>
    </html>
  );
}
