"use client";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import QRCodeScanner from "./components/QrCodeScanner";
import TeamProgress from "./components/TeamProgress";
import Tips from "./components/Tips";

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
      <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>

      <div className="relative z-10 p-8 pb-20 gap-16 sm:p-20 flex flex-col items-center">
        <Header />
        <QRCodeScanner />
        <TeamProgress />
        <Leaderboard />
        <Footer />
        <Tips />
      </div>
      {/* <Feedback />  */}
    </div>
  );
}
