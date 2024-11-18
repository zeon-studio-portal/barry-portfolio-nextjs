import AnimatedText from "@components/AnimatedText";
import ImageFallback from "@components/ImageFallback";
import VimeoPlayer from "@components/VimeoPlayer";
import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

const Highlights = ({ highlights }) => {
  const { enable, title, subtitle, thumbnail, video_source_options } = highlights.frontmatter;
  const [isPlay, setIsPlay] = useState(false);

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
        <div className="relative" data-aos="fade-up-sm">
          {isPlay ? (
            // Play Video In this order for single video
            video_source_options.vimeoVideoId ? (
              <VimeoPlayer videoId={video_source_options.vimeoVideoId} />
            ) : (
              <YoutubePlayer videoId={video_source_options.youtubeVideoId} />
            )
          ) : (
            <div>
              <ImageFallback
                src={thumbnail}
                alt="Watch Highlights"
                width={800}
                height={450}
                className="rounded-xl size-full max-h-[600px] object-cover aspect-video"
              />
              <div className="video-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="video-play-btn" onClick={() => setIsPlay(true)} aria-label="Play">
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
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Highlights;
