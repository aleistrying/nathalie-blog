import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "Nathalie - El Blog de rotación clínica de cirugía",
      template: "%s | Nathalie"
    },
    description: settings?.description || "",
    keywords: [
      "Nathalie Díaz",
      "Universidad Panamá",
      "Rotación Clínica",
      "Cirugía",
      "Complejo Hospitalario",
      "Hospital Arnulfo Arias Madrid",
      "Aprendizaje Cirugía",
      "Procedimientos Quirúrgicos",
      "Experiencia Médica",
      "Talento Quirúrgico",
      "Precisión Cirugía",
      "Inspiración Médica",
      "Desafíos Cirugía",
      "Amor Cirugía",
      "Aventura Médica",
      "Historias Médicas",
      "Estudiante Medicina",
      "Cirujanos",
      "Sector Salud",
      "NathalieDiaz",
      "EstudianteMedicina",
      "UniversidadPanama",
      "RotacionClinica",
      "Cirugia",
      "HospitalMetropolitano",
      "AprendizajeCirugia",
      "ProcedimientosQuirurgicos",
      "ExperienciaMedica",
      "TalentoQuirurgico",
      "PrecisionCirugia",
      "InspiracionMedica",
      "DesafiosCirugia",
      "PasiónCirugía",
      "AventuraMedica",
      "HistoriasMedicas"
    ],
    authors: [{ name: "Nathalie Díaz" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
