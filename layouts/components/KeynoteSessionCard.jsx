import PortalModal from "@layouts/helpers/PortalModal";
import { markdownify } from "@lib/utils/textConverter";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import ImageFallback from "./ImageFallback";

const KeynoteSessionCard = ({ item, isEven }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    // Your custom logic here
    console.log("clicked outside");
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    // Your custom logic here
    console.log("clicked inside");
    setIsOpen(true);
  };

  useOnClickOutside(ref, handleCloseModal);

  return (
    <>
      <article
        className={`flex flex-col items-center rounded-2xl overflow-hidden ${isEven ? "bg-dark-tertiary" : "bg-dark-primary"}`}
      >
        <ImageFallback
          width={400}
          height={320}
          src={item.image}
          alt={item.imageAlt}
          className="w-full drop-shadow-lg"
        />
        <div className="p-4 sm:p-8 flex flex-col gap-6 justify-between items-start h-full">
          <div>
            {/* BADGE */}
            {markdownify(
              item.badge,
              "span",
              isEven
                ? "text-primary-800 text-lg bg-dark-secondary inline-block px-4 py-1 rounded-full mb-4"
                : "text-primary-800 text-lg bg-dark-tertiary inline-block px-4 py-1 rounded-full mb-4"
            )}

            {markdownify(
              item.title,
              "h3",
              "text-h6 xl:text-h3 [&>strong]:text-primary-800 font-medium mb-4 line-clamp-2"
            )}
            {markdownify(item.description, "p", "text-light-tertiary text-sm sm:text-base line-clamp-3")}
          </div>

          <button className="text-secondary-800 font-medium " onClick={handleOpenModal}>
            Learn More
          </button>
        </div>
      </article>

      {isOpen && (
        <PortalModal>
          <PortalModal.Close handleClose={handleCloseModal} />
          <div
            ref={ref}
            className="relative z-10 bg-dark-secondary rounded-xl py-10 px-8 max-w-[1100px] max-h-[90%] overflow-auto"
          >
            {item.youtubeVideoId ? (
              <iframe
                loading="lazy"
                title="background video"
                width={1200}
                height={600}
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${item.youtubeVideoId}?playlist=${item.youtubeVideoId}&autoplay=0&mute=0&loop=1&color=white&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&start=${item.youtubeVideoStartTime || 0}`}
              ></iframe>
            ) : (
              <ImageFallback
                width={400}
                height={320}
                src={item.image}
                alt={item.imageAlt}
                className="w-full drop-shadow-lg rounded-xl"
              />
            )}
            <div className="py-8 flex flex-col gap-6 justify-between items-start h-full">
              <div>
                {/* BADGE */}
                {markdownify(
                  item.badge,
                  "h3",
                  "text-primary-800 text-h6 font-medium bg-dark-tertiary inline-block px-4 py-1 rounded-full mb-4"
                )}

                {markdownify(item.title, "p", "text-h3 [&>strong]:text-primary-800 font-medium mb-4 ")}
                {markdownify(item.description, "p", "text-light-tertiary text-base text-light-tertiary/80")}

                {item.keytakeways.length && (
                  <div className="mt-8">
                    <p className="text-secondary-600 font-medium text-base-sm mb-6">Key Takeaways</p>
                    <div className="content">
                      <ul className="">
                        {item.keytakeways.map((keytakeway, index) => (
                          <li key={index} className="text-light-tertiary/80 text-base-sm">
                            {keytakeway.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PortalModal>
      )}
    </>
  );
};

export default KeynoteSessionCard;
