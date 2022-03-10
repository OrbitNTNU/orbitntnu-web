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
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "adress",
      type: "string",
      title: "Adress",
    },
    {
      name: "room",
      type: "string",
      title: "Room",
    },
    {
      name: "postal",
      type: "string",
      title: "Postal code",
    },
    {
      name: "missionLinks",
      title: "Mission Links",
      type: "array",
      of: [{ type: "textLink" }],
    },
    {
      name: "otherLinks",
      title: "Other Links",
      type: "array",
      of: [{ type: "textLink" }],
    },
    {
      name: "soMeLinks",
      title: "SoMe Links",
      type: "array",
      of: [{ type: "soMeLink" }],
    },
  ],
};
