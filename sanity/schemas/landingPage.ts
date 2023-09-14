import cardLink from "./cardLink";

export default {
  name: "landingPage",
  type: "document",
  title: "Landing page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "topText",
      type: "string",
      title: "Top Text",
    },
    {
      name: "mobileTopImage",
      title: "Mobile Top Image",
      type: "image",
      description: "Top Image Shown On Mobile",
    },
    {
      name: "aboutSectionTitle",
      type: "string",
      title: "About Section Title",
    },
    {
      name: "aboutSectionText",
      type: "string",
      title: "About Section Text",
    },
    {
      name: "aboutSectionButtonText",
      type: "string",
      title: "About Section Button Text",
    },
    {
      name: "aboutSectionImage",
      title: "Image",
      type: "image",
      description: "Image underneath about section",
      options: {
        hotspot: true,
      },
    },
    {
      name: "newMembers",
      type: "boolean",
      title: "Show 'We are seeking new members' on front page",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "cardLink" }],
    },
  ],
};
