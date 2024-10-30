import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useState } from "react";

const interviews = ({ interviews }) => {
  const { enable, title, list } = interviews.frontmatter;
  const [activeVideo, setActiveVideo] = useState(list[0]);

  return enable ? (
    <section className="section bg-dark-primary py-24">
      <div className="container">
        <div className="mb-14 ">
          {markdownify(title, "h2", "mb-4 text-white font-semibold text-center lg:col-8 mx-auto")}
        </div>
        <div className="flex flex-col gap-10">
          {/* BIG SCREEN */}
          <div>
            <iframe
              key={activeVideo.youtubeVideoId}
              loading="lazy"
              title="youtube video"
              className="w-full aspect-video mb-4"
              src={`https://www.youtube.com/embed/${activeVideo.youtubeVideoId}?playlist=${activeVideo.youtubeVideoId}&autoplay=0&mute=0&loop=1&color=white&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&start=${activeVideo.youtubeVideoId || 0}`}
              allowFullScreen
            ></iframe>
            {markdownify(activeVideo.title, "h3", "mb-4 text-white font-semibold  ")}
          </div>
          {/* HORIZONTAL LIST */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            {list.length &&
              list
                .filter((item) => item.title !== activeVideo.title)
                .map(
                  (item) =>
                    item.enable && (
                      <div
                        onClick={() => setActiveVideo(list.find((video) => video.title === item.title))}
                        key={item.title}
                        className="flex items-center gap-4 cursor-pointer"
                      >
                        {/* IMAGE */}
                        <div className="relative w-[35%]">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={200 * 2}
                            height={128 * 2}
                            className="rounded-md h-full object-cover aspect-video"
                          />
                          <div className="absolute left-2 top-2">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="24" rx="12" fill="#00B2F5" fill-opacity="0.7" />
                              <path
                                d="M9.56087 6.06114C9.50448 6.02178 9.44024 6.00069 9.37468 6.00002C9.30912 5.99934 9.24458 6.01911 9.18761 6.0573C9.13064 6.0955 9.08328 6.15077 9.05033 6.21749C9.01738 6.28421 9.00001 6.36001 9 6.43719V16.5628C9.00001 16.64 9.01738 16.7158 9.05033 16.7825C9.08328 16.8492 9.13064 16.9045 9.18761 16.9427C9.24458 16.9809 9.30912 17.0007 9.37468 17C9.44024 16.9993 9.50448 16.9782 9.56087 16.9389L16.8181 11.876C16.8735 11.8373 16.9194 11.7823 16.9513 11.7164C16.9832 11.6504 17 11.5759 17 11.5C17 11.4241 16.9832 11.3496 16.9513 11.2836C16.9194 11.2177 16.8735 11.1627 16.8181 11.124L9.56087 6.06114Z"
                                fill="#FAFAFA"
                                stroke="#FAFAFA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        {/* CONTENT */}
                        <div className=" w-[65%]">
                          <h4 className="text-black font-medium text-h6 md:text-h6 leading-tight">{item.title}</h4>
                        </div>
                      </div>
                    )
                )}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default interviews;
