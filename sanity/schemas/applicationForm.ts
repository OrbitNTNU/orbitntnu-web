export default {
  name: "applicationform",
  title: "Application Form",
  type: "document",
  fields: [
    {
      name: "positions",
      title: "Available posistions",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
