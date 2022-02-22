import React from "react";

const AboutPhilosophy = () => {
  return (
    <section
      id="philosophy"
      className="philosophy blue-block text-white text-center"
    >
      <div className="content">
        <img src="/img/about/Quote_bg.svg" className="philo-bg" />
        <h2>Philosophy</h2>
        <p>
          <img src="/img/about/quote-left-solid.svg" className="quote-left" />
          Pacific Mechanical Systems knows the key to success is through a team
          of experienced industry professionals who care about their work and
          the clients they work with. By providing quality workmanship and
          reliable service, we have built lasting relationships with our clients
          time and again.
          <img className="quote-right" src="/img/about/quote-right-solid.svg" />
        </p>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
