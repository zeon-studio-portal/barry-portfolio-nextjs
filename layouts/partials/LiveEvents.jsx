import AnimatedText from "@components/AnimatedText";
import LiveEventCard from "@components/LiveEventCard";
import { markdownify } from "@lib/utils/textConverter";

const LiveEvents = ({ liveEvents }) => {
  const { enable, title, subtitle, list } = liveEvents.frontmatter;

  return enable ? (
    <section className="section bg-dark-primary py-24">
      <div className="container">
        <div className="mb-20 text-center">
          <div data-aos="fade-up-sm">
            <AnimatedText tag="h2" className="mb-4 font-medium text-center lg:col-8 mx-auto" content={title} />
          </div>
          {subtitle && (
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(subtitle, "p", "text-light-secondary md:text-xl")}
            </div>
          )}
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
