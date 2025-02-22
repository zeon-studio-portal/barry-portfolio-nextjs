const highlights = {
  label: "Highlights",
  name: "highlights",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "highlights",
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
      label: "Thumbnail",
      name: "thumbnail",
      type: "image",
    },
    {
      label: "Media Link (Supports YouTube/Vimeo)",
      name: "mediaLink_supports_youtube_vimeo",
      type: "string",
    },
  ],
};

export default highlights;
