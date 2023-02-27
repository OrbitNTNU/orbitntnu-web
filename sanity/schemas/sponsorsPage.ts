export default {
  name: "sponsorsPage",
  type: "document",
  title: "Sponsors page",
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
      rows: 4,
      title: "Top Text",
    },
    {
      name: "topImage",
      title: "Top Image",
      type: "image",
      description: "Top Image Shown On Page",
    },
    {
      name: "mainSponsorName",
      type: "string",
      title: "Main Sponsor Name",
    },
    {
      name: "mainSponsorDescription",
      type: "text",
      rows: 5,
      title: "Main Sponsor Description",
    },
    {
      name: "mainSponsorImage",
      title: "Main Sponsor Image",
      type: "mainSponsorImage",
    },
    {
      name: "mainSponsorLargeImage",
      title: "Main Sponsor Large Image",
      type: "mainSponsorLargeImage",
    },
    {
      name: "sponsors",
      title: "Sponsors",
      type: "array",
      of: [{ type: "sponsor" }],
    },
  ],
};
