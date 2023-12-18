import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  type: "document",
  title: "Settings",
  icon: CogIcon,
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      title: "Redes Sociales",
      name: "social"
    },
    {
      title: "Logos",
      name: "logos",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Titulo de tu sitio web"
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      description:
        "El URL de tu sitio web, se utiliza para generar enlaces absolutos a tu sitio web. Ejemplo: https://www.example.com"
    }),
    defineField({
      name: "copyright",
      type: "string",
      title: "Copyright Name",
      description: "Enter company name to appear in footer after ©"
    }),
    defineField({
      title: "Logo Principal",
      description:
        "Sube un logo principal para tu sitio web. Preferible que sea tipo SVG",
      name: "logo",
      type: "image",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
          description: "Important for SEO and accessiblity."
        }
      ]
    }),

    defineField({
      title: "Logo Alternativo (optional)",
      description:
        " Sube un logo alternativo para tu sitio web. Preferible que sea tipo SVG, se usa para modo oscuro y eso ",
      name: "logoalt",
      type: "image",
      fieldset: "logos",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity."
        }
      ]
    }),

    defineField({
      name: "email",
      type: "string",
      title: "Email de soporte",
      validation: Rule =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false // Boolean to allow any value that does NOT match pattern
          }
        )
    }),

    defineField({
      name: "phone",
      type: "string",
      title: "Support Phone"
    }),

    defineField({
      name: "aboutMe",
      type: "text",
      title: "Descripción sobre mí",
      description: "Introduce una pequeña descripción sobre tí"
    }),

    // defineField({
    //   name: "w3ckey",
    //   type: "string",
    //   title: "Web3Forms Access Key",
    //   description:
    //     "Enter Access key obtained from web3forms.com. It is required to make the form work."
    // }),

    defineField({
      name: "social",
      type: "array",
      title: "Social Links",
      description: "Enter your Social Media URLs",
      validation: Rule => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "media",
              title: "Choose Social Media",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Linkedin", value: "linkedin" },
                  { title: "Youtube", value: "youtube" }
                ]
              }
            },
            {
              type: "url",
              name: "url",
              title: "Full Profile URL"
            }
          ],
          preview: {
            select: {
              title: "media",
              subtitle: "url"
            }
          }
        }
      ]
    }),

    defineField({
      title: "Meta Description",
      name: "description",
      fieldset: "metadata",
      type: "text",
      rows: 5,
      validation: Rule => Rule.min(20).max(200),
      description: "Enter SEO Meta Description"
    }),

    defineField({
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description:
        "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata"
    })
  ]
});
