export default {
  name: "aboutPage",
  type: "document",
  title: "About page",
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
      name: "header1",
      type: "string",
      title: "First Header",
    },
    {
      name: "text1",
      type: "text",
      rows: 6,
      title: "First Text Section",
    },
    {
      name: "image1",
      title: "First Image",
      type: "image",
      description: "Image shown next to text1",
    },
    {
      name: "image2",
      title: "Second Image",
      type: "image",
      description: "Large Image shown under section 1",
    },
    {
      name: "header2",
      type: "string",
      title: "Second Header",
    },
    {
      name: "text2",
      type: "text",
      rows: 5,
      title: "Second Text Section",
    },
    {
      name: "image3",
      title: "Third Image",
      type: "image",
      description: "Image shown next to text2",
    },
    {
      name: "header3",
      type: "string",
      title: "Third Header",
    },
    {
      name: "text3",
      type: "text",
      title: "Third Text Section",
    },
    {
      name: "image4",
      title: "Fourth Image",
      type: "image",
      description: "Image shown next to text3",
    },
  ],
};
