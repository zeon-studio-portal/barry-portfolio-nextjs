const advisorBrands = {
  label: "Live Events",
  name: "liveEvents",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "live-events",
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
      label: "Events List",
      name: "list",
      type: "object",
      list: true,
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
          label: "Thumbnail",
          name: "thumbnail",
          type: "image",
        },
        {
          label: "Youtube Video Id",
          name: "youtubeVideoId",
          type: "string",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
  ],
};

export default advisorBrands;
