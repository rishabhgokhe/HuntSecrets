import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center mb-5 relative">

      <div className="w-20 h-20 flex-shrink-0 animate-pulse">
        <Image
          src="/img/upsurge-logo.png"
          alt="Left Icon"
          width={70}
          height={70}
          className="drop-shadow-[0_0_8px_rgba(255,20,147,0.8)]"
        />
      </div>

      <h1 className="mx-6 text-5xl font-extrabold font-mono text-pink-500 drop-shadow-[0_0_12px_rgba(255,0,128,0.8)]">
        Cipher Chase
      </h1>

      <div className="w-14 h-14 flex-shrink-0 animate-pulse">
        <Image
          src="/img/cosmos-logo.png"
          alt="Right Icon"
          width={56}
          height={56}
          className="drop-shadow-[0_0_8px_rgba(0,255,128,0.8)]"
        />
      </div>
    </div>
  );
};

export default Header;