import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";

import { getPaginatedBitacoras } from "@/lib/sanity/client";
import { urlForImage, urlForPdf } from "@/lib/sanity/image";
import BitacoraCard from "@/components/bitacoraCard";

export default async function Bitacora({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 6;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE
  };

  const bitacoras = await getPaginatedBitacoras(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = bitacoras.length < POSTS_PER_PAGE;

  // console.log(bitacoras);
  return (
    <>
      {bitacoras && bitacoras?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            Fin de los resultados
          </span>
        </div>
      )}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {bitacoras.map(pdf => (
          <BitacoraCard key={pdf._id} pdf={pdf} />
        ))}
      </div>

      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </>
  );
}
