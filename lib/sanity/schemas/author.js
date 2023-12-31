export default {
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    {
      name: "nombre",
      title: "Nombre",
      type: "string"
    },
    {
      name: "slug",
      title: "Ficha (para el URL)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "nombre",
      media: "image"
    }
  }
};
