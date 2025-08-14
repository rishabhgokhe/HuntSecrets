import React, { useState } from "react";
import { Scanner, useDevices, centerText } from "@yudiel/react-qr-scanner";

const QRCodeScanner = () => {
  const [deviceId, setDeviceId] = useState(undefined);
  const [pause, setPause] = useState(false);
  const [message, setMessage] = useState("📷 Scan a QR Code");
  const [teamId, setTeamId] = useState("");
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentQR, setCurrentQR] = useState({ qrId: "", qrValue: "" });
  const devices = useDevices();

  const showMessage = (msg) => setMessage(msg);

  const askForTeamId = () => {
    const inputId = prompt("Enter your Team ID:");
    if (inputId && inputId.trim() !== "") {
      setTeamId(inputId.trim());
      return inputId.trim();
    } else {
      showMessage("❌ Team ID required");
      return null;
    }
  };

  const handleScan = (codes) => {
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

      if (!teamId) {
        const enteredId = askForTeamId();
        if (!enteredId) return;
      }

      let currentTeamId = teamId;
      if (!currentTeamId) {
        const enteredId = askForTeamId();
        if (!enteredId) return;
        currentTeamId = enteredId;
      }

      fetch("/api/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamId: currentTeamId, qrId, qrValue }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            if (data.hint && !data.question) {
              // Already scanned → show only hint
              setQuestionData(null);
              showMessage(`💡 Hint: ${data.hint}`);
            } else {
              // New QR → show question
              setQuestionData(data.question);
              setCurrentQR({ qrId, qrValue });
              showMessage(data.message);
            }
          } else {
            setQuestionData(null);
            showMessage(data.message);
          }
        })
        .catch(() => {
          showMessage("⚠️ Something went wrong");
        });
    } catch (err) {
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
          setQuestionData(null);
          setSelectedAnswer("");
        }
      })
      .catch(() => {
        showMessage("⚠️ Something went wrong while submitting answer");
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500">
      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setPause(!pause)}
          className={`px-4 py-2 rounded font-semibold transition 
            ${pause ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}
          `}
        >
          {pause ? "▶ Resume" : "⏸ Pause"}
        </button>
      </div>

      {/* Scanner */}
      {!questionData && (
        <div className="overflow-hidden rounded-xl border-4 border-pink-500 shadow-[0_0_20px_rgba(255,0,128,0.6)]">
          <Scanner
            formats={["qr_code"]}
            constraints={{ deviceId }}
            paused={pause}
            scanDelay={1000}
            onScan={handleScan}
            onError={(err) => {
              console.error("Scanner error:", err);
              showMessage("⚠ Camera error");
            }}
            components={{
              torch: true,
              zoom: true,
              finder: true,
              tracker: centerText,
            }}
            allowMultiple={false}
          />
        </div>
      )}

      {/* Question Display */}
      {questionData && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-pink-500">
          <p className="text-lg font-bold text-pink-400">{questionData.text}</p>
          <div className="mt-3 space-y-2">
            {questionData.options.map((opt, idx) => (
              <label
                key={idx}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="answer"
                  value={opt}
                  checked={selectedAnswer === opt}
                  onChange={() => setSelectedAnswer(opt)}
                />
                <span className="text-white">{opt}</span>
              </label>
            ))}
          </div>
          {questionData.hint && (
            <p className="mt-2 text-sm text-yellow-400">
              💡 Hint: {questionData.hint}
            </p>
          )}
          <button
            onClick={handleSubmitAnswer}
            className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded text-white font-bold"
          >
            Submit Answer
          </button>
        </div>
      )}

      {/* Message */}
      <div className="mt-4 text-center text-lg font-bold text-pink-400 bg-black/70 rounded-md px-4 py-2 border border-pink-500">
        {message}
      </div>
    </div>
  );
};

export default QRCodeScanner;