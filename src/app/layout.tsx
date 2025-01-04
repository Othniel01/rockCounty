import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  // title: "ROCK COUNTY",
  // description: "WE ROCK",
  title: "Frances",
  description: "Happy Birthday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${SpaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-poppins">{children}</body>
    </html>
  );
}
