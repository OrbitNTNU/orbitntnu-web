export default {
  name: "notFoundPage",
  type: "document",
  title: "Not Found page",
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
  ],
};
