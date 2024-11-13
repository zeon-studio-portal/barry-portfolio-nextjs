import ArrowButton from "@components/ArrowButton";
import ImageFallback from "@components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";

const SpeakerBiography = ({ speakerBiography }) => {
  const { enable, title, bio, button, image, companyList } = speakerBiography.frontmatter;
  return enable ? (
    <section className="section bg-dark-primary py-24 scroll-mt-5" id={speakerBiography.slug}>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 mb-14">
          {/* LEFT SIDE */}
          <div className="lg:w-[60%]">
            <div data-aos="fade-up-sm">{markdownify(title, "h2", "mb-4 text-white font-semibold")}</div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(bio, "p", "text-[1rem] text-light-tertiary pb-4")}
            </div>
            {button.enable && (
              <div data-aos="fade-up-sm">
                <ArrowButton
                  link={button.link}
                  label={button.label}
                  className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl mt-4"}
                />
              </div>
            )}
          </div>
          {/* RIGHT SIDE */}
          <div className="lg:w-[40%] mx-auto">
            <ImageFallback
              width={450}
              height={530}
              src={image}
              alt={title}
              className="w-full max-w-[446px] max-h-[530px] h-full object-cover rounded-2xl"
              data-aos="fade-up-sm"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-8 lg:gap-x-24 gap-y-8 text-center">
            {companyList.length &&
              companyList.map((item, index) => (
                <ImageFallback
                  key={index}
                  width={250}
                  height={100}
                  src={item.image}
                  alt={item.company}
                  className="max-h-12 w-auto "
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default SpeakerBiography;
