import PortalModal from "@layouts/helpers/PortalModal";
import { markdownify } from "@lib/utils/textConverter";
import { memo, useCallback, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import ImageFallback from "./ImageFallback";
import PlayButton from "./PlayButton";
import ReactPlayerWrapper from "./ReactPlayerWrapper";

const LearnMoreButton = memo(({ onClick }) => (
  <button className="text-secondary-800 font-medium flex items-center gap-2" onClick={onClick} aria-label="learn more">
    <span>Learn More</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_812_2341)">
        <path
          d="M15.54 24H2.46C1.80781 23.9992 1.18256 23.7398 0.721394 23.2786C0.260227 22.8174 0.000793901 22.1922 0 21.54L0 8.46C0.000793901 7.80781 0.260227 7.18256 0.721394 6.72139C1.18256 6.26023 1.80781 6.00079 2.46 6H15.54C16.1922 6.00079 16.8174 6.26023 17.2786 6.72139C17.7398 7.18256 17.9992 7.80781 18 8.46V21.54C17.9992 22.1922 17.7398 22.8174 17.2786 23.2786C16.8174 23.7398 16.1922 23.9992 15.54 24ZM2.46 8C2.39941 7.99933 2.33929 8.01077 2.28318 8.03365C2.22706 8.05653 2.17609 8.09039 2.13324 8.13324C2.09039 8.17609 2.05653 8.22706 2.03365 8.28318C2.01077 8.33929 1.99933 8.39941 2 8.46V21.54C1.99933 21.6006 2.01077 21.6607 2.03365 21.7168C2.05653 21.7729 2.09039 21.8239 2.13324 21.8668C2.17609 21.9096 2.22706 21.9435 2.28318 21.9663C2.33929 21.9892 2.39941 22.0007 2.46 22H15.54C15.6006 22.0007 15.6607 21.9892 15.7168 21.9663C15.7729 21.9435 15.8239 21.9096 15.8668 21.8668C15.9096 21.8239 15.9435 21.7729 15.9663 21.7168C15.9892 21.6607 16.0007 21.6006 16 21.54V8.46C16.0007 8.39941 15.9892 8.33929 15.9663 8.28318C15.9435 8.22706 15.9096 8.17609 15.8668 8.13324C15.8239 8.09039 15.7729 8.05653 15.7168 8.03365C15.6607 8.01077 15.6006 7.99933 15.54 8H2.46Z"
          fill="currentColor"
        />
        <path
          d="M3.99993 21C3.80237 20.9989 3.60953 20.9394 3.44576 20.8289C3.28199 20.7184 3.15463 20.5618 3.07974 20.379C3.00486 20.1962 2.98581 19.9953 3.025 19.8016C3.06418 19.608 3.15985 19.4303 3.29993 19.291L9.01893 13.6C9.11146 13.5048 9.22202 13.4289 9.34416 13.3769C9.4663 13.3248 9.59758 13.2977 9.73035 13.2969C9.86311 13.2961 9.99469 13.3218 10.1174 13.3724C10.2402 13.4231 10.3516 13.4976 10.4452 13.5918C10.5388 13.6859 10.6127 13.7978 10.6627 13.9208C10.7126 14.0438 10.7375 14.1755 10.736 14.3083C10.7345 14.441 10.7066 14.5722 10.6539 14.694C10.6011 14.8159 10.5247 14.926 10.4289 15.018L4.70493 20.709C4.5176 20.8953 4.26415 20.9999 3.99993 21Z"
          fill="currentColor"
        />
        <path
          d="M10 20C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V15H5C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13H10C10.2652 13 10.5196 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14V19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20Z"
          fill="currentColor"
        />
        <path
          d="M21.54 18H17C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V8.46C16.0007 8.39941 15.9892 8.33929 15.9663 8.28318C15.9435 8.22706 15.9096 8.17609 15.8668 8.13324C15.8239 8.09039 15.7729 8.05653 15.7168 8.03365C15.6607 8.01077 15.6006 7.99933 15.54 8H7C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V2.46C6.00079 1.80781 6.26023 1.18256 6.72139 0.721394C7.18256 0.260227 7.80781 0.000793901 8.46 0H21.54C22.1922 0.000793901 22.8174 0.260227 23.2786 0.721394C23.7398 1.18256 23.9992 1.80781 24 2.46V15.54C23.9992 16.1922 23.7398 16.8174 23.2786 17.2786C22.8174 17.7398 22.1922 17.9992 21.54 18ZM18 16H21.54C21.6006 16.0007 21.6607 15.9892 21.7168 15.9663C21.7729 15.9435 21.8239 15.9096 21.8668 15.8668C21.9096 15.8239 21.9435 15.7729 21.9663 15.7168C21.9892 15.6607 22.0007 15.6006 22 15.54V2.46C22.0007 2.39941 21.9892 2.33929 21.9663 2.28318C21.9435 2.22706 21.9096 2.17609 21.8668 2.13324C21.8239 2.09039 21.7729 2.05653 21.7168 2.03365C21.6607 2.01077 21.6006 1.99933 21.54 2H8.46C8.39941 1.99933 8.33929 2.01077 8.28318 2.03365C8.22706 2.05653 8.17609 2.09039 8.13324 2.13324C8.09039 2.17609 8.05653 2.22706 8.03365 2.28318C8.01077 2.33929 7.99933 2.39941 8 2.46V6H15.54C16.1922 6.00079 16.8174 6.26023 17.2786 6.72139C17.7398 7.18256 17.9992 7.80781 18 8.46V16Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_812_2341">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </button>
));

