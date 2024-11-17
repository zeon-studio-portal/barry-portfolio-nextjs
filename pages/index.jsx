import Gallery from "@components/Gallery";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import AboutBarry from "@partials/AboutBarry";
import Banner from "@partials/Banner";
import Biography from "@partials/Biography";
import Clients from "@partials/Clients";
import Highlights from "@partials/Highlights";
import KeynoteSpeaker from "@partials/KeynoteSpeaker";
import LiveEvents from "@partials/LiveEvents";
import MissionCarousel from "@partials/MissionCarousel";
import Panels from "@partials/Panels";
import Podcasts from "@partials/Podcasts";
import Retreats from "@partials/Retreats";
import Testimonials from "@partials/Testimonials";

const Home = ({
  homepage,
  testimonials,
  aboutBarry,
  highlights,
  clients,
  keynoteSpeaker,
  panels,
  liveEvents,
  podcasts,
  retreats,
  missionCarousel,
  biography,
  gallery,
}) => {
  const { banner, founders } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={founders} />
      <AboutBarry aboutBarry={aboutBarry} />
      <Highlights highlights={highlights} />
      <Testimonials testimonials={testimonials} />
      <Clients clients={clients} />
      <KeynoteSpeaker keynoteSpeaker={keynoteSpeaker} />
      <Panels panels={panels} />
      <LiveEvents liveEvents={liveEvents} />
      <Podcasts podcasts={podcasts} />
      <Retreats retreats={retreats} />
      <MissionCarousel missionCarousel={missionCarousel} />
      <Biography biography={biography} />
      <Gallery gallery={gallery} />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const testimonials = await getListPage("content/sections/testimonials.md");
  const aboutBarry = await getListPage("content/sections/about-barry.md");
  const highlights = await getListPage("content/sections/highlights.md");
  const clients = await getListPage("content/sections/clients.md");
  const keynoteSpeaker = await getListPage("content/sections/keynote-speaker.md");
  const panels = await getListPage("content/sections/panels.md");
  const liveEvents = await getListPage("content/sections/live-events.md");
  const podcasts = await getListPage("content/sections/podcasts.md");
  const retreats = await getListPage("content/sections/retreats.md");
  const missionCarousel = await getListPage("content/sections/mission.md");
  const biography = await getListPage("content/sections/biography.md");
  const gallery = await getListPage("content/sections/GALLERY.md");

  return {
    props: {
      homepage: homepage,
      testimonials: testimonials,
      aboutBarry: aboutBarry,
      highlights: highlights,
      clients: clients,
      keynoteSpeaker: keynoteSpeaker,
      panels: panels,
      liveEvents: liveEvents,
      podcasts: podcasts,
      retreats: retreats,
      missionCarousel: missionCarousel,
      biography: biography,
      gallery: gallery,
    },
  };
};
