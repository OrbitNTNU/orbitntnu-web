export default {
  name: "position",
  title: "Position",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
    {
      name: "positionLink",
      title: "PositionLink",
      type: "string",
    },
  ],
};
