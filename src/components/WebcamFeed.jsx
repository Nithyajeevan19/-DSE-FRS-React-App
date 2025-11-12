// src/components/WebcamFeed.jsx
import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { CheckCircle, VideoOff } from "lucide-react";

export default function WebcamFeed({ onCapture, onClose }) {
  const webcamRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleStartCamera = () => setShowVideo(true);
  const handleStopCamera = () => {
    setShowVideo(false);
    if (onClose) onClose();
  };

  const handleMarkCapture = () => {
    // You can use: const imageSrc = webcamRef.current.getScreenshot();
    if (onCapture) onCapture();
    setShowVideo(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {!showVideo ? (
        <button
          onClick={handleStartCamera}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg transition shadow-md hover:bg-indigo-700"
        >
          <span>Start Camera</span>
        </button>
      ) : (
        <>
          <div className="w-full bg-black rounded-xl overflow-hidden shadow-lg mb-3">
            <Webcam
              audio={false}
              ref={webcamRef}
              mirrored
              screenshotFormat="image/jpeg"
              videoConstraints={{
                width: 1280,
                height: 720,
                facingMode: "user",
              }}
              className="w-full h-72 object-cover"
              style={{ borderRadius: "12px", background: "#000" }}
            />
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={handleStopCamera}
              className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              <VideoOff size={20} />
              Close
            </button>
            <button
              onClick={handleMarkCapture}
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <CheckCircle size={20} />
              Mark & Capture
            </button>
          </div>
        </>
      )}
    </div>
  );
}
