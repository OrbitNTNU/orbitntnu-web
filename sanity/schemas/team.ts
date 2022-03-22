export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "members",
      title: "Members",
      type: "array",
      of: [{ type: "member" }],
    },
  ],
};
