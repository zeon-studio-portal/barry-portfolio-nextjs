"use client";

import AnimatedText from "@components/AnimatedText";
import KeynoteSessionCard from "@components/KeynoteSessionCard";

const KeynoteSession = ({ keynoteSessions }) => {
  const { enable, title, list } = keynoteSessions.frontmatter;

  return enable ? (
    <section id="reviews" className="testimonials bg-dark-secondary py-24">
      <div className="container">
        <div className="mb-20">
          <AnimatedText tag="h2" className="mb-4 font-medium text-center lg:col-8 mx-auto" content={title} />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {list.length &&
            list.map((item, index) => {
              const isEven = index % 2 === 0;
              return <KeynoteSessionCard key={index} item={item} isEven={isEven} />;
            })}
        </div>
      </div>
    </section>
  ) : null;
};

export default KeynoteSession;
