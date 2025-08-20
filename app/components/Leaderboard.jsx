"use client";

import { useEffect, useState } from "react";
import { Medal, Trophy, Award, Circle } from "lucide-react";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("/api/leaderboard");
      const data = await res.json();

      if (data.success) {
        setLeaderboard(data.leaderboard);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="text-yellow-400 drop-shadow-[0_0_6px_gold]" size={22} />;
    if (rank === 2) return <Medal className="text-gray-300 drop-shadow-[0_0_6px_silver]" size={22} />;
    // if (rank === 3) return <Award className="text-amber-600 drop-shadow-[0_0_6px_orange]" size={22} />;
    return <Circle className="text-gray-500" size={14} />;
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "-";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  return (
    <div className="p-4 sm:p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500 w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4 sm:mb-6 flex items-center gap-2">
        🏆 Leaderboard
      </h2>

      <div className="overflow-x-auto rounded-lg border border-pink-500/40">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead className="sticky top-0 bg-pink-500/30 backdrop-blur-sm text-pink-200 text-sm sm:text-base">
            <tr>
              <th className="p-3 rounded-l-lg">Rank</th>
              <th className="p-3">Team ID</th>
              <th className="p-3">Scanned</th>
              <th className="p-3 rounded-r-lg">Last Scan Time</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((team, index) => {
              const isTop3 = index < 3;
              return (
                <tr
                  key={team.teamId}
                  className={`transition-all ${
                    isTop3
                      ? index === 0
                        ? "bg-yellow-500/10"
                        : index === 1
                        ? "bg-gray-400/10"
                        : "bg-amber-600/10"
                      : "bg-transparent"
                  } hover:bg-pink-500/10`}
                  style={index === 1 ? { borderBottom: "2px solid #ec4899" } : {}}
                >
                  <td className="p-3 flex items-center gap-2">
                    {getRankIcon(index + 1)}
                    <span className="font-bold text-white">{index + 1}</span>
                  </td>
                  <td className="p-3 text-white break-all">{team.teamId}</td>
                  <td className="p-3 font-semibold text-pink-300">{team.score}</td>
                  <td className="p-3 text-gray-400">{formatTime(team.latestScanTime)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}