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

export const metadata = {
  title: "CipherChase",
  description:
    "Cipher Chase - A thrilling team-based treasure hunt where QR codes hide puzzles and challenges. Solve, strategize, and race to win the ₹5000 prize pool!",
  metadataBase: new URL("https://upsurge-cipherchase.vercel.app/"),
  icons: {
    icon: "/CipherChase.jpg",
  },
  openGraph: {
    title: "CipherChase",
    description:
      "Cipher Chase - A thrilling team-based treasure hunt where QR codes hide puzzles and challenges. Solve, strategize, and race to win the ₹5000 prize pool!",
    siteName: "CipherChase",
    images: [
      {
        url: "/CipherChase.jpg",
        width: 1200,
        height: 630,
        alt: "CipherChase Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherChase",
    description:
      "Cipher Chase - A thrilling team-based treasure hunt where QR codes hide puzzles and challenges. Solve, strategize, and race to win the ₹5000 prize pool!",
    images: ["/CipherChase.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
