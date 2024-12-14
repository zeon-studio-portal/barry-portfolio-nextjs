import ArrowButton from "@components/ArrowButton";
import ImageFallback from "@components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const WhoIsBarry = ({ whoIsBarry }) => {
  const { enable, title, image, name, designation, linkedin, button } = whoIsBarry.frontmatter;
  return enable ? (
    <section className="bg-dark-secondary py-24 scroll-mt-5" id={whoIsBarry.slug}>
      <div className="container flex flex-col gap-16 lg:gap-20">
        {top_section.enable && (
          <div className="flex flex-col-reverse md:flex-row max-md:gap-10 items-center">
            <div className="md:w-[50%]">
              <div className="flex flex-col gap-8">
                <div>
                  <div data-aos="fade-up-sm">
                    {markdownify(
                      top_section.title,
                      "h3",
                      "mb-3 font-semi-bold [&>strong]:text-secondary-800 [&>strong]:font-semi-bold"
                    )}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(top_section.description, "p", "text-light-tertiary text-base-sm")}
                  </div>
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(top_section.name, "p", "text-h4 mb-2")}
                  {markdownify(top_section.designation, "p", "text-secondary-800")}

                  {top_section.linkedin.enable && (
                    <div className="flex items-center gap-2 mt-4">
                      <ImageFallback
                        className="size-4"
                        width={16}
                        height={16}
                        src={"/images/icons/linkedin.svg"}
                        alt="linkedin"
                      />
                      <Link target="_blank" href={top_section.linkedin.link}>
                        {top_section.linkedin.label}
                      </Link>
                    </div>
                  )}
                </div>
                {top_section.button.enable && (
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    <ArrowButton
                      link={top_section.button.link}
                      label={top_section.button.label}
                      className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-[50%] md:pl-20">
              <div data-aos="fade-up-sm">
                <ImageFallback
                  src={top_section.image}
                  alt={top_section.name}
                  width={445}
                  height={523}
                  className="w-full rounded-xl drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
        {bottom_section.enable && (
          <div className="flex flex-col-reverse md:flex-row-reverse max-md:gap-10  items-center">
            <div className="md:w-[50%] md:pl-20">
              <div className="flex flex-col gap-8">
                <div>
                  <div data-aos="fade-up-sm">
                    {markdownify(
                      bottom_section.title,
                      "h3",
                      "mb-3 font-semi-bold [&>strong]:text-secondary-800 [&>strong]:font-semi-bold"
                    )}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(bottom_section.description, "p", "text-light-tertiary text-base-sm")}
                  </div>
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(bottom_section.quote, "p", " mb-2 text-secondary-600")}
                  {markdownify(bottom_section.name, "p", "text-h5 mb-2")}
                </div>
                {bottom_section.button.enable && (
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    <ArrowButton
                      link={bottom_section.button.link}
                      label={bottom_section.button.label}
                      className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-[50%]">
              <div data-aos="fade-up-sm">
                <ImageFallback
                  src={bottom_section.image}
                  alt={bottom_section.name}
                  width={445}
                  height={523}
                  className="w-full rounded-xl drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  ) : null;
};

export default WhoIsBarry;
