const socials = {
  label: "Socials",
  name: "social",
  path: "config",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "social",
  },
  fields: [
    {
      label: "Social Links",
      name: "social_media",
      list: true,
      type: "object",
      fields: [
        {
          label: "Name",
          name: "name",
          type: "string",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
        {
          label: "Icon",
          name: "icon",
          type: "image",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name}` };
        },
      },
    },
  ],
};

export default socials;
