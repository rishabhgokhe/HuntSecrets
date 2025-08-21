import { MessageCircleQuestionMark } from "lucide-react";

const Feedback = () => {
  return (
    <div className="mt-12 py-10 text-center bg-black/80 border-t border-pink-500/40">
      {/* Squid Game Shapes */}
      <div className="flex justify-center gap-3 text-pink-400 text-lg mb-4">
        <span className="w-6 h-6 border-2 border-pink-400 rounded-full"></span>
        <span className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-pink-400"></span>
        <span className="w-6 h-6 border-2 border-pink-400"></span>
      </div>

      {/* Feedback Section */}
      <div className="flex items-center justify-center gap-2 text-pink-400 mb-2">
        <MessageCircleQuestionMark className="w-6 h-6" />
        <p className="text-xl font-bold tracking-wide">Have Feedback?</p>
      </div>

      <p className="mt-2 text-gray-300 text-sm">
        We’d love to hear from you! Send your thoughts{" "}
        <a
          href={`mailto:rishabh404x01@gmail.com`}
          className="text-white/90 group-hover:text-pink-400 transition"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Feedback;
