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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-y-11 md:gap-x-20 items-center ">
          {list.length &&
            list.map((item, index) => {
              const aosDelay = index * 50;
              return (
                <div key={index} className="justify-self-center" data-aos="fade-up-sm" data-aos-delay={aosDelay}>
                  <ImageFallback
                    width={300}
                    height={120}
                    src={item.image}
                    alt={item.imageAlt}
                    className=" max-h-12 w-auto "
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  ) : null;
};

export default AdvisorBrands;
