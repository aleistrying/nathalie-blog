export default {
  name: "professor",
  title: "Profesores",
  type: "document",
  fields: [
    {
      name: "nombre",
      title: "Nombre",
      type: "string"
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
