import React, { useEffect } from "react";

type ToastProps = {
  message: string; 
  type?: "success" | "error" | "info";
  duration?: number; 
  onClose: () => void; 
};

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration); 
    return () => clearTimeout(timer); 
  }, [duration, onClose]);

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-lg ${typeStyles[type]} animate-fade`}
    >
      {message}
    </div>
  );
}
