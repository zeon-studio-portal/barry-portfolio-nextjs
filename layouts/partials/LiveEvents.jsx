import AnimatedText from "@components/AnimatedText";
import LiveEventCard from "@components/LiveEventCard";

const LiveEvents = ({ liveEvents }) => {
  const { enable, title, list } = liveEvents.frontmatter;

  return enable ? (
    <section className="section bg-dark-primary py-24">
      <div className="container">
        <div className="mb-14 ">
          <AnimatedText tag="h2" className="mb-4 font-medium text-center lg:col-8 mx-auto" content={title} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 ">
          {list.length && list.map((item, index) => <LiveEventCard key={index} item={item} />)}
        </div>
      </div>
    </section>
  ) : null;
};

export default LiveEvents;
