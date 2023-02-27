export default {
  name: "joinPage",
  type: "document",
  title: "Join page",
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
      rows: 3,
      title: "Top Text",
    },
    {
      name: "topImage",
      title: "Top Image",
      type: "image",
      description: "Top Image Shown On Page",
    },
    {
      name: "sectionTitle",
      type: "string",
      title: "Section Title",
      description: "Text shown above positions",
    },
    {
      name: "noPositionsText",
      type: "string",
      title: "No Positions Text",
      description: "Text shown when there are no available positions",
    },
  ],
};
