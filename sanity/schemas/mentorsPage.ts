export default {
  name: "mentorsPage",
  type: "document",
  title: "Mentors page",
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
      type: "string",
      title: "Top Text",
    },
    {
      name: "topImage",
      title: "Top Image",
      type: "image",
      description: "Top Image Shown On Page",
    },
    {
      name: "mentors",
      title: "Mentors",
      type: "array",
      of: [{ type: "mentor" }],
    },
  ],
};
