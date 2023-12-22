import { Suspense } from "react";
import Container from "@/components/container";
import Trabajos from "./trabajos";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function BitacoraPage({ searchParams }) {
  return (
    <>
      <Container className="relative flex w-full flex-row flex-wrap items-center justify-center gap-10">
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Trabajos searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
