import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";

import {
  getPaginatedBitacoras,
  getPaginatedResumenes as getPaginatedResumenes
} from "@/lib/sanity/client";
import PdfCard from "@/components/pdfCard";
import WeekPagination from "../../../components/blog/weekPagination";
import { useRouter } from "next/router";
import MultiButtonGroup from "@/components/multiButtonGroup";

export default async function Resumenes({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  // const page = searchParams.page;
  // const pageIndex = parseInt(page, 10) || 1;
  const week: number = +searchParams?.week || 1;

  // Set the number of posts to be displayed per page
  const MAX_WEEKS = 6;

  // Define the parameters for fetching posts based on the current page
  const params = {
    // pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    // limit: pageIndex * POSTS_PER_PAGE,
    week: searchParams.week
  };

  const resumenes = await getPaginatedResumenes(params);

  // Check if the current page is the first or the last
  const isStart = week === 1;
  const isEnd = week === MAX_WEEKS;
  console.log(searchParams, week, isEnd, isStart);
  return (
    <>
      {/* make client component for 9 buttons that are selectable */}
      <div className="w-full">
        <h1 className="m-0 w-full p-0  text-center text-2xl font-bold">
          Semana {week ?? 1}
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {Array(MAX_WEEKS)
            .fill(0)
            .map((v, i) => i + 1)
            .map(w => {
              return (
                <MultiButtonGroup
                  key={w}
                  week={w}
                  selectedWeek={week}
                  params={{
                    week: w
                  }}
                  isEnd={w === MAX_WEEKS}
                  isStart={w === 1}
                />
              );
            })}
        </div>
      </div>
      {resumenes && resumenes?.length === 0 && (
        <div className="flex h-40 w-full items-center justify-center ">
          <span className="text-lg text-gray-500">
            No hay resumenes para la semana {week ?? 1}
          </span>
        </div>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {resumenes.map(pdf => (
          <PdfCard key={pdf._id} pdf={pdf} />
        ))}
      </div>

      <WeekPagination
        // pageIndex={pageIndex}
        isFirstPage={isStart}
        isLastPage={isEnd}
        currentWeek={week}
        currentPage={"resumenes"}
      />
    </>
  );
}
