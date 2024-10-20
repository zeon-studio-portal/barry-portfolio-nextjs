const advisorBrands = {
  label: "Advisor Brands Logo",
  name: "advisorBrands",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "advisor-brands",
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
      label: "Image Lists",
      name: "list",
      type: "object",
      list: true,
      fields: [
        {
          label: "Image Alt",
          name: "imageAlt",
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
          return { label: `${item?.imageAlt}` };
        },
      },
    },
  ],
};

export default advisorBrands;
