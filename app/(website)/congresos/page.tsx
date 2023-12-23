import { Suspense } from "react";
import Container from "@/components/container";
import Congresos from "./congresos";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function CongresosPage({ searchParams }) {
  return (
    <>
      <Container className="relative">
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Congresos
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">
            Bienvenido a mí colección de congresos
          </p>
        </div>
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Congresos searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
