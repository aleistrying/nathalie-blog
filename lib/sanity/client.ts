import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  homeQuery,
  postquery,
  bitacoraquery,
  resumenes as resumenesquery,
  limitquery,
  paginatedquery,
  configQuery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  searchquery,
  allprofessorsquery,
  paginatedmultimediaquery,
  talleresquery
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();
// export async function getAllBitacoras(): Promise<
//   {
//     _id: string;
//     _createdAt: string;
//     publishedAt: string;
//     pdfs: {
//       _key: string;
//       _type: string;
//       name: string;
//       pdf: {
//         asset: {
//           _id: string;
//           url: string;
//         };
//       };
//     }[];
//   }[]
// > {
//   if (client) {
//     return (await client.fetch(bitacoraquery)) || [];
//   }
//   return [];
// }
export async function getAllPosts(): Promise<
  {
    _id: string;
    _createdAt: string;
    publishedAt: string;
    mainImage: {
      blurDataURL: string;
      ImageColor: string;
      [key: string]: any;
    };
    featured: boolean;
    excerpt: string;
    slug: string;
    title: string;
    author: {
      _id: string;
      image: {
        blurDataURL: string;
        ImageColor: string;
        [key: string]: any;
      };
      slug: string;
      nombre: string;
    };
    categories: {
      _id: string;
      title: string;
      slug: string;
    }[];
  }[]
> {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery))?.[0] || [];
  }
  return [];
}
export async function getProfessors() {
  if (client) {
    return (await client.fetch(allprofessorsquery)) || [];
  }
  return [];
}

export async function getHome() {
  if (client) {
    return (await client.fetch(homeQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery)) || [];
    return slugs.map(slug => ({ slug }));
  }
  return [];
}
// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || [];
    return slugs.map(slug => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs = (await client.fetch(catpathquery)) || [];
    return slugs.map(slug => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedTalleres({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(talleresquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}
export async function getPaginatedResumenes({
  limit,
  pageIndex = 0
}) {
  if (client) {
    return (
      (await client.fetch(resumenesquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}
export async function getPaginatedBitacoras({
  limit,
  pageIndex = 0
}) {
  if (client) {
    return (
      (await client.fetch(bitacoraquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}
export async function getPaginatedPosts({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}

export async function getPaginatedMultimedia({
  limit,
  pageIndex = 0
}): Promise<
  {
    image: any;
    NSFW: boolean;
    title: string;
    excerpt: string;
    videoUrl: string;
    categories: any;
    createdAt: string;
  }[]
> {
  if (client) {
    return (
      (await client.fetch(paginatedmultimediaquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}
