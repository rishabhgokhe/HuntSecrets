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
  metadataBase: new URL("https://upsurge-cipherchase.vercel.app/"),

  title: {
    default: "CipherChase – QR Treasure Hunt Game",
    template: "%s | CipherChase",
  },

  description:
    "CipherChase is a thrilling team-based QR treasure hunt packed with puzzles, clues, and strategy. Compete, solve challenges, and race to win a ₹5000 prize pool!",

  keywords: [
    "CipherChase",
    "QR treasure hunt",
    "team puzzle game",
    "college event game",
    "treasure hunt competition",
  ],

  authors: [{ name: "Rishabh Gokhe" }],
  creator: "Rishabh Gokhe",
  icons: {
    icon: "/CipherChase.jpg",
    apple: "/CipherChase.jpg",
  },

  openGraph: {
    title: "CipherChase – QR Treasure Hunt Game",
    description:
      "Solve puzzles, scan QR codes, and outsmart rivals in CipherChase. A high-energy team treasure hunt with a ₹5000 prize pool!",
    url: "https://upsurge-cipherchase.vercel.app/",
    siteName: "CipherChase",
    images: [
      {
        url: "/CipherChase.jpg",
        width: 1200,
        height: 630,
        alt: "CipherChase Treasure Hunt Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CipherChase – QR Treasure Hunt Game",
    description:
      "Scan. Solve. Win. Join CipherChase — a QR-based team treasure hunt with puzzles and prizes!",
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
