export default {
  name: "nextSatPage",
  type: "document",
  title: "NextSat page",
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
      name: "firstSectionTitle",
      title: "First Section Title",
      type: "string",
    },
    {
      name: "firstSectionText",
      title: "First Section Text",
      type: "string",
    },
    {
      name: "firstSectionImage",
      title: "Image",
      type: "image",
      description: "Image to the right of section 1",
      options: {
        hotspot: true,
      },
    },
    {
      name: "midImage",
      title: "Image",
      type: "image",
      description: "Image at the bottom of section 1",
      options: {
        hotspot: true,
      },
    },
  ],
};
