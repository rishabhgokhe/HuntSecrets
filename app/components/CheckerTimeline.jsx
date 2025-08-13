"use client";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";

export default function CheckerTimeline() {
  const [teamId, setTeamId] = useState("");
  const [codes, setCodes] = useState([]);

  const fetchTeamProgress = async () => {
    if (!teamId.trim()) return;

    try {
      const res = await fetch(`/api/team-progress?teamId=${teamId}`);
      const data = await res.json();

      if (data.success) {
        setCodes(data.codes); // [{ value, scanned: true/false }]
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500 w-full max-w-4xl mx-auto">
      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="text"
          placeholder="Enter Team ID"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          className="border-2 border-pink-500 bg-black/80 text-white rounded-lg px-4 py-2 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={fetchTeamProgress}
          className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-all shadow-[0_0_10px_rgba(255,0,128,0.8)] w-full sm:w-auto"
        >
          Check
        </button>
      </div>

      {/* Timeline */}
      {codes.length > 0 && (
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
          {codes.map((code, index) => {
            // Decide line color
            const nextScanned = codes[index + 1]?.scanned;
            let lineColor = "bg-gray-600";
            if (code.scanned && nextScanned) {
              lineColor = "bg-green-500 shadow-[0_0_10px_rgba(0,255,128,0.8)]";
            } else if (code.scanned || nextScanned) {
              lineColor = "bg-pink-500 shadow-[0_0_10px_rgba(255,0,128,0.8)]";
            }

            return (
              <div key={code.value} className="flex items-center flex-shrink-0">
                <BadgeCheck
                  size={48}
                  className={`sm:size-20 transition-all ${
                    code.scanned
                      ? "text-green-500 drop-shadow-[0_0_10px_rgba(0,255,128,0.8)]"
                      : "text-gray-300"
                  }`}
                />
                {index !== codes.length - 1 && (
                  <div
                    className={`w-10 sm:w-16 h-1 transition-all ${lineColor}`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}