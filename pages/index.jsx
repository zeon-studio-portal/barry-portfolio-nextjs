import Gallery from "@components/Gallery";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import AboutCeo from "@partials/AboutCeo";
import AdvisorBrands from "@partials/AdvisorBrands";
import Banner from "@partials/Banner";
import Testimonials from "@partials/Testimonials";
import WatchHighlights from "@partials/WatchHighlights";

const Home = ({ homepage, testimonials_page, aboutCeo, advisorBrands, gallery }) => {
  const { banner, founders } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={founders} />
      <AboutCeo aboutCeo={aboutCeo} />
      {/* TODO: Needs change */}
      <WatchHighlights />
      <Testimonials testimonials={testimonials_page} />
      <AdvisorBrands advisorBrands={advisorBrands} />
      {/* Keynotes */}
      {/* Panel Session */}
      {/* Life Event */}
      {/* Podcasts */}
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
  const advisorBrands = await getListPage("content/sections/advisor-brands.md");
  const gallery = await getListPage("content/sections/gallery.md");
  return {
    props: {
      homepage: homepage,
      testimonials_page: testimonials,
      aboutCeo: aboutCeo,
      advisorBrands: advisorBrands,
      gallery: gallery,
    },
  };
};
