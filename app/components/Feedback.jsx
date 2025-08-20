import React from "react";

const Feedback = () => {
  return (
    <div className="mt-12 py-8 text-center bg-black/80 border-t border-pink-500/40">
      {/* Squid Game Shapes */}
      <div className="flex justify-center gap-3 text-pink-400 text-lg mb-3">
        <span className="w-6 h-6 border-2 border-pink-400 rounded-full"></span>
        <span className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-pink-400"></span>
        <span className="w-6 h-6 border-2 border-pink-400"></span>
      </div>

      {/* Feedback Text */}
      <p className="text-xl font-bold text-pink-400 tracking-wide">
        💬 Have Feedback?
      </p>
      <p className="mt-2 text-gray-300 text-sm">
        We’d love to hear from you! Send your thoughts{" "}
        <a
          href="mailto:rishabh404x01@gmail.com"
          className="text-pink-400 hover:text-pink-300 underline transition-colors"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Feedback;