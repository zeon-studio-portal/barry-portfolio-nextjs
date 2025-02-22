import { defineConfig } from "tinacms";
import biography from "./collections/biography";
import clients from "./collections/clients";
import gallery from "./collections/gallary";
import config from "./collections/global/config";
import menu from "./collections/global/menu";
import socials from "./collections/global/socials";
import highlights from "./collections/highlights";
import index from "./collections/index";
import keynoteSpeaker from "./collections/keynote-speaker";
import liveEvents from "./collections/live-events";
import mission from "./collections/mission";
import pages from "./collections/pages";
import panels from "./collections/panels";
import podcasts from "./collections/podcasts";
import retreats from "./collections/retreats";
import testimonials from "./collections/testimonials";
import whatToExpect from "./collections/what-to-expect";
import whoIsBarry from "./collections/who-is-barry";

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
    collections: [
      index,
      testimonials,
      whoIsBarry,
      whatToExpect,
      highlights,
      clients,
      keynoteSpeaker,
      panels,
      liveEvents,
      podcasts,
      retreats,
      mission,
      biography,
      gallery,
      pages,
      config,
      menu,
      socials,
    ],
  },
});
