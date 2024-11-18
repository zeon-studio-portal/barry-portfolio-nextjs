import ReactPlayer from "react-player";

const ReactPlayerWrapper = ({ url }) => {
  return <ReactPlayer url={url} playing controls style={{ aspectRatio: "16 / 9" }} width={"100%"} height={"100%"} />;
};

export default ReactPlayerWrapper;
