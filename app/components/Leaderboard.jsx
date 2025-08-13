"use client";

import { useEffect, useState } from "react";
import { Medal, Trophy, Award } from "lucide-react";

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
    if (rank === 1) return <Trophy className="text-yellow-400" size={20} />;
    if (rank === 2) return <Medal className="text-gray-300" size={20} />;
    if (rank === 3) return <Award className="text-amber-600" size={20} />;
    return <span className="font-bold">{rank}</span>;
  };

  return (
    <div className="p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-pink-400 mb-6 flex items-center gap-2">
        🏆 Leaderboard
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-pink-500/20 text-pink-300">
              <th className="p-3 rounded-l-lg">Rank</th>
              <th className="p-3">Team ID</th>
              <th className="p-3 rounded-r-lg">Scanned</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((team, index) => (
              <tr
                key={team.teamId}
                className="hover:bg-pink-500/10 transition-colors"
              >
                <td className="p-3 flex items-center gap-2">
                  {getRankIcon(index + 1)}
                </td>
                <td className="p-3 text-white">{team.teamId}</td>
                <td className="p-3 font-semibold text-pink-300">
                  {team.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}