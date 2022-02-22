import React from "react";

const AboutYT = () => {
  return (
    <section id="about-video" className="about-video bg-blue">
      <img
        className="about-video-bg"
        src="/img/about/marcello_background.svg"
      />
      <div className="content d-flex flex-column align-items-center">
        <div className="mb-5 text-content text-center">
          <h2>Telus Small Business Challenge</h2>
          <p>
            It turns out our President {"&"} Founder, Marcello Amoruso, has a
            dramatic side and was featured alongside other Vancouver business
            moguls in the “2016 $100,000 Small Business Challenge”. Watch the
            video below:
          </p>
        </div>

        <div style={{ width: "100%", maxWidth: "850px" }}>
          <div className="video-wrapper">
            {/* <youtube video-id="videoId" ref="youtube"></youtube> */}

            <img
              className="cover-img"
              v-if="cover"
              src="/img/about/marcello-telus-ad.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYT;
