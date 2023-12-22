import { Suspense } from "react";
import Container from "@/components/container";
import Resumenes from "./resumenes";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ResumenesPage({ searchParams }) {
  return (
    <>
      <Container className="relative flex w-full flex-row flex-wrap items-center justify-center gap-10">
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Resumenes searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
