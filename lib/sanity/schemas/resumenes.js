export default {
  name: "resumenes",
  title: "Resumenes",
  type: "document",
  initialValue: () => ({
    createdAt: new Date().toISOString()
  }),
  fields: [
    {
      name: "title",
      title: "Nombre del Resumen",
      type: "string"
    },
    {
      name: "week",
      title: "Semana",
      type: "number"
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
      title: "title",
      week: "week"
    }
  }
};
