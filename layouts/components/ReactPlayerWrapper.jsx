import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import ImageFallback from "./ImageFallback";
import LoadingSpinner from "./LoadingSpinner";
import SpotifyPlayer from "./SpotifyPlayer";

// Components

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

const LoadingSpinnerThumbnail = ({ customThumbnail }) => (
  <div className="size-full">
    <LoadingSpinner />
    {customThumbnail && (
      <ImageFallback
        width={1024}
        height={450}
        src={customThumbnail}
        alt="Video thumbnail"
        className="w-full object-cover aspect-video absolute inset-0 -z-10"
      />
    )}
  </div>
);

const ThumbnailView = ({ thumbnail, onPlay, url }) =>
  thumbnail ? (
    <div>
      <ImageFallback
        width={1100}
        height={600}
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full object-cover aspect-video"
      />
      <PlayButton onClick={onPlay} />
    </div>
  ) : (
    <ReactPlayer url={url} controls style={{ aspectRatio: "16 / 9" }} width="100%" height="100%" light />
  );

const ThumbnailViewSpotify = ({ thumbnail, onPlay, url, isPlayButtonPressed }) => {
  if (isPlayButtonPressed) {
    return <SpotifyPlayer spotifyUrl={url} />;
  }

  return thumbnail ? (
    <div>
      <ImageFallback
        width={1100}
        height={600}
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full object-cover aspect-video"
      />
      <PlayButton onClick={onPlay} />
    </div>
  ) : (
    <SpotifyPlayer spotifyUrl={url} />
  );
};

const ReactPlayerWrapper = ({ url, playing: shouldAutoPlay = true, customThumbnail = null, className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [autoplay, setAutoPlay] = useState(shouldAutoPlay);
  const [isPlayButtonPressed, setIsPlayButtonPressed] = useState(false);

  const isSpotify = url.includes("open.spotify.com");

  const handlePlay = () => {
    setIsPlayButtonPressed(true);
    setAutoPlay(true);
  };

  const handlePlayerReady = () => {
    setLoading(false);
  };

  // reset autoplay when url changes
  useEffect(() => {
    setLoading(true);
    setAutoPlay(shouldAutoPlay);
    setIsPlayButtonPressed(false);
  }, [url]);

  if (isSpotify) {
    return customThumbnail ? (
      <ThumbnailViewSpotify
        thumbnail={customThumbnail}
        onPlay={handlePlay}
        url={url}
        loading={loading}
        isPlayButtonPressed={isPlayButtonPressed}
      />
    ) : (
      <div className="relative">
        {loading ? (
          <div className="opacity-0">
            <SpotifyPlayer spotifyUrl={url} autoplay={shouldAutoPlay} onReady={handlePlayerReady} />
          </div>
        ) : (
          <SpotifyPlayer spotifyUrl={url} autoplay={shouldAutoPlay} onReady={handlePlayerReady} />
        )}
      </div>
    );
  }

  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* If Play button is pressed or video it opened on modal to autoplay */}
      {isPlayButtonPressed || autoplay ? (
        <>
          {loading && <LoadingSpinnerThumbnail customThumbnail={customThumbnail} />}

          <ReactPlayer
            url={url}
            playing={autoplay}
            controls
            style={{ aspectRatio: "16 / 9" }}
            width="100%"
            height="100%"
            onReady={handlePlayerReady}
            onStart={handlePlayerReady}
            light={customThumbnail ? false : true}
          />
        </>
      ) : (
        <ThumbnailView url={url} thumbnail={customThumbnail} onPlay={handlePlay} />
      )}
    </div>
  );
};

export default ReactPlayerWrapper;
