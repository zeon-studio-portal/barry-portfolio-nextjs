const gallery = {
  label: "Gallery",
  name: "gallery",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "GALLERY",
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
      label: "Gallery Image Width",
      name: "galleryImageWidth",
      type: "string",
    },
    {
      label: "Animation Speed for Top",
      name: "animationSpeedForTop",
      type: "string",
    },
    {
      label: "Animation Speed for Bottom",
      name: "animationSpeedForBottom",
      type: "string",
    },
    {
      label: "Top Images List",
      name: "topList",
      type: "object",
      list: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Alt Text",
          name: "alt",
          type: "string",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.alt || "Gallery Image"}` };
        },
      },
    },
    {
      label: "Bottom Images List",
      name: "bottomList",
      type: "object",
      list: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Alt Text",
          name: "alt",
          type: "string",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.alt || "Gallery Image"}` };
        },
      },
    },
  ],
};

export default gallery;
