"use client";
import CheckerTimeline from "./components/CheckerTimeline";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import QRCodeScanner from "./components/QrCodeScanner";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <QRCodeScanner />
      <CheckerTimeline />
      <Leaderboard />

      <p>Developed by Rishabh</p>
    </div>
  );
}
