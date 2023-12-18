import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Un poco sobre mí
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Donde la pasión por la medicina se encuentra con la
          perseverancia, inspirando a cada paso en el mundo de la
          medicina.
        </p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        <div></div>
        {authors.slice(0, 1).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              {/* <Link href={`/author/${author?.slug}`}>
                {imageProps && */}
              (
              <Image
                src={imageProps?.src}
                alt={author?.name || " "}
                fill
                sizes="(max-width: 320px) 100vw, 320px"
                className="object-cover"
              />
              ){/* } */}
              {/* </Link> */}
            </div>
          );
        })}

        <div></div>
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        {settings?.aboutMe // .map(s =>
          ?.split("\n")
          ?.map((p, i) => (
            <p key={i} className="text-justify">
              {p}
            </p>
          ))
          // )
          .flat()}
        {/* <p className="text-justify">
          Soy la estudiante Nathalie Díaz del 10mo semestre de la
          Universidad de Panamá y tuve la increíble oportunidad de
          rotar en el Complejo Hospitalario Metropolitano Dr. Arnulfo
          Arias Madrid.
        </p>
        <p className="text-justify">
          Durante mi tiempo en este centro de atención médica pude
          sumergirme en el apasionante mundo de la cirugía y adquirir
          un conocimiento invaluable. Cada día fue una emocionante
          aventura llena de aprendizaje y descubrimientos, donde pude
          presenciar de cerca procedimientos quirúrgicos complejos y
          trabajar junto a talentosos cirujanos.
        </p>
        <p className="text-justify">
          Me cautivó la precisión y destreza con la que los
          profesionales de la cirugía abordaban cada caso, y me sentí
          inspirada a aprender más y desafiarme a mí misma. A través
          de esta experiencia única, he consolidado mi amor por la
          cirugía y estoy emocionada de compartir con ustedes mis
          experiencias y conocimientos en este fascinante campo.
          ¡Acompáñenme en esta aventura médica llena de historias
          cautivadoras y aprendizajes!
        </p> */}
        <p>
          <a href="https://api.whatsapp.com/send/?phone=50767476679">
            Contactame por whatsapp: +507 6747-6679
          </a>
        </p>
        <p>
          <a href="mailto:natmed.up@gmail.com">
            Contactame email: natmed.up@gmail.com
          </a>
        </p>
      </div>
    </Container>
  );
}
