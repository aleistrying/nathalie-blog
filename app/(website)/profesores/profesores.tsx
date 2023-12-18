import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default function Professors({ professors }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Mis profesores
      </h1>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        {professors?.map(professor => (
          <div
            key={professor?._id}
            className="mb-10 flex-row items-center justify-between">
            <div className="flex-col items-center justify-center">
              <Image
                src={urlForImage(professor?.image)?.src ?? ""}
                alt={professor?.name}
                width={250}
                height={250}
                className="rounded-full"
              />
              <h2 className="mt-1 flex text-xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-snug">
                {professor?.nombre}
              </h2>
            </div>
            <p className="mt-2 text-lg dark:text-white">
              {professor.bio && (
                <PortableText value={professor.bio} />
              )}
              {/* {professor?.bio?.map((paragraph, index) => (
                <span key={index}>
                  {console.log(paragraph)}
                  {/*{paragraph} }
                  <br />
                </span>
              ))} */}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
