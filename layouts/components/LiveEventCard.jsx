import { useState } from "react";
import ModalVideo from "react-modal-video";
import ImageFallback from "./ImageFallback";

const LiveEventCard = ({ item }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="bg-dark-primary rounded-xl overflow-hidden">
        <div className="relative">
          <div className="absolute left-4 top-4 bg-white rounded-full text-red-500 flex items-center gap-2 px-4 py-1.5">
            <span className="text-base font-medium leading-none">Live</span>
            <span className="inline-block size-2 bg-red-500 rounded-full animate-pulse"></span>
          </div>
          <ImageFallback
            width={542}
            height={306}
            src={item.thumbnail}
            alt="Live Event"
            className="w-full max-h-[340px] object-cover "
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
        <div className="p-8">
          <h3 className="text-h5 font-medium mb-4">{item.title}</h3>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={isOpen}
        videoId={item.youtubeVideoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default LiveEventCard;
