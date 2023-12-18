import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./portafolio";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <>
      <Container className="relative flex w-full flex-row flex-wrap items-center justify-center gap-10">
        <h1 className="w-full text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Mi portafolio
        </h1>
        <div className="flex h-24 w-1/2 max-w-sm flex-row items-center justify-center overflow-hidden rounded bg-white p-5 text-center shadow-lg hover:cursor-pointer">
          <p className="text-lg">Mis Resumenes</p>
        </div>

        <div className="flex h-24 w-1/2 max-w-sm flex-row items-center justify-center overflow-hidden rounded bg-white p-5 text-center shadow-lg hover:cursor-pointer">
          <p className="text-lg">
            Mis Certificados, Meritos y Diplomas
          </p>
        </div>
        <div className="flex h-24 w-1/2 max-w-sm flex-row items-center justify-center overflow-hidden rounded bg-white p-5 text-center shadow-lg hover:cursor-pointer">
          <p className="text-lg">Trabajos Realizados</p>
        </div>

        <div className="flex h-24 w-1/2 max-w-sm flex-row items-center justify-center overflow-hidden rounded bg-white p-5 text-center shadow-lg hover:cursor-pointer">
          <p className="text-lg">Fotos y Videos</p>
        </div>
        {/* <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense> */}
      </Container>
    </>
  );
}

// export const revalidate = 60;
