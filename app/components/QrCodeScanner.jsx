import React, { useState } from "react";
import { Scanner, useDevices, centerText } from "@yudiel/react-qr-scanner";

const styles = {
  container: {
    width: "90%",
    maxWidth: 500,
    margin: "auto",
    padding: 20,
  },
};

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
    <div style={styles.container}>
      <button
        onClick={() => setPause(!pause)}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
      >
        {pause ? "▶️ Resume Scanner" : "⏸️ Pause Scanner"}
      </button>

      <Scanner
        formats={["qr_code"]}
        constraints={{ deviceId }}
        paused={pause}
        scanDelay={1000}
        onScan={handleScan}
        onError={(err) => {
          console.error("Scanner error:", err);
          showMessage("⚠️ Camera error");
        }}
        components={{
          onOff: true,
          torch: true,
          zoom: true,
          finder: true,
          tracker: centerText,
        }}
        allowMultiple={false}
      />

      <div className="text-center mt-4 text-lg font-semibold text-white bg-black/80 rounded-md px-4 py-2 w-full">
        {message}
      </div>
    </div>
  );
};

export default QRCodeScanner;
