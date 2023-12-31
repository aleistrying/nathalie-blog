export default {
  name: "multimedia",
  title: "Multimedia",
  type: "document",
  initialValue: () => ({
    createdAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string"
    },
    {
      name: "excerpt",
      title: "Extracto corto descriptivo",
      description:
        "Se usa en la vista previa de las imagenes y videos",
      type: "text",
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: "NSFW",
      type: "boolean",
      title:
        "Indicar si la imagen o el ideo es NSFW (Not Safe For Work)",
      description:
        "Habilita el blur en la imagen hasta que poner el mouse encima"
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Importate para SEO y accesibilidad."
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Inserta el link del video de youtube",
      validation: Rule =>
        Rule.uri({
          scheme: ["https"]
        })
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "createdAt",
      title: "Creado en",
      type: "datetime"
    }
  ],

  preview: {
    select: {
      title: "title",
      image: "image"
    }
  }
};
