import { useState } from "react";
import { Link } from "react-router-dom";
import bgMap from "/img/services/02_service_mapbg.svg";
import bgCircleIn from "/img/services/circle_in.svg";
import bgCircleOut from "/img/services/circle_out.svg";
import { services } from "../../lib/staticData";

const FrontServices = () => {
  const [selectedService, setSelectedService] = useState(0);
  const activeServHandler = (id) => {
    return (ev) => {
      setSelectedService(id);
    };
  };
  return (
    <section id="our-service" className="our-service">
      <div className="content text-center text-content">
        <h1>
          Offers a Full Range of Services to Cover All
          <br className="d-none d-md-block" />
          Your Mechanical Needs
        </h1>
        <br />
        <h2>Our Services</h2>
        <p>
          Paciﬁc Mechanical Systems Ltd. has an in-house staff of experienced
          Red Seal Plumbing Journeymen and Red Seal Refrigeration technicians.
          Our commitment to our clients and employees through ongoing education
          and training keeps us at the top in our ﬁeld.
          <br />
          Take a look at our full range of services below:
        </p>
      </div>

      <div className="serv-graph">
        <img className="bg-map" src={bgMap} />
        <div className="bgSet">
          <img src={bgCircleIn} />
          <img className="d-none d-md-block" src={bgCircleOut} />
        </div>
        {services.map(({ title, content, img }, i) => (
          <div key={i}>
            <div
              onMouseOver={activeServHandler(i)}
              className={`icon-wrapper ${i === selectedService ? "active" : ""}`}
              style={{
                transform: `translateY(-100%) translateX(50%) rotate(${
                  i * (360 / services.length)
                }deg)`,
              }}
            >
              <div className="round-container pe-none"></div>
              <img
                className="serv-icon pe-none"
                src={`/img/services/icon0${img}.svg`}
                style={{
                  transform: `rotate(-${i * (360 / services.length)}deg)`,
                }}
              />
            </div>
            <div
              className={`serv-content text-center ${
                i === selectedService ? "active" : ""
              }`}
            >
              <h2>{title}</h2>
              <p>{content}</p>
              <Link to="/services">Our Services</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrontServices;
