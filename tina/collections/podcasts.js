const podcasts = {
  label: "Podcasts",
  name: "podcasts",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "podcasts",
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
      type: "object",
      name: "list",
      label: "Podcast List",
      list: true,
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
        },
        {
          type: "string",
          name: "head",
          label: "Head",
        },
        {
          type: "string",
          name: "title",
          label: "Podcast Title",
        },
        {
          type: "image",
          name: "thumbnail",
          label: "Thumbnail",
        },
        {
          type: "string",
          name: "youtubeVideoId",
          label: "YouTube Video ID",
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

export default podcasts;