const KeyTakeaways = memo(({ takeaways }) => (
  <div className="mt-8">
    <p className="text-secondary-600 font-medium text-base-sm mb-6">Key Takeaways</p>
    <div className="content">
      <ul>
        {takeaways.map((keytakeway, index) => (
          <li key={index} className="text-light-tertiary/80 text-base-sm">
            {keytakeway.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
));

const KeynoteSessionCard = ({ item, isEven, aosDelay }) => {
  const videoPopupRef = useRef(null);
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseVideoModal = useCallback(() => {
    setVideoPopupOpen(false);
  }, []);

  const handleOpenVideoPopup = useCallback(() => {
    setVideoPopupOpen(true);
  }, []);

  useOnClickOutside(modalRef, handleCloseModal);
  useOnClickOutside(videoPopupRef, handleCloseVideoModal);

  return (
    <>
      <article
        className={`flex flex-col items-center rounded-2xl overflow-hidden relative ${
          isEven ? "bg-dark-primary" : "bg-dark-tertiary"
        }`}
        data-aos="fade-up-sm"
        data-aos-delay={aosDelay}
      >
        <div className="absolute top-4 right-4 z-10">
          {markdownify(
            item.badge,
            "span",
            "text-primary-800 text-lg bg-dark-tertiary inline-block px-4 py-1 rounded-full mb-4"
          )}
        </div>

        <div className="relative w-full">
          <ImageFallback
            width={550}
            height={320}
            src={item.image}
            alt={item.imageAlt}
            className="w-full aspect-[16/10] object-cover drop-shadow-lg"
          />

          {item.mediaLink_supports_youtube_vimeo && (
            <div className="video-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <PlayButton onClick={handleOpenVideoPopup} />
            </div>
          )}
        </div>

        <div className="p-4 sm:p-8 flex flex-col gap-6 justify-between items-start h-full">
          <div>
            <button onClick={handleOpenModal} className="text-left">
              {markdownify(
                item.title,
                "h3",
                "text-h5 xl:text-h3_sm [&>strong]:text-dark-primary [&>strong]:bg-secondary-800 [&>strong]:rounded-md [&>strong]:inline-block [&>strong]:mr-2 [&>strong]:h-[35px] [&>strong]:leading-[38px] [&>strong]:px-2 font-medium mb-4 line-clamp-2"
              )}
            </button>
            {markdownify(item.description, "p", "text-light-tertiary text-sm sm:text-[1rem] line-clamp-3")}
          </div>

          <LearnMoreButton onClick={handleOpenModal} />
        </div>
      </article>

      {isOpen && (
        <PortalModal>
          <PortalModal.Close handleClose={handleCloseModal} />
          <div
            ref={modalRef}
            className="relative z-10 bg-dark-secondary rounded-xl py-10 px-8 max-w-[1100px] max-h-[90%] overflow-auto"
          >
            {item.mediaLink_supports_youtube_vimeo ? (
              <ReactPlayerWrapper
                url={item.mediaLink_supports_youtube_vimeo}
                playing={false}
                customThumbnail={item.image}
              />
            ) : (
              // Fallback image if no video link is provided
              <ImageFallback
                width={400}
                height={320}
                src={item.image}
                alt={item.imageAlt}
                className="w-full drop-shadow-lg rounded-xl aspect-video object-cover"
              />
            )}

            <div className="py-8 flex flex-col gap-6 justify-between items-start h-full">
              <div>
                {markdownify(
                  item.badge,
                  "h3",
                  "text-primary-800 text-h6 font-medium bg-dark-tertiary inline-block px-4 py-1 rounded-full mb-4"
                )}

                {markdownify(item.title, "p", "text-h3 [&>strong]:text-primary-800 font-medium mb-4")}
                {markdownify(item.description, "p", "text-base text-light-tertiary/80")}

                {item.keytakeways?.length > 0 && <KeyTakeaways takeaways={item.keytakeways} />}
              </div>
            </div>
          </div>
        </PortalModal>
      )}

      {isVideoPopupOpen && (
        <PortalModal>
          <PortalModal.Close handleClose={handleCloseVideoModal} />
          <div className="w-[800px] mx-auto" ref={videoPopupRef}>
            <ReactPlayerWrapper
              customThumbnail={item.image}
              url={item.mediaLink_supports_youtube_vimeo}
              playing={true}
            />
          </div>
        </PortalModal>
      )}
    </>
  );
};

export default memo(KeynoteSessionCard);
