import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "swiper/css";
import VideoBG from "./VideoBG";

const Banner = ({ banner }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pb-16 pt-12 after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-dark-primary/70 after:content-[''] md:pt-8">
      <div className="relative z-30 flex flex-col justify-around min-h-[550px] sm:min-h-[700px]">
        <div className="container relative z-50 text-center">
          <div data-aos="fade-up">
            {markdownify(banner.title, "h1", "mb-8 text-6xl/none text-banner font-medium w-fit mx-auto")}
          </div>
          <div data-aos="fade-up" data-aos-delay="50">
            {markdownify(banner.subtitle, "p", "sm:max-w-[600px] mx-auto mb-10 md:text-xl")}
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="video-wrapper !aspect-auto">
            <button
              className="flex items-center gap-2 btn relative "
              onClick={() => setOpen(true)}
              aria-label="Play Video"
            >
              <div className="absolute inset-0 size-full ">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x=".5" y=".5" width="99%" height="98%" rx="11.5" stroke="url(#a)" />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="46.553"
                      y1="-8.5"
                      x2="182.645"
                      y2="104.907"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#0AA5FE" />
                      <stop offset=".255" stopColor="#02DDEB" />
                      <stop offset=".469" stopColor="#FDD13B" />
                      <stop offset=".729" stopColor="#FF8F81" />
                      <stop offset="1" stopColor="#C14ECF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
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

              <span className="">{banner.video_button.label}</span>
            </button>
          </div>
        </div>
        <div className="banner-image banner-image-left -z-10" data-aos="fade-right" data-aos-delay="350">
          <Image src="/images/chakra.svg" draggable={false} alt="supernova" width={550} height={550} />
        </div>
        <div className="banner-image banner-image-right -z-10" data-aos="fade-left" data-aos-delay="350">
          <Image src="/images/chakra.svg" draggable={false} alt="supernova" width={500} height={500} />
        </div>
      </div>
      <div className="video-background">
        <VideoBG background_youtube_video_id={banner.background_youtube_video_id} />
      </div>
      {banner.video_button.youtube_id ? (
        <ModalVideo
          channel="youtube"
          autoplay={1}
          isOpen={isOpen}
          videoId={banner.video_button.youtube_id}
          onClose={() => setOpen(false)}
        />
      ) : (
        <ModalVideo
          channel="vimeo"
          autoplay={1}
          isOpen={isOpen}
          videoId={banner.video_button.vimeo_id}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default Banner;
