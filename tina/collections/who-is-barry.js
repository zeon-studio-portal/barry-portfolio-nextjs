const whoIsBarry = {
  label: "Who is Barry",
  name: "whoIsBarry",
  path: "content/sections",
  match: {
    include: "who-is-barry",
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
      label: "Name",
      name: "name",
      type: "string",
    },
    {
      label: "Designation",
      name: "designation",
      type: "string",
    },
    {
      label: "LinkedIn",
      name: "linkedin",
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

export default whoIsBarry;
