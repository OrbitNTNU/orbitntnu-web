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
      name: "topText",
      type: "string",
      title: "Top Text",
    },
    {
      name: "launchDate",
      type: "datetime",
      title: "Launch Date",
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "specification" }],
    },
    {
      name: "specificationsImage",
      title: "Image",
      type: "image",
      description: "Image to the right of the specs",
      options: {
        hotspot: true,
      },
    },
    {
      name: "firstSectionTitle",
      title: "First Section Title",
      type: "string",
    },
    {
      name: "firstSectionText1",
      title: "First Section Text1",
      type: "text",
    },
    {
      name: "firstSectionText2",
      title: "First Section Text2",
      type: "text",
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
    {
      name: "secondSectionTitle",
      title: "Second Section Title",
      type: "string",
    },
    {
      name: "secondSectionText",
      title: "Second Section Text",
      type: "text",
    },
    {
      name: "secondSectionImage",
      title: "Image",
      type: "image",
      description: "Image to the right of section 2",
      options: {
        hotspot: true,
      },
    },
    {
      name: "thirdSectionTitle",
      title: "Third Section Title",
      type: "string",
    },
    {
      name: "thirdSectionText",
      title: "Third Section Text",
      type: "text",
    },
    {
      name: "thirdSectionImage",
      title: "Image",
      type: "image",
      description: "Image to the left of section 3",
      options: {
        hotspot: true,
      },
    },
    {
      name: "fourthSectionTitle",
      title: "Fourth Section Title",
      type: "string",
    },
    {
      name: "fourthSectionText",
      title: "Fourth Section Text",
      type: "text",
    },
    {
      name: "fourthSectionImage",
      title: "Image",
      type: "image",
      description: "Image to the right of section 4",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bottomImage",
      title: "Image",
      type: "image",
      description: "Image at the bottom of the page",
      options: {
        hotspot: true,
      },
    },
  ],
};
