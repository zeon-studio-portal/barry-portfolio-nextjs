const index = {
  label: "Homepage",
  name: "index",
  path: "content",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "_index",
  },
  fields: [
    {
      label: "Banner",
      name: "banner",
      type: "object",
      fields: [
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
          label: "Background Video Youtube ID",
          name: "background_youtube_video_id",
          type: "string",
        },
        {
          label: "Video Button",
          name: "video_button",
          type: "object",
          fields: [
            {
              label: "label",
              name: "label",
              type: "string",
            },
            {
              label: "youtube_id",
              name: "youtube_id",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default index;
