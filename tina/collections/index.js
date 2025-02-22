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
          label: "Background YouTube Playlist ID",
          name: "background_youtube_playlist_id",
          type: "string",
        },
        {
          label: "Video Button",
          name: "video_button",
          type: "object",
          fields: [
            {
              label: "Enable",
              name: "enable",
              type: "boolean",
            },
            {
              label: "Label",
              name: "label",
              type: "string",
            },
            {
              label: "Media Link (Supports YouTube/Vimeo)",
              name: "mediaLink_supports_youtube_vimeo",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default index;
