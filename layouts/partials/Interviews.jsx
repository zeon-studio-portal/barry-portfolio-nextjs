import AnimatedText from "@components/AnimatedText";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useRef, useState } from "react";

const interviews = ({ interviews }) => {
  const { enable, title, list } = interviews.frontmatter;
  const [activeVideo, setActiveVideo] = useState(list[0]);
  const largeScreenRef = useRef(null);

  return enable ? (
    <section className="section bg-dark-primary py-24 overflow-hidden  relative isolate">
      <div ref={largeScreenRef} className="container relative ">
        <div className="relative z-10 ">
          <div className="mb-14">
            <div data-aos="fade-up-sm">
              <AnimatedText
                tag="h2"
                className="mb-4 text-white font-semibold text-center lg:col-8 mx-auto"
                content={title}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10" data-aos="fade-up-sm" data-aos-delay="100">
            {/* BIG SCREEN */}
            <div className=" relative ">
              <div className="bg-dark-quaternary rounded-2xl overflow-hidden">
                <iframe
                  key={activeVideo.youtubeVideoId}
                  loading="lazy"
                  title="youtube video"
                  className="w-full aspect-video "
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeVideoId}?playlist=${activeVideo.youtubeVideoId}&autoplay=0&mute=0&loop=1&color=white&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&start=${activeVideo.youtubeVideoId || 0}`}
                  allowFullScreen
                ></iframe>
                <div className="py-6 px-8 ">
                  {markdownify(activeVideo.description, "h3", "mb-4 text-3xl text-white font-semibold  ")}
                </div>
              </div>
            </div>
            {/* HORIZONTAL LIST */}
            <div className="flex gap-7 overflow-x-scroll pb-4">
              {list.length &&
                list
                  .filter((item) => item.title !== activeVideo.title)
                  .map(
                    (item, index) =>
                      item.enable && (
                        <div
                          onClick={() => {
                            largeScreenRef.current.scrollIntoView({ behavior: "smooth" });
                            setActiveVideo(list.find((video) => video.title === item.title));
                          }}
                          key={item.title}
                          className="flex flex-col items-center cursor-pointer bg-dark-quaternary rounded-2xl min-w-[250px] overflow-hidden"
                          data-aos="fade-in"
                          data-aos-delay={index * 100}
                        >
                          {/* IMAGE */}
                          <div className="relative ">
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              width={200 * 2}
                              height={128 * 2}
                              className=" w-full object-cover aspect-square"
                            />
                            <div className="absolute inset-0 grid place-items-center">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="32" height="32" rx="16" fill="#00B2F5" fill-opacity="0.7" />
                                <path
                                  d="M13.5609 10.0611C13.5045 10.0218 13.4402 10.0007 13.3747 10C13.3091 9.99934 13.2446 10.0191 13.1876 10.0573C13.1306 10.0955 13.0833 10.1508 13.0503 10.2175C13.0174 10.2842 13 10.36 13 10.4372V20.5628C13 20.64 13.0174 20.7158 13.0503 20.7825C13.0833 20.8492 13.1306 20.9045 13.1876 20.9427C13.2446 20.9809 13.3091 21.0007 13.3747 21C13.4402 20.9993 13.5045 20.9782 13.5609 20.9389L20.8181 15.876C20.8735 15.8373 20.9194 15.7823 20.9513 15.7164C20.9832 15.6504 21 15.5759 21 15.5C21 15.4241 20.9832 15.3496 20.9513 15.2836C20.9194 15.2177 20.8735 15.1627 20.8181 15.124L13.5609 10.0611Z"
                                  fill="#FAFAFA"
                                  stroke="#FAFAFA"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          {/* CONTENT */}
                          <div className="py-4 px-8">
                            <p className="text-light-primary text-h6 font-medium  leading-tight">{item.title}</p>
                          </div>
                        </div>
                      )
                  )}
            </div>
          </div>
        </div>
        {/* Shapes */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/chakra.svg"
            draggable="false"
            alt=""
            className="absolute w-[160px] xl:w-[260px] top-[15%] right-0 translate-x-[55%] rotate-45 z-10"
          />
          <img
            src="/images/chakra.svg"
            draggable="false"
            alt=""
            className="absolute w-[160px] xl:w-[260px] top-[35%] left-0 -translate-x-[55%] z-10 rotate-45"
          />
          <img
            src="/images/chakra.svg"
            draggable="false"
            alt=""
            className="absolute w-[60px] top-[5%] right-0 translate-x-[55%] z-10 rotate-45"
          />
          <img
            src="/images/chakra.svg"
            draggable="false"
            alt=""
            className="absolute w-[60px] top-[30%] left-0 -translate-x-[110%] z-10 rotate-45"
          />
        </div>
      </div>
    </section>
  ) : null;
};

export default interviews;
