import AnimatedText from "@components/AnimatedText";
import ImageFallback from "@components/ImageFallback";

const AdvisorBrands = ({ advisorBrands }) => {
  const { enable, title, list } = advisorBrands.frontmatter;

  return enable ? (
    <section className="section bg-dark-primary py-24">
      <div className="container">
        <div className="mb-20">
          <AnimatedText tag="h2" className="mb-4 font-medium text-center lg:col-8 mx-auto" content={title} />
        </div>
        <div className="flex flex-wrap justify-center xl:justify-between gap-11 ">
          {list.length &&
            list.map((item, index) => (
              <div key={index}>
                <ImageFallback
                  width={300}
                  height={120}
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-auto h-12 brightness-[.65]"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default AdvisorBrands;
