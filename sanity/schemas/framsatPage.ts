export default {
  name: "framsatPage",
  type: "document",
  title: "Framsat page",
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
      name: "shortTopText",
      type: "string",
      title: "Short Top Text",
    },
    {
      name: "launchDate",
      type: "datetime",
      title: "Launch Date",
    },
    {
      name: "missionTitle",
      type: "string",
      title: "Mission Title",
    },
    {
      name: "missionTextLeft",
      type: "string",
      title: "Mission Text Left",
    },
    {
      name: "missionTextRight",
      type: "string",
      title: "Mission Text Right",
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
  ],
};
