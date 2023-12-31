import { groq } from "next-sanity";

//get all talleres
export const talleresquery = groq`
*[_type == "talleres"] | order(  _createdAt desc) {
  _id,
  _createdAt,
  title,
  file,
"fileUrl": file.asset->url
}
`;
//get all trabajos
export const resumenes = groq`
*[_type == "resumenes" && week == $week] | order(week asc, _createdAt desc) {
  _id,
  _createdAt,
  title,
  file,
  week,
"fileUrl": file.asset->url
}
`;
// Get all bitacoras
export const bitacoraquery = groq`
*[_type == "bitacoras"] | order(  _createdAt desc) {
  _id,
  _createdAt,
  title,
  file,
"fileUrl": file.asset->url
}
`;
// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  publishedAt,
  mainImage {
    ...,
    NSFW,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  featured,
  excerpt,
  slug,
  title,
  author-> {
    _id,
    image,
    slug,
    nombre
  },
  categories[]->,
}
`;
// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0..$limit] {
  ...,
  author->,
  categories[]->
}
`;
// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  author->,
  categories[]->
}
`;
//get congressos stuff
export const paginatedcongresosquery = groq`
*[_type == "congresos"] | order(createdAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  image,
  title,
  excerpt,
  videoUrl,
  categories,
  createdAt
}
`;
//get multimedia
export const paginatedmultimediaquery = groq`
*[_type == "multimedia"] | order(createdAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  image,
  title,
  excerpt,
  videoUrl,
  categories,
  createdAt
}
`;
// Get Site Config
export const configQuery = groq`
*[_type == "settings"] {
  ...,
  logoalt,
}
`;

export const homeQuery = groq`
*[_type == "home"][0] {
  ...,
}`;

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`;

// Paths for generateStaticParams
export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const catpathquery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`;
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;

// Get Posts by Authors
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get Posts by Category
export const postsbycatquery = groq`
*[_type == "post" && $slug in categories[]->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get top 5 categories
export const catquery = groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

export const searchquery = groq`*[_type == "post" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  mainImage,
  author->,
  categories[]->,
   title,
   slug
}`;

// Get all Authors
export const allauthorsquery = groq`
*[_type == "author"] {
 ...,
 'slug': slug.current,
 image,
}
`;
//get all professosr
export const allprofessorsquery = groq`
*[_type == "professor"] {
 ...,
 nombre,
 bio
}
`;
// get everything from sanity
// to test connection
export const getAll = groq`*[]`;
