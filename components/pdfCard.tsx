"use client";
import Image from "next/image";
import { useState } from "react";
export default function PdfCard({ pdf }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card
            flex transform cursor-pointer
flex-row items-center justify-between overflow-hidden rounded-lg bg-gray-300 
            bg-opacity-30            shadow-lg backdrop-blur-lg backdrop-filter transition duration-200 ease-in-out dark:bg-gray-900 dark:bg-opacity-40
            dark:text-black
${
  // isExpanded
  //   ? "absolute left-0 top-0 z-30 h-screen w-full"
  //       :
  "  hover:-translate-y-1 hover:scale-110"
}	
          `}
      onClick={handleClick}
      key={pdf._id}>
      <div className="w-2/3 min-w-0 p-2">
        <h2 className="flex w-full max-w-full select-none flex-row items-center justify-center whitespace-normal break-words break-all text-xl text-gray-800 dark:text-gray-50">
          {pdf?.title ?? "Sin título"}
        </h2>
      </div>
      {/* add a pretty button to open pdf in red */}
      <button
        className="h-full w-1/3 rounded-r bg-red-500 px-4 py-2 font-bold  text-white backdrop-blur-lg backdrop-filter hover:bg-red-700"
        onClick={() => {
          window.open(pdf.fileUrl, "_blank");
        }}>
        VER PDF
      </button>
      {/* {pdf?.file?.asset?._ref?.includes("pdf") ? (
        <iframe
          className={`relative cursor-pointer rounded-sm ${
            !isExpanded
              ? "overflow-hidden overflow-x-hidden overflow-y-hidden"
              : ""
          }`}
          onClick={handleClick}
          key={pdf._id}
          src={pdf.fileUrl}
          width="100%"
          height="100%"
          title={pdf.title}></iframe>
      ) : (
        <Image
          className={`relative h-full w-96 cursor-pointer rounded-sm object-contain ${
            !isExpanded
              ? "overflow-hidden overflow-x-hidden overflow-y-hidden"
              : ""
          }`}
          alt={pdf.title}
          onClick={handleClick}
          key={pdf._id}
          src="/img/document-link-icon.png"
          title={pdf.title}
          width={1080}
          height={1080}
        />
      )} */}
      {/* add closing controls */}
      {/* {isExpanded && (
        <div className="absolute right-0 top-0 m-2">
          <button
            className="text-xl font-bold text-gray-800"
            onClick={handleClick}>
            X (Cerrar)
          </button>
        </div>
      )} */}
    </div>
  );
}
