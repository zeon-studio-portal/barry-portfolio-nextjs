import AnimatedText from "@components/AnimatedText";
import ImageFallback from "@components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const WatchHighlights = ({ watchHighlights }) => {
  const { enable, title, subtitle, thumbnail, youtubeVideoId } = watchHighlights.frontmatter;
  const [isOpen, setOpen] = useState(false);

  return enable ? (
    <div className="section py-24 bg-primary-600 scroll-mt-5" id={watchHighlights.slug}>
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
        <div className="relative" data-aos="fade-up-sm">
          <ImageFallback
            src={thumbnail}
            alt="Watch Highlights"
            width={800}
            height={450}
            className="rounded-xl w-full"
          />
          <div className="video-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="video-play-btn" onClick={() => setOpen(true)} aria-label="Play Video">
              <span className="video-play-btn-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline text-light-primary"
                >
                  <path
                    d="M18.6278 14.7363L9.49228 19.9566C8.15896 20.7185 6.5 19.7558 6.5 18.2201V12.9998V7.77953C6.5 6.24389 8.15897 5.28115 9.49228 6.04305L18.6278 11.2634C19.9714 12.0311 19.9714 13.9685 18.6278 14.7363Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          autoplay={1}
          isOpen={isOpen}
          videoId={youtubeVideoId}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  ) : null;
};

export default WatchHighlights;
