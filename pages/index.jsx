import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import Banner from "@partials/Banner";
import Testimonials from "@partials/Testimonials";

const Home = ({ homepage, testimonials_page }) => {
  const { banner, founders } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={founders} />
      <Testimonials testimonials={testimonials_page} />
      {/* <AboutCeo aboutCeo={aboutCeo} /> */}
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const testimonials = await getListPage("content/sections/testimonials.md");
  const aboutCeo = await getListPage("content/sections/about-ceo.md");

  return {
    props: {
      homepage: homepage,
      testimonials_page: testimonials,
    },
  };
};
