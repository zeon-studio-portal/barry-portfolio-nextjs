const panelSessions = {
  label: "Panel Sessions",
  name: "panelSessions",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "panel-sessions",
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
          label: "Link",
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
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
  ],
};

export default panelSessions;
