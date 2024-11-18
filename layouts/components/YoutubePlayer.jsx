const YoutubePlayer = ({ videoId, autoplay }) => {
  return (
    <iframe
      loading="lazy"
      title="background video"
      width={1200}
      height={600}
      className="size-full aspect-video"
      allowFullScreen
      src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&autoplay=${autoplay ? "1" : "0"}&mute=0&loop=1&color=white&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
    ></iframe>
  );
};

export default YoutubePlayer;
