const panels = {
  label: "Panels",
  name: "panels",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "panels",
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
          label: "Head",
          name: "head",
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
          label: "Description",
          name: "description",
          type: "string",
          ui: { component: "textarea" },
        },
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Button",
          name: "button",
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
          ],
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

export default panels;
