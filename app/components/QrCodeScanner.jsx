import React, { useState, useEffect, useRef } from "react";
import { Scanner, centerText } from "@yudiel/react-qr-scanner";
import { Pause, Play } from "lucide-react";

const QRCodeScanner = () => {
  const [pause, setPause] = useState(false);
  const [message, setMessage] = useState("📷 Scan a QR Code");
  const [teamId, setTeamId] = useState("");
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentQR, setCurrentQR] = useState({ qrId: "", qrValue: "" });
  const [penaltyUntil, setPenaltyUntil] = useState(null);
  const [penaltyRemaining, setPenaltyRemaining] = useState("");
  const [showHint, setShowHint] = useState(""); // NEW: show hint after correct answer
  const timerRef = useRef(null);

  const showMessage = (msg) => setMessage(msg);

  const askForTeamId = () => {
    const inputId = prompt("Enter your Team ID:");
    if (inputId?.trim()) {
      setTeamId(inputId.trim());
      return inputId.trim();
    }
    showMessage("❌ Team ID required");
    return null;
  };

  // Penalty countdown
  useEffect(() => {
    if (!penaltyUntil) {
      clearInterval(timerRef.current);
      setPenaltyRemaining("");
      return;
    }
    timerRef.current = setInterval(() => {
      const diff = new Date(penaltyUntil) - new Date();
      if (diff <= 0) {
        clearInterval(timerRef.current);
        setPenaltyUntil(null);
        setPenaltyRemaining("");
        showMessage("✅ Penalty over! You can scan again.");
      } else {
        const minutes = Math.floor(diff / 1000 / 60);
        const seconds = Math.floor(diff / 1000) % 60;
        setPenaltyRemaining(`⏳ Penalty time: ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [penaltyUntil]);

  const handleScan = (codes) => {
    if (penaltyUntil) {
      showMessage("⚠ Under penalty. Wait until it expires.");
      return;
    }

    const url = codes[0]?.rawValue;
    if (!url) return;

    try {
      const params = new URLSearchParams(new URL(url).search);
      const qrId = params.get("qrId");
      const qrValue = params.get("qrValue");

      if (!qrId || !qrValue) {
        showMessage("❌ Invalid QR format");
        return;
      }

      const currentTeamId = teamId || askForTeamId();
      if (!currentTeamId) return;

      fetch("/api/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamId: currentTeamId, qrId, qrValue }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.penaltyUntil) {
            setPenaltyUntil(data.penaltyUntil);
            showMessage(data.message);
            return;
          }
          if (data.success) {
            setShowHint(""); // reset previous hint
            if (data.hint && !data.question) {
              setQuestionData(null);
              showMessage(`💡 Hint: ${data.hint}`);
            } else {
              setQuestionData(data.question);
              setCurrentQR({ qrId, qrValue });
              showMessage(data.message);
            }
          } else {
            setQuestionData(null);
            showMessage(data.message);
          }
        })
        .catch(() => showMessage("⚠️ Something went wrong"));
    } catch {
      showMessage("❌ Invalid QR format");
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      showMessage("⚠️ Please select an answer");
      return;
    }

    fetch("/api/submit-answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        teamId,
        qrId: currentQR.qrId,
        qrValue: currentQR.qrValue,
        answer: selectedAnswer,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        showMessage(data.message);
        if (data.success) {
          setSelectedAnswer("");
          if (data.hint) setShowHint(data.hint); // show hint inside question box
        }
      })
      .catch(() =>
        showMessage("⚠️ Something went wrong while submitting answer")
      );
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500">
      {/* Play Pause Button */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setPause(!pause)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all shadow-md
      ${
        pause
          ? "bg-green-500 hover:bg-green-600 text-white"
          : "bg-red-500 hover:bg-red-600 text-white"
      }`}
        >
          {pause ? (
            <>
              <Play size={18} />
              Resume
            </>
          ) : (
            <>
              <Pause size={18} />
              Pause
            </>
          )}
        </button>
      </div>

      {/* Penalty Timer */}
      {penaltyRemaining && (
        <div className="mb-4 text-center text-yellow-400 font-bold">
          {penaltyRemaining}
        </div>
      )}

      {/* Scanner */}
      {!questionData && !penaltyUntil && (
        <div className="overflow-hidden rounded-xl border-4 border-pink-500 shadow-[0_0_20px_rgba(255,0,128,0.6)]">
          <Scanner
            formats={["qr_code"]}
            paused={pause}
            scanDelay={1000}
            onScan={handleScan}
            onError={() => showMessage("⚠ Camera error")}
            components={{
              torch: true,
              zoom: true,
              finder: true,
              tracker: centerText,
            }}
          />
        </div>
      )}

      {/* Question */}
      {questionData && (
        <div className="mt-4 p-5 bg-gray-900/80 rounded-xl border border-pink-500/40 shadow-lg">
          <p className="text-lg font-bold text-pink-400">{questionData.text}</p>
          <div className="mt-3 grid grid-cols-1 gap-2">
            {questionData.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedAnswer(opt)}
                className={`px-4 py-2 rounded-lg border text-left transition-all
                  ${
                    selectedAnswer === opt
                      ? "bg-pink-600 text-white border-pink-500"
                      : "bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {showHint && (
            <p className="mt-3 text-sm text-yellow-400">💡 Hint: {showHint}</p>
          )}
          <button
            onClick={handleSubmitAnswer}
            className="mt-4 w-full px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-bold transition-all"
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* Status Message */}
      <div className="mt-4 text-center text-lg font-bold text-pink-400 bg-black/70 rounded-md px-4 py-2 border border-pink-500">
        {message}
      </div>
    </div>
  );
};

export default QRCodeScanner;
