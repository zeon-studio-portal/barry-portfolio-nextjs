const whatToExpect = {
  label: "What to Expect",
  name: "whatToExpect",
  path: "content/sections/",
  match: {
    include: "what-to-expect",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
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
      label: "Image",
      name: "image",
      type: "image",
    },
    {
      label: "Quote",
      name: "quote",
      type: "string",
    },
    {
      label: "Name",
      name: "name",
      type: "string",
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
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      label: "Body",
      name: "body",
      isBody: true,
      type: "rich-text",
    },
  ],
};

export default whatToExpect;
