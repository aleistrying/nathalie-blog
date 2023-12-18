import { getProfessors } from "@/lib/sanity/client";
import Professors from "./profesores";

export default async function ProfessorsPage() {
  const professors = await getProfessors();
  // console.log(professors);
  return <Professors professors={professors} />;
}

// export const revalidate = 60;
