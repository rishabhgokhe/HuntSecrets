"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">🏆 Leaderboard</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Rank</th>
            <th className="border-b p-2">Team ID</th>
            <th className="border-b p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((team, index) => (
            <tr key={team.teamId} className="hover:bg-gray-100">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{team.teamId}</td>
              <td className="p-2">{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}