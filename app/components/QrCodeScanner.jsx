import React, { useState } from "react";
import { Scanner, useDevices, centerText } from "@yudiel/react-qr-scanner";

const QRCodeScanner = () => {
  const [deviceId, setDeviceId] = useState(undefined);
  const [pause, setPause] = useState(false);
  const [message, setMessage] = useState("📷 Scan a QR Code");
  const [teamId, setTeamId] = useState("");
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
          showMessage(data.message || "✅ Success");
        })
        .catch(() => {
          showMessage("⚠️ Something went wrong");
        });
    } catch (err) {
      showMessage("❌ Invalid QR format");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg border border-pink-500">
      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        {/* <select
          className="bg-gray-800 text-white rounded px-3 py-2 text-sm border border-pink-500 focus:outline-none"
          onChange={(e) => setDeviceId(e.target.value)}
          value={deviceId || ""}
        >
          <option value="">Select Camera</option>
          {devices.map((device, idx) => (
            <option key={idx} value={device.deviceId}>
              {device.label || `Camera ${idx + 1}`}
            </option>
          ))}
        </select> */}

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

      {/* Message */}
      <div className="mt-4 text-center text-lg font-bold text-pink-400 bg-black/70 rounded-md px-4 py-2 border border-pink-500">
        {message}
      </div>
    </div>
  );
};

export default QRCodeScanner;