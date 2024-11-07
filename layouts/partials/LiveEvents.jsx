import AnimatedText from "@components/AnimatedText";
import LiveEventCard from "@components/LiveEventCard";

const LiveEvents = ({ liveEvents }) => {
  const { enable, title, list } = liveEvents.frontmatter;

  return enable ? (
    <section className="section bg-dark-primary py-24">
      <div className="container">
        <div className="mb-14 ">
          <div data-aos="fade-up-sm">
            <AnimatedText tag="h2" className="mb-4 font-medium text-center lg:col-8 mx-auto" content={title} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 ">
          {list.length &&
            list.map((item, index) => {
              const aosDelay = 100 * (index % 2);
              return <LiveEventCard key={index} item={item} aosDelay={aosDelay} />;
            })}
        </div>
      </div>
    </section>
  ) : null;
};

export default LiveEvents;
