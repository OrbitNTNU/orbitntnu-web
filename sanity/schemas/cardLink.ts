export default {
  name: "cardLink",
  type: "document",
  title: "Card Link",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "url",
      type: "string",
      title: "Url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Card Background Image",
    },
  ],
};
