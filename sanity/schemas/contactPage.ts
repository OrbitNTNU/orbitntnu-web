export default {
  name: "contactPage",
  type: "document",
  title: "Contact page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "fadedTitle",
      type: "string",
      title: "Faded Title",
      description: "Faded text on top of title",
    },
    {
      name: "topText",
      type: "text",
      rows: 4,
      title: "Top Text",
    },
    {
      name: "topImage",
      title: "Top Image",
      type: "image",
      description: "Top Image Shown On Page",
    },
    {
      name: "contentSectionTitle",
      type: "string",
      title: "Content Section Title",
    },
    {
      name: "contentSectionTitle2",
      type: "string",
      title: "Content Section Title 2",
    },
    {
      name: "contentSectionEmail",
      type: "string",
      title: "Content Section Email",
    },
  ],
};
