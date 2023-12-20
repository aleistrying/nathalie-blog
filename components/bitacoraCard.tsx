"use client";
import { useState } from "react";
export default function BitacoraCard({ pdf }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card m-2
            flex transform cursor-pointer
            flex-col overflow-hidden rounded-lg bg-white shadow-lg transition
            duration-500 ease-in-out
${
  isExpanded
    ? "absolute left-0 top-0 z-30 h-screen w-full"
    : "h-96  hover:-translate-y-1 hover:scale-110"
}	
          `}
      onClick={handleClick}
      key={pdf._id}>
      <h2
        className={`m-2 flex flex-row items-center justify-center text-2xl font-bold text-gray-800 `}>
        {pdf.title}
      </h2>
      <iframe
        className="relative cursor-pointer"
        onClick={handleClick}
        key={pdf._id}
        src={pdf.fileUrl}
        width="100%"
        height="100%"
        title={pdf.title}></iframe>
      {/* add closing controls */}
      {isExpanded && (
        <div className="absolute right-0 top-0 m-2">
          <button
            className="text-xl font-bold text-gray-800"
            onClick={handleClick}>
            X (Cerrar)
          </button>
        </div>
      )}
    </div>
  );
}
