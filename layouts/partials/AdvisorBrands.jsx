import AnimatedText from "@components/AnimatedText";

const AdvisorBrands = ({ advisorBrands }) => {
  console.log("🪲 :", advisorBrands.frontmatter);
  const { enable, title, list } = advisorBrands.frontmatter;

  return enable ? (
    <section className="section bg-dark-primary py-24">
      <div className="container">
        <AnimatedText tag="h2" className="mb-4 font-medium" content={title} />
      </div>
    </section>
  ) : null;
};

export default AdvisorBrands;
