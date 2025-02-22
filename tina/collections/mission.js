const mission = {
  name: "mission",
  label: "Mission Sliders",
  path: "content/sections",
  match: {
    include: "mission",
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
          label: "Enable",
          name: "enable",
          type: "boolean",
        },
        {
          label: "Quote",
          name: "quote",
          type: "string",
          ui: { component: "textarea" },
        },
        {
          label: "Author",
          name: "author",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Subtitle",
          name: "subtitle",
          type: "string",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.author}` };
        },
      },
    },
  ],
};
export default mission;
