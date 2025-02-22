const clients = {
  label: "Clients Logo",
  name: "clients",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "clients",
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
      label: "Image Lists",
      name: "list",
      type: "object",
      list: true,
      fields: [
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
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
  ],
};

export default clients;
