export default {
  name: "bitacoras",
  title: "Trabajos",
  type: "document",
  initialValue: () => ({
    createdAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Nombre de la bitácora",
      type: "string"
    },
    {
      name: "file",
      title: "Archivo PDF",
      type: "file"
    },
    {
      name: "createdAt",
      title: "Fecha de creación",
      type: "datetime"
    }
  ],

  preview: {
    select: {
      title: "title"
    }
  }
};
