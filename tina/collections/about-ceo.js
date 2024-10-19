const aboutCeo = {
  label: "About CEO",
  name: "about_ceo",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "about-ceo",
  },
  fields: [
    {
      label: "Enable",
      name: "enable",
      type: "boolean",
    },
    {
      label: "Top Section",
      name: "top_section",
      type: "object",
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
          label: "Description",
          name: "description",
          type: "string",
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
          label: "LinkedIn URL",
          name: "linkedin",
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
      ],
    },
    {
      label: "Bottom Section",
      name: "bottom_section",
      type: "object",
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
          label: "Description",
          name: "description",
          type: "string",
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
      ],
    },
  ],
};

export default aboutCeo;
