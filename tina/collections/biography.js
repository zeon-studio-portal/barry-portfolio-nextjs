const biography = {
  name: "biography",
  label: "Biography",
  path: "content/sections",
  match: {
    include: "biography",
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
      label: "Bio",
      name: "bio",
      type: "string",
      ui: { component: "textarea" },
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
      label: "Image",
      name: "image",
      type: "image",
    },
    {
      label: "Company List",
      name: "companyList",
      type: "object",
      list: true,
      fields: [
        {
          label: "Company",
          name: "company",
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
          return { label: `${item?.company}` };
        },
      },
    },
  ],
};

export default biography;
