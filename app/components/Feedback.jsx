import { MessageCircle } from "lucide-react";

const Feedback = () => {
  return (
    <div className="py-10 text-center bg-black/80 border-t border-pink-500/40">

      <div className="flex items-center justify-center gap-2 text-pink-400 mb-2">
        <MessageCircle className="w-6 h-6" />
        <p className="text-xl font-bold tracking-wide">
          Want to Host Your Event?
        </p>
      </div>

      <p className="mt-2 text-gray-300 text-sm">
        Reach us on WhatsApp to get started.
      </p>

      <a
        href="https://wa.me/919098447696?text=Hi%20I%20want%20to%20host%20a%20treasure%20hunt%20event"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition"
      >
        Message on WhatsApp
      </a>
    </div>
  );
};

export default Feedback;