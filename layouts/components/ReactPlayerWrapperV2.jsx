// What this component does:
// - This is a wrapper component for the ReactPlayer component.
// - This component takes url, autoplay, thumbnail, and className as props.
// - This component checks if the url is a Spotify link or not.
// - If the url is a Spotify link, it does the following.
// - - If the thumbnail is provided, it renders the Thumbnail component. Otherwise, it renders the SpotifyPlayer component.
// - If the url is not a Spotify link, it does the following.
// - - If the thumbnail is provided, it renders the Thumbnail component. otherwise, it renders the ReactPlayer component with light props.

// Here Thumbnail component is a custom component that shows a thumbnail image with a play button.
// Here SpotifyPlayer component is a custom component that shows a Spotify player with iframe.
// Here LoadingSpinnerThumbnail component is a custom component that shows a loading spinner on the thumbnail.
// When Thumbnail component is clicked, it sets the autoplay to true and shows the LoadingSpinnerThumbnail until the ReactPlayer/SpotifyPlayer component is loaded with the video.

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ImageFallback from "./ImageFallback";
import LoadingSpinner from "./LoadingSpinner";
import SpotifyPlayer from "./SpotifyPlayer";

const ReactPlayerWrapperV2 = ({ url, thumbnail, autoplay, className }) => {
  const [loading, setLoading] = useState(true);
  const [autoPlay, setAutoPlay] = useState(autoplay);

  const isSpotify = url.includes("open.spotify.com");

  // reset autoplay when url changes
  useEffect(() => {
    setLoading(true);
    setAutoPlay(autoPlay);
  }, [url]);

  const RenderSpotify = () => {
    return (
      <div>
        {autoPlay ? (
          <div>
            <SpotifyPlayer spotifyUrl={url} autoplay={autoPlay} onReady={() => setLoading(false)} />
            {loading && <LoadingSpinnerThumbnail thumbnail={thumbnail} />}
          </div>
        ) : (
          <Thumbnail thumbnail={thumbnail} onClick={() => setAutoPlay(true)} />
        )}
      </div>
    );
  };

  console.log("🪲 :", autoPlay);
  const RenderReactPlayer = () => {
    return (
      <div>
        {autoPlay ? (
          <div>
            <ReactPlayer
              url={url}
              playing={autoPlay}
              style={{ aspectRatio: "16 / 9", display: loading ? "none" : "block" }}
              width="100%"
              height="100%"
              onReady={() => setLoading(false)}
              onStart={() => setLoading(false)}
            />
            {loading && <LoadingSpinnerThumbnail thumbnail={thumbnail} />}
          </div>
        ) : (
          <Thumbnail thumbnail={thumbnail} onClick={() => setAutoPlay(true)} />
        )}
      </div>
    );
  };

  return isSpotify ? <RenderSpotify /> : <RenderReactPlayer />;
};

const Thumbnail = ({ thumbnail, onClick }) => {
  return (
    <div className="relative">
      <ImageFallback
        src={thumbnail}
        alt="thumbnail"
        width={600}
        height={350}
        className="w-full object-cover aspect-video"
      />
      <PlayButton onClick={onClick} />
    </div>
  );
};

const LoadingSpinnerThumbnail = ({ thumbnail }) => (
  <div className="size-full relative">
    <LoadingSpinner />
    <ImageFallback
      width={1024}
      height={450}
      src={thumbnail}
      alt="thumbnail"
      className="w-full object-cover aspect-video "
    />
  </div>
);

const PlayButton = ({ onClick }) => (
  <div className="video-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <button className="video-play-btn" onClick={onClick} aria-label="Play Video">
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
);

export default ReactPlayerWrapperV2;
