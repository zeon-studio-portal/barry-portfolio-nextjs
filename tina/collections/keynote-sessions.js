const keynoteSessions = {
  label: "Keynote Sessions",
  name: "keynoteSessions",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "keynote-sessions",
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
      label: "Keynote Sessions",
      name: "list",
      type: "object",
      list: true,
      fields: [
        {
          label: "Badge",
          name: "badge",
          type: "string",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Youtube Video ID",
          name: "youtubeVideoId",
          type: "string",
        },
        {
          label: "Youtube Video Start Time",
          name: "youtubeVideoStartTime",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Image Alt",
          name: "imageAlt",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
        {
          label: "Key Takeways",
          name: "keytakeways",
          type: "object",
          list: true,
          fields: [
            {
              label: "Title",
              name: "title",
              type: "string",
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
        {
          label: "Footer",
          name: "footer",
          type: "string",
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

export default keynoteSessions;
