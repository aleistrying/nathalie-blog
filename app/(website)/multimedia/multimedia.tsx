import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";

import { getPaginatedMultimedia } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import CategoryLabel from "@/components/blog/category";

export default async function Multimedia({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 9;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE
  };

  const multimedia = await getPaginatedMultimedia(params);

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = multimedia.length < POSTS_PER_PAGE;

  return (
    <>
      {!!multimedia && (multimedia?.length ?? 0) === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            Fin de la lista de imagenes y videos
          </span>
        </div>
      )}
      <div className="mt-10 grid gap-10 md:grid-cols-1 lg:gap-10 xl:grid-cols-3">
        {multimedia?.map((multimedia, i) => {
          if (multimedia.image) {
            const image = urlForImage(multimedia.image);
            if (!image) return null;
            return (
              <div
                className="relative z-0 h-96 max-w-md overflow-hidden rounded shadow-lg duration-1000 ease-in-out"
                key={i}>
                <p className="absolute bottom-0 z-10 flex w-full items-center justify-center bg-white p-2 px-10 text-black opacity-50">
                  {multimedia.excerpt}
                </p>
                <div className="flex justify-center">
                  <CategoryLabel categories={multimedia.categories} />
                </div>

                {/* <div className="absolute top-0 w-full h-full bg-black opacity-30">{multimedia.excerpt}</div> */}
                <Image
                  key={i}
                  {...image}
                  alt={multimedia.title}
                  className={`h-full w-full object-cover ${
                    multimedia?.NSFW
                      ? "blur-lg filter duration-1000 ease-in-out hover:blur-none"
                      : ""
                  }`}
                />
              </div>
            );
          } else if (multimedia.videoUrl) {
            const videoUrl = new URL(multimedia.videoUrl);
            const videoId = videoUrl.pathname?.includes("/short")
              ? videoUrl.pathname.split("/").pop()?.split("?")[0]
              : videoUrl.searchParams.get("v");
            // console.log(videoUrl, videoId);
            const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            return (
              <div
                className="relative z-0 h-96 max-w-md overflow-hidden rounded shadow-lg duration-1000 ease-in-out"
                key={i}>
                {multimedia.NSFW ? (
                  <p className="absolute bottom-0 z-10 flex w-full items-center justify-center bg-white p-2 px-10 text-black opacity-50">
                    {multimedia.excerpt}
                  </p>
                ) : null}
                <div className="flex justify-center">
                  <CategoryLabel categories={multimedia.categories} />
                </div>
                <a
                  href={multimedia.videoUrl}
                  target="_blank"
                  rel="noopener">
                  {multimedia?.NSFW ? (
                    <Image
                      src={videoThumbnail}
                      alt={multimedia.title}
                      width={480}
                      height={360}
                      className={`h-full w-full object-cover filter duration-1000 ease-in-out hover:blur-none ${
                        multimedia?.NSFW ? "blur-lg" : ""
                      }`}
                    />
                  ) : (
                    <iframe
                      className={`h-full w-full object-cover filter duration-1000 ease-in-out hover:blur-none ${
                        multimedia?.NSFW ? "blur-lg" : ""
                      }`}
                      src={
                        multimedia.videoUrl?.includes("shorts")
                          ? multimedia?.videoUrl.replace(
                              "shorts",
                              "embed"
                            )
                          : multimedia?.videoUrl.replace(
                              "watch?v=",
                              "embed/"
                            )
                      }
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      title={multimedia.title}
                      allowFullScreen
                    />
                  )}
                </a>
              </div>
            );
          }
        })}
      </div>

      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </>
  );
}
