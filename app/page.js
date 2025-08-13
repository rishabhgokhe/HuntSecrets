"use client";
import CheckerTimeline from "./components/CheckerTimeline";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import QRCodeScanner from "./components/QrCodeScanner";

export default function Home() {
  return (
    <div
      className="relative min-h-screen font-sans text-white"
      style={{
        backgroundImage: "url('/img/transition.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>

      {/* Content layer */}
      <div className="relative z-10 p-8 pb-20 gap-16 sm:p-20 flex flex-col items-center">
        <Header />
        <QRCodeScanner />
        <CheckerTimeline />
        <Leaderboard />
        <p className="mt-8 text-center text-sm text-gray-300">
          Developed with <span className="text-red-500">❤️</span> by{" "}
          <a
            href="https://github.com/rishabhgokhe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pink-400 hover:text-pink-300 hover:underline transition-colors"
          >
            Rishabh
          </a>
        </p>
      </div>
    </div>
  );
}
