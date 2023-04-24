export default {
    name: "infoSection",
    title: "Info Section",
    type: "document",
    fields: [
        {
            name: "header",
            title: "Header",
            type: "string",
        },
        {
            name: "text",
            title: "Text",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
    ],
};
