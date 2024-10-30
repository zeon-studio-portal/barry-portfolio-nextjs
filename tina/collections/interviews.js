const podcasts = {
  label: "Interviews",
  name: "interviews",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "interviews",
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
      label: "Interview List",
      list: true,
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "Enable",
        },
        {
          type: "string",
          name: "title",
          label: "Interview Title",
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
