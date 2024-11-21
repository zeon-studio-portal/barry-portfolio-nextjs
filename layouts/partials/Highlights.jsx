import AnimatedText from "@components/AnimatedText";
import ReactPlayerWrapperV2 from "@components/ReactPlayerWrapperV2";
import { markdownify } from "@lib/utils/textConverter";

const Highlights = ({ highlights }) => {
  const { enable, title, subtitle, thumbnail, mediaLink_supports_youtube_vimeo } = highlights.frontmatter;

  return enable ? (
    <div className="section py-24 bg-primary-600 scroll-mt-5" id={highlights.slug}>
      <div className="container">
        <div className="mb-14 text-center text-dark-primary">
          <div data-aos="fade-up-sm">
            <AnimatedText tag="h2" className="mb-4 font-semibold text-center lg:col-8 mx-auto" content={title} />
          </div>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            {markdownify(subtitle, "p", "text-lg font-medium text-dark-quaternary/80")}
          </div>
        </div>

        {/* VIDEO THUMBNAIL */}
        <div className="relative" data-aos="fade-up-sm" suppressHydrationWarning={true}>
          <ReactPlayerWrapperV2
            url={mediaLink_supports_youtube_vimeo}
            thumbnail={thumbnail}
            autoplay={false}
            className="rounded-xl overflow-hidden"
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default Highlights;
