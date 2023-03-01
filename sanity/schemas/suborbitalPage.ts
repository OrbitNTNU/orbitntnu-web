export default {
  name: "suborbitalPage",
  type: "document",
  title: "Suborbital page",
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
      type: "text",
    },
    {
      name: "firstSectionImage",
      title: "First Section Image",
      type: "image",
      description: "Image shown to the right of section text",
    },
    {
      name: "midImage",
      title: "Image",
      type: "image",
    },
    {
      name: "secondSectionText1",
      title: "Second Section Text 1",
      type: "text",
    },
    {
      name: "secondSectionText2",
      title: "Second Section Text 2",
      type: "text",
    },
    {
      name: "secondSectionImage",
      title: "Second Section Image",
      type: "image",
      description: "Image shown to the left of section text",
    },
  ],
};
