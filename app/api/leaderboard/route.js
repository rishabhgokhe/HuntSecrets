import { connectToDB } from "@/utils/db";
import Team from "@/models/SecondaryTeam";

export async function GET() {
  try {
    await connectToDB();

    const teams = await Team.find({});

    // Calculate score for each team
    const leaderboard = teams.map(team => ({
      teamId: team.teamId,
      score: team.codes.filter(code => code.scanned).length
    }));

    // Sort descending by score
    leaderboard.sort((a, b) => b.score - a.score);

    return Response.json({ success: true, leaderboard }, { status: 200 });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}