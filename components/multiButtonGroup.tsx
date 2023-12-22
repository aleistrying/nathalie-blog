"use client";
import { useRouter } from "next/navigation";
export default function MultiButtonGroup({
  params,
  week,
  selectedWeek,
  isEnd = false,
  isStart = false
}) {
  const router = useRouter();
  return (
    <button
      key={week}
      className={`relative flex-1 bg-transparent p-3 lg:max-w-sm ${
        selectedWeek === week ? "bg-gray-300 dark:bg-gray-50 " : ""
      } ${isStart ? "rounded-l-md" : ""} ${
        isEnd ? "rounded-r-md" : ""
      } transition-all`}
      onClick={() => {
        params.week = week;
        const query = new URLSearchParams(params).toString();
        router.push(`/resumenes?${query}`);
      }}>
      <div
        className={`absolute left-0 top-0 h-full   w-full max-w-6xl
${isStart ? "rounded-l-md" : ""} ${isEnd ? "rounded-r-md" : ""}
overflow-hidden  bg-gray-900 dark:bg-gray-300

 ${
   selectedWeek === week
     ? "bg-opacity-80 dark:bg-opacity-80"
     : "bg-opacity-20 dark:bg-opacity-20"
 }

  text-white shadow-lg backdrop-blur-lg backdrop-filter dark:text-black 
        `}>
        {/* <div className="absolute inset-0 bg-gray-50 opacity-0 transition-all dark:bg-gray-800"></div> */}
      </div>
      <p
        className={`relative bg-transparent text-center text-2xl  ${
          selectedWeek === week
            ? "text-gray-50 dark:text-gray-900"
            : "text-gray-600 dark:text-gray-300"
        }`}>
        {week}
      </p>
    </button>
  );
}
