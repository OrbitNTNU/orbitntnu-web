export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "adress",
      type: "string",
      title: "Adress",
    },
    {
      name: "missionLinks",
      title: "Mission Links",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "otherLinks",
      title: "Other Links",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "soMeLinks",
      title: "SoMe Links",
      type: "array",
      of: [{ type: "soMeLink" }],
    },
  ],
};
