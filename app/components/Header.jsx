import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-5 relative px-4">
      <div className="w-full flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-xl border-2 border-pink-500/60 p-2 shadow-[0_0_12px_rgba(255,20,147,0.7)] animate-pulse hover:scale-110 transition-transform">
          <Image
            src="/img/upsurge-logo.png"
            alt="Upsurge Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="mx-4 text-3xl sm:text-5xl font-extrabold font-mono text-pink-500 drop-shadow-[0_0_12px_rgba(255,0,128,0.8)] text-center">
          Cipher Chase
        </h1>

        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-xl border-2 border-green-400/60 p-2 shadow-[0_0_12px_rgba(0,255,128,0.7)] animate-pulse hover:scale-110 transition-transform">
          <Image
            src="/img/cosmos-logo.png"
            alt="Cosmos Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <p className="mt-3 text-sm sm:text-lg md:text-xl font-semibold text-gray-200 tracking-wider text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
        QR Treasure Hunt • Crack the Code • Claim the Prize
      </p>
    </div>
  );
};

export default Header;
