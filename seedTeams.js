import mongoose from "mongoose";
import TeamData from "./models/SecondaryTeam.js";

const teams = [
  {
    teamId: "team001",
    qrId: "vgdhvjsF",
    codes: [
      {
        value: "3bdhLq2w",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Who is the PM of India?",
        options: ["Rishabh", "Modi", "Rahul Gandhi", "Elon Musk"],
        answer: "Modi",
        hint: "Go to Mech building for next code",
      },
      {
        value: "8xnAje6P",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",
        hint: "Check the library for the next QR",
      },
      {
        value: "vP9dmR3Q",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        hint: "Next QR is near the sports complex",
      },
      {
        value: "Kqw82jzE",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is 5 + 7?",
        options: ["10", "12", "14", "11"],
        answer: "12",
        hint: "Look around the cafeteria",
      },
      {
        value: "cY9keZ1x",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Who wrote 'Hamlet'?",
        options: ["Shakespeare", "Tolkien", "Rowling", "Hemingway"],
        answer: "Shakespeare",
        hint: "Next QR is in the admin office",
      },
      {
        value: "Zk3rN8Dw",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO"],
        answer: "H2O",
        hint: "Final QR near the main gate",
      },
    ],
  },
  {
    teamId: "team002",
    qrId: "hjdks9Pq",
    codes: [
      {
        value: "Tq9LmY2x",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Which country has the largest population?",
        options: ["India", "USA", "China", "Russia"],
        answer: "China",
        hint: "Check the science block",
      },
      {
        value: "Rw6Ajd8F",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is 9 x 8?",
        options: ["72", "81", "64", "69"],
        answer: "72",
        hint: "Next QR is in the library",
      },
      {
        value: "Up3cnV7K",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Who painted the Mona Lisa?",
        options: ["Da Vinci", "Van Gogh", "Picasso", "Michelangelo"],
        answer: "Da Vinci",
        hint: "Near the art studio",
      },
      {
        value: "Mqv72XpE",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "80°C", "120°C"],
        answer: "100°C",
        hint: "Check the chemistry lab",
      },
      {
        value: "Ey1zcN0w",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
        answer: "Blue Whale",
        hint: "Next QR near the auditorium",
      },
      {
        value: "Lk8gF3Bq",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Tiger", "Leopard"],
        answer: "Cheetah",
        hint: "Final QR at the sports ground",
      },
    ],
  },
];

async function insertTeams() {
  try {
    const MONGO_URI = process.env.MONGODB_URI;
    if (!MONGO_URI) throw new Error("Missing MONGO_URI in environment");

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");

    await TeamData.deleteMany({});
    console.log("🗑 Existing team data cleared");

    await TeamData.insertMany(teams);
    console.log("✅ Teams inserted successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error inserting teams:", error);
    await mongoose.disconnect();
  }
}

insertTeams();