const speakerBiography = {
  label: "Speaker Biography",
  name: "speakerBiography",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "speaker-biography",
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
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "object",
      name: "companyList",
      label: "Company Image List",
      list: true,
      fields: [
        {
          type: "string",
          name: "company",
          label: "Company Name",
        },
        {
          type: "image",
          name: "image",
          label: "Company Logo",
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

export default speakerBiography;
