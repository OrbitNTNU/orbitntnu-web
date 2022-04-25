export default {
  name: "sponsor",
  type: "document",
  title: "Sponsor",
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
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Partner", value: "partner" },
          { title: "Rank 1", value: "rank1" },
          { title: "Rank 2", value: "rank2" },
        ],
      },
    },
    {
      name: "sponsor",
      title: "Sponsor",
      type: "mainSponsorImage",
    },
  ],
};
