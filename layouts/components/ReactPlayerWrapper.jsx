import { useState } from "react";
import ReactPlayer from "react-player";
import ImageFallback from "./ImageFallback";

const ReactPlayerWrapper = ({ url, playing: shouldAutoPlay = true, customThumbnail = null, className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(shouldAutoPlay);
  const [isPlayButtonPressed, setIsPlayButtonPressed] = useState(false);

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      {isPlayButtonPressed || playing ? (
        <>
          {loading && (
            <>
              <div role="status" className="grid place-items-center w-full absolute inset-0">
                <svg
                  aria-hidden="true"
                  class="size-20 text-dark-primary/50 animate-spin dark:text-gray-600 fill-primary-800"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>

              {customThumbnail && (
                <ImageFallback
                  width={600}
                  height={350}
                  src={customThumbnail}
                  alt="Live Event"
                  className="w-full object-cover aspect-video absolute inset-0 -z-10"
                />
              )}
            </>
          )}

          <ReactPlayer
            url={url}
            playing={playing}
            controls
            style={{ aspectRatio: "16 / 9" }}
            width={"100%"}
            height={"100%"}
            onReady={() => setLoading(false)}
            onStart={() => setLoading(false)}
          />
        </>
      ) : (
        <div>
          <ImageFallback
            width={600}
            height={350}
            src={customThumbnail}
            alt="Live Event"
            className="w-full object-cover aspect-video "
          />
          <div className="video-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="video-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                className="video-play-btn"
                onClick={() => {
                  setIsPlayButtonPressed(true);
                  setPlaying(true);
                }}
                aria-label="Play Video"
              >
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
        </div>
      )}
    </div>
  );
};

export default ReactPlayerWrapper;
