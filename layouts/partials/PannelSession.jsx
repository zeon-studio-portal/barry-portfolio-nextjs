import AnimatedText from "@components/AnimatedText";
import PanelSessionCard from "@components/PanelSessionCard";

const PannelSession = ({ panelSessions }) => {
  const { enable, title, list } = panelSessions.frontmatter;
  return enable ? (
    <section
      id="thought_leadership"
      className="testimonials py-24 scroll-mt-5"
      style={{ background: "linear-gradient(96.4deg, #FDD13B 4.58%, #FF8F81 92.51%, #C14ECF 125.17%)" }}
    >
      <div className="container">
        <div className="mb-20">
          <div data-aos="fade-up-sm">
            <AnimatedText tag="h2" className="mb-4 font-medium text-center lg:col-8 mx-auto" content={title} />
          </div>
        </div>
        <div className="grid gap-6">
          {list.length &&
            list.map((item, index) => {
              return <PanelSessionCard key={index} panel={item} />;
            })}
        </div>
      </div>
    </section>
  ) : null;
};

export default PannelSession;
