import TeamData from "@/models/SecondaryTeam";
import { connectToDB } from "@/utils/db";
import mongoose from "mongoose";

const ScanSchema = new mongoose.Schema(
  {
    teamId: { type: String, required: true, trim: true },
    qrId: { type: String, required: true, trim: true },
    qrValue: { type: String, required: true, trim: true },
    scannedAt: { type: Date, default: Date.now },
    timeOnly: {
      type: String,
      default: () => {
        const now = new Date();
        return now.toTimeString().split(" ")[0];
      },
    },
  },
  { collection: "Qr-Treasure-Hunt" }
);

const Scan = mongoose.models.Scan || mongoose.model("Scan", ScanSchema);

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

    const alreadyScanned = await Scan.findOne({ teamId, qrValue });
    if (alreadyScanned) {
      return Response.json(
        { success: false, message: "🔁 Already scanned this QR!" },
        { status: 200 }
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

    teamDoc.codes[currentIndex].scanned = true;
    await teamDoc.save();

    // Save the scan log
    await Scan.create({ teamId, qrId, qrValue });

    return Response.json(
      { success: true, message: "✅ QR marked as done — great job!" },
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