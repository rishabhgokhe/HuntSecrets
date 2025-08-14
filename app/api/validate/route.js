import TeamData from "@/models/SecondaryTeam";
import { connectToDB } from "@/utils/db";

export async function POST(req) {
  try {
    await connectToDB();
    const { teamId, qrId, qrValue } = await req.json();

    if (!teamId || !qrId || !qrValue) {
      return Response.json(
        { success: false, message: "⚠️ Missing teamId, qrId, or qrValue" },
        { status: 400 }
      );
    }

    const teamDoc = await TeamData.findOne({ teamId, qrId });
    if (!teamDoc) {
      return Response.json(
        { success: false, message: "🚫 Invalid team or QR ID" },
        { status: 404 }
      );
    }

    const currentIndex = teamDoc.codes.findIndex(
      (code) => code.value === qrValue
    );
    if (currentIndex === -1) {
      return Response.json(
        { success: false, message: "❓ QR value not found for this team" },
        { status: 400 }
      );
    }

    // Sequence validation
    if (currentIndex > 0 && !teamDoc.codes[currentIndex - 1].scanned) {
      return Response.json(
        { success: false, message: "⏭️ Invalid sequence — scan previous QR first!" },
        { status: 400 }
      );
    }

    const code = teamDoc.codes[currentIndex];

    // If already scanned → show hint only
    if (code.scanned) {
      return Response.json(
        {
          success: true,
          message: "🔍 QR already completed. Here's your hint again.",
          hint: code.hint
        },
        { status: 200 }
      );
    }

    // If not scanned → show question
    if (!code.question) {
      return Response.json(
        { success: false, message: "❌ No question assigned to this QR" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "✅ QR validated! Answer the question to proceed.",
        question: {
          text: code.question,
          options: code.options,
          hint: code.hint
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error validating QR:", error);
    return Response.json(
      { success: false, message: "💥 Internal server error" },
      { status: 500 }
    );
  }
}