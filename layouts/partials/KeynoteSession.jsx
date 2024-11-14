import AnimatedText from "@components/AnimatedText";
import KeynoteSessionCard from "@components/KeynoteSessionCard";
import { markdownify } from "@lib/utils/textConverter";

const KeynoteSession = ({ keynoteSessions }) => {
  const { enable, title, subtitle, list } = keynoteSessions.frontmatter;

  return enable ? (
    <section id={keynoteSessions.slug} className="testimonials bg-dark-secondary py-24">
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

        <div className="grid md:grid-cols-2 gap-6">
          {list.length &&
            list.map((item, index) => {
              const isEven = index % 2 === 0;
              const aosDelay = 100 * (index % 2);
              return (
                <div key={index} data-aos="fade-up-sm" data-aos-delay={aosDelay}>
                  <KeynoteSessionCard item={item} isEven={isEven} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  ) : null;
};

export default KeynoteSession;
