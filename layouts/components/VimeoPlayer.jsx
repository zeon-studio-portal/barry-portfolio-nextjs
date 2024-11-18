const VimeoPlayer = ({ videoId, autoplay = false }) => {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}`}
      title="vimeo player"
      width="100%"
      height="100%"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      className="size-full aspect-video"
    ></iframe>
  );
};

export default VimeoPlayer;
