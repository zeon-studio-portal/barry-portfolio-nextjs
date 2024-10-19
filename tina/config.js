import { defineConfig } from "tinacms";
import aboutCeo from "./collections/about-ceo";
import announcement from "./collections/global/announcement";
import config from "./collections/global/config";
import menu from "./collections/global/menu";
import index from "./collections/index";
import pages from "./collections/pages";
import testimonials from "./collections/testimonials";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD || // Netlify branch env
    "main", // default branch
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [announcement, index, pages, testimonials, aboutCeo, config, menu],
  },
});
