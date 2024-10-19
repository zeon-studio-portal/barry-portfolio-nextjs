import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "swiper/css";

const Banner = ({ banner }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pb-16 pt-12 after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-dark-primary/70 after:content-[''] md:pt-8">
      <div className="relative z-30 flex flex-col justify-around sm:min-h-[700px]">
        <div className="container relative z-50 text-center">
          <div data-aos="fade-up">
            {markdownify(banner.title, "h1", "mb-8 text-6xl/none text-banner font-medium w-fit mx-auto")}
          </div>
          <div data-aos="fade-up" data-aos-delay="50">
            {markdownify(banner.subtitle, "p", "sm:max-w-[600px] mx-auto mb-10 md:text-xl")}
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="video-wrapper">
            <button
              className="flex items-center gap-2 btn btn-border-gradient"
              onClick={() => setOpen(true)}
              aria-label="Play Video"
            >
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

              <span className="min-w-max">{banner.video_button.label}</span>
            </button>
          </div>

          <ModalVideo
            channel="youtube"
            autoplay={1}
            isOpen={isOpen}
            videoId={banner.video_button.youtube_id}
            onClose={() => setOpen(false)}
          />
        </div>

        <div className="banner-image banner-image-left -z-10" data-aos="fade-right" data-aos-delay="350">
          <Image src="/images/chakra.svg" alt="supernova" width={550} height={550} />
        </div>
        <div className="banner-image banner-image-right -z-10" data-aos="fade-left" data-aos-delay="350">
          <Image src="/images/chakra.svg" alt="supernova" width={500} height={500} />
        </div>
      </div>
      <div className="absolute inset-0 ">
        <Image
          src={banner.background_image}
          className="size-full object-cover"
          alt="supernova"
          width={1440}
          height={900}
        />
      </div>
    </section>
  );
};

export default Banner;
