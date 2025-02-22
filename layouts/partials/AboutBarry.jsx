import ArrowButton from "@components/ArrowButton";
import ImageFallback from "@components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

const AboutBarry = ({ whoIsBarry, whatToExpect }) => {
  const whoIsBarryFrontmatter = whoIsBarry.frontmatter;
  const whatToExpectFrontmatter = whatToExpect.frontmatter;
  const enableSection = whoIsBarryFrontmatter.enable || whatToExpectFrontmatter.enable;

  const descriptionContentStyles =
    "content prose-p:!text-light-tertiary prose-p:!text-base-sm prose-li:!text-light-tertiary prose-li:!text-base-sm";
  return enableSection ? (
    <section className="bg-dark-secondary py-24 scroll-mt-5" id={whoIsBarry.slug}>
      <div className="container flex flex-col gap-16 lg:gap-20">
        {whoIsBarryFrontmatter.enable && (
          <div className="flex flex-col-reverse md:flex-row max-md:gap-10 ">
            <div className="md:w-[50%]">
              <div className="flex flex-col gap-8">
                <div>
                  <div data-aos="fade-up-sm">
                    {markdownify(
                      whoIsBarryFrontmatter.title,
                      "h3",
                      "mb-3 font-semi-bold [&>strong]:text-secondary-800 [&>strong]:font-semi-bold"
                    )}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    <div className={descriptionContentStyles}>
                      <MDXRemote {...whoIsBarry.mdxContent} components={shortcodes} />
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(whoIsBarryFrontmatter.name, "p", "text-h4 mb-2")}

                  {markdownify(whoIsBarryFrontmatter.designation, "p", "text-secondary-800")}

                  {whoIsBarryFrontmatter.linkedin.enable && (
                    <div className="flex items-center gap-2 mt-4">
                      <ImageFallback
                        className="size-4"
                        width={16}
                        height={16}
                        src={"/images/icons/linkedin.svg"}
                        alt="linkedin"
                      />
                      <Link target="_blank" href={whoIsBarryFrontmatter.linkedin.link}>
                        {whoIsBarryFrontmatter.linkedin.label}
                      </Link>
                    </div>
                  )}
                </div>
                {whoIsBarryFrontmatter.button.enable && (
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    <ArrowButton
                      link={whoIsBarryFrontmatter.button.link}
                      label={whoIsBarryFrontmatter.button.label}
                      className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-[50%] md:pl-20">
              <div data-aos="fade-up-sm">
                <ImageFallback
                  src={whoIsBarryFrontmatter.image}
                  alt={whoIsBarryFrontmatter.name}
                  width={445}
                  height={523}
                  className="w-full rounded-xl drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
        {whatToExpectFrontmatter.enable && (
          <div className="flex flex-col-reverse md:flex-row-reverse max-md:gap-10 " id={whatToExpect.slug}>
            <div className="md:w-[50%] md:pl-20">
              <div className="flex flex-col gap-8">
                <div>
                  <div data-aos="fade-up-sm">
                    {markdownify(
                      whatToExpectFrontmatter.title,
                      "h3",
                      "mb-3 font-semi-bold [&>strong]:text-secondary-800 [&>strong]:font-semi-bold"
                    )}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    <div className={descriptionContentStyles}>
                      <MDXRemote {...whatToExpect.mdxContent} components={shortcodes} />
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(whatToExpectFrontmatter.quote, "p", " mb-2 text-secondary-600")}
                  {markdownify(whatToExpectFrontmatter.name, "p", "text-h5 mb-2")}
                </div>
                {whatToExpectFrontmatter.button.enable && (
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    <ArrowButton
                      link={whatToExpectFrontmatter.button.link}
                      label={whatToExpectFrontmatter.button.label}
                      className={"bg-secondary-600 text-dark-primary px-5 py-3 rounded-xl"}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-[50%]">
              <div data-aos="fade-up-sm">
                <ImageFallback
                  src={whatToExpectFrontmatter.image}
                  alt={whatToExpectFrontmatter.name}
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

export default AboutBarry;
