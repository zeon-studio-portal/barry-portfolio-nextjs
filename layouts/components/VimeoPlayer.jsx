const VimeoPlayer = ({ vimeoId, autoplay = false }) => {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${vimeoId}?autoplay=${autoplay ? 1 : 0}`}
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
