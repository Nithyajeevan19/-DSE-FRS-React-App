import { useState, useRef } from 'react';
import { Camera, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WebcamFeed({ onCapture, onClose }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startCamera = async () => {
    setIsLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      alert('❌ Camera Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      setIsStreaming(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      
      stopCamera();
      alert('✅ Attendance marked successfully!');
      onCapture && onCapture();
    }
  };

  return (
    <div className="w-full space-y-3 p-4">
      {/* Video Feed */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-64 object-cover"
          autoPlay
          playsInline
        />
        {isStreaming && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
        )}
      </div>

      {/* Hidden Canvas */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Buttons */}
      <div className="space-y-2">
        {!isStreaming ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={startCamera}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-lg font-bold text-base shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition disabled:opacity-50"
          >
            <Camera size={20} />
            {isLoading ? 'Starting...' : 'Start Camera'}
          </motion.button>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={capturePhoto}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-bold shadow-lg flex items-center justify-center gap-1 hover:shadow-xl transition"
            >
              <Camera size={18} />
              Capture
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={stopCamera}
              className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold shadow-lg flex items-center justify-center gap-1 transition"
            >
              <X size={18} />
              Stop
            </motion.button>
          </div>
        )}
      </div>

      {/* Ready Status */}
      {isStreaming && (
        <div className="bg-green-100 border border-green-300 rounded-lg p-2 text-center">
          <p className="text-green-800 font-semibold text-xs">📷 Ready to capture!</p>
        </div>
      )}
    </div>
  );
}
