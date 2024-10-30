import Gallery from "@components/Gallery";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import AboutCeo from "@partials/AboutCeo";
import AdvisorBrands from "@partials/AdvisorBrands";
import Banner from "@partials/Banner";
import KeynoteSession from "@partials/KeynoteSession";
import LiveEvents from "@partials/LiveEvents";
import PanelSession from "@partials/PannelSession";
import Podcasts from "@partials/Podcasts";
import Testimonials from "@partials/Testimonials";
import WatchHighlights from "@partials/WatchHighlights";

const Home = ({
  homepage,
  testimonials_page,
  aboutCeo,
  watchHighlights,
  advisorBrands,
  keynoteSessions,
  panelSessions,
  liveEvents,
  podcasts,
  gallery,
}) => {
  const { banner, founders } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={founders} />
      <AboutCeo aboutCeo={aboutCeo} />
      <WatchHighlights watchHighlights={watchHighlights} />
      <Testimonials testimonials={testimonials_page} />
      <AdvisorBrands advisorBrands={advisorBrands} />
      <KeynoteSession keynoteSessions={keynoteSessions} />
      <PanelSession panelSessions={panelSessions} />
      <LiveEvents liveEvents={liveEvents} />
      <Podcasts podcasts={podcasts} />
      {/* Interviews */}
      {/* Testimonial 2 Carousel */}
      {/* Speaker Biography */}
      <Gallery gallery={gallery} />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const testimonials = await getListPage("content/sections/testimonials.md");
  const aboutCeo = await getListPage("content/sections/about-ceo.md");
  const watchHighlights = await getListPage("content/sections/watch-highlights.md");
  const advisorBrands = await getListPage("content/sections/advisor-brands.md");
  const keynoteSessions = await getListPage("content/sections/keynote-sessions.md");
  const panelSessions = await getListPage("content/sections/panel-sessions.md");
  const liveEvents = await getListPage("content/sections/live-events.md");
  const podcasts = await getListPage("content/sections/podcasts.md");
  const gallery = await getListPage("content/sections/gallery.md");

  console.log("🪲 :", liveEvents);
  return {
    props: {
      homepage: homepage,
      testimonials_page: testimonials,
      aboutCeo: aboutCeo,
      watchHighlights: watchHighlights,
      advisorBrands: advisorBrands,
      keynoteSessions: keynoteSessions,
      panelSessions: panelSessions,
      liveEvents: liveEvents,
      podcasts: podcasts,
      gallery: gallery,
    },
  };
};
