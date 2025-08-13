"use client";
import { useState } from "react";
import { Check, Circle } from "lucide-react";

export default function CheckerTimeline() {
  const [teamId, setTeamId] = useState("");
  const [codes, setCodes] = useState([]);

  const fetchTeamProgress = async () => {
    if (!teamId.trim()) return;

    try {
      const res = await fetch(`/api/team-progress?teamId=${teamId}`);
      const data = await res.json();

      if (data.success) {
        setCodes(data.codes); // array of { value, scanned: true/false }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
    }
  };

  return (
    <div className="p-6 space-y-8 bg-white rounded-lg shadow">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter Team ID"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          className="border rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchTeamProgress}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Check
        </button>
      </div>

      {codes.length > 0 && (
        <div className="flex items-center justify-center gap-4">
          {codes.map((code, index) => (
            <div key={code.value} className="flex items-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                  code.scanned
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-200 border-gray-400"
                }`}
              >
                {code.scanned ? (
                  <Check size={28} className="text-white" />
                ) : (
                  <Circle size={28} className="text-gray-500" />
                )}
              </div>

              {index !== codes.length - 1 && (
                <div className="w-12 h-1 bg-gray-300 mx-2"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}