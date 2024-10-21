const watchHighlights = {
  label: "Watch Highlights",
  name: "watchHighlights",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "watch-highlights",
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
      label: "Youtube Video ID",
      name: "youtubeVideoId",
      type: "string",
    },
  ],
};

export default watchHighlights;
