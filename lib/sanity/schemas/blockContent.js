import IframePreview from "./previews/iframe";
import TablePreview from "./previews/table";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        // {title: 'H1', value: 'h1'},
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" }
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" }
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "post" }
                  // other types you may want to link to
                ]
              }
            ]
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    {
      type: "image",
      options: { hotspot: true }
    },
    {
      type: "code"
    },
    {
      type: "object",
      name: "embed",
      title: "Embed",
      fields: [
        {
          name: "url",
          type: "url",
          description:
            "Coloca el URL para agregar el Embed \r\n(eg: https://youtube.com/embed/xxx or https://open.spotify.com/embed/track/xxxx)"
        },
        {
          name: "height",
          type: "number",
          description:
            "Coloca la altura del video en pixeles (eg: 315) o dejalo en blanco para que se ajuste automaticamente a 16:9"
        }
      ],
      components: {
        preview: IframePreview
      },
      preview: {
        select: { url: "url", height: "height" }
      }
    },
    {
      name: "tables",
      title: "Table",
      type: "object",
      fields: [
        {
          name: "table",
          title: "Add Table",
          description:
            "La tabla debe tener un encabezado y al menos una fila de datos.",
          type: "table"
        }
      ],
      components: {
        preview: TablePreview
      },
      preview: {
        select: { table: "table" }
      }
    }
  ]
};
