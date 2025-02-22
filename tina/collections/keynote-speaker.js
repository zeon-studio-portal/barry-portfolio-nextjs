const keynoteSpeaker = {
  label: "Keynote Speakers",
  name: "keynoteSpeakers",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "keynote-speaker",
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
      label: "List",
      name: "list",
      type: "object",
      list: true,
      fields: [
        {
          label: "Badge",
          name: "badge",
          type: "string",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Media Link (Supports YouTube/Vimeo)",
          name: "mediaLink_supports_youtube_vimeo",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Image Alt Text",
          name: "imageAlt",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
          ui: { component: "textarea" },
        },
        {
          label: "Key Takeaways",
          name: "keytakeways",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "title",
              type: "string",
              ui: { component: "textarea" },
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title?.substring(0, 50)}${item?.title?.length > 50 ? "..." : ""}` };
            },
          },
        },
        {
          label: "Footer",
          name: "footer",
          type: "string",
          ui: { component: "textarea" },
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

export default keynoteSpeaker;
