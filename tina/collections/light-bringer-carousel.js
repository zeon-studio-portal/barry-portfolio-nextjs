const lightBringerCarousel = {
  label: "Light Bringer Carousel",
  name: "lightBringerCarousel",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "light-bringer-carousel",
  },
  fields: [
    {
      label: "Enable",
      name: "enable",
      type: "boolean",
    },
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      type: "object",
      name: "list",
      label: "Quotes",
      list: true,
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
        },
        {
          type: "string",
          name: "quote",
          label: "Quote",
        },
        {
          type: "string",
          name: "author",
          label: "Author",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.author}` };
        },
      },
    },
  ],
};

export default lightBringerCarousel;
