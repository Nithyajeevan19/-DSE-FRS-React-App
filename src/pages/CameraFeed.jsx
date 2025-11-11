// src/components/CameraFeed.jsx (CORRECTED CODE)
import React, { useRef, useState } from "react";
import { Camera, VideoOff, CheckCircle } from 'lucide-react'; // Added icons

export default function CameraFeed({ onCapture }) {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreaming(true);
      }
    } catch (err) {
      alert("Camera error: " + err.message);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      setStreaming(false);
    }
  };

  return (
    <div className="text-center my-2">
      {streaming ? (
        <>
          <video ref={videoRef} autoPlay playsInline className="w-56 h-auto rounded-lg shadow-xl mb-4 border-4 border-indigo-400" />
          <div className="flex justify-center space-x-3">
            <button 
              onClick={stopCamera} 
              className="flex items-center space-x-1 bg-red-500 text-white py-2 px-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              <VideoOff size={18} />
              <span>Stop Camera</span>
            </button>
            <button 
              onClick={() => { stopCamera(); if (onCapture) onCapture(); }} 
              className="flex items-center space-x-1 bg-green-500 text-white py-2 px-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <CheckCircle size={18} />
              <span>Mark & Capture</span>
            </button>
          </div>
        </>
      ) : (
        <button 
          onClick={startCamera} 
          className="flex items-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition mx-auto"
        >
          <Camera size={20} />
          <span>Start Camera</span>
        </button>
      )}
    </div>
  );
}