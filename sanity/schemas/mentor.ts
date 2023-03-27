export default {
  name: "mentor",
  title: "Mentor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
      name: "thankYouText",
      title: "Thank you text",
      type: "text",
    }
  ],
};
