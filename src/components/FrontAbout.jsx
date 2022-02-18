import { Row, Col } from "react-bootstrap";
import { aboutCards } from "../../lib/staticData";
import { Link } from "react-router-dom";

const FrontAbout = () => {
  return (
    <section id="about" className="about content">
      <Row>
        <Col xs="12" md="8" className="mb-4 position-relative">
          <img className="about-bg" src="/img/about/04_aboutus.jpg" alt="bg" />

          <div
            data-parallax="{'y': -100, 'smoothness': 1}"
            className="blue-block"
          >
            <h2>Unparalleled Technical Expertise and Service</h2>
            <br />

            <Link to="/get-a-quote" className="btn-learnmore-white">
              GET A QUOTE
            </Link>
          </div>
        </Col>
        <Col xs="12" md="4">
          <div className="text-content">
            <h2>What We Are All About</h2>
            <p>
              Pacific Mechanical knows the key to success stems from our
              technical expertise, quality workmanship and strong customer
              relations. For over 15 years, our team of industry professionals
              have worked on countless commercial, residential, industrial and
              institutional projects with unmatched pride and care.
            </p>
            <Link to="about-us" className="btn-learnmore">
              LEARN MORE ABOUT US
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="pt-5 pr-md-3 pl-md-5 pr-md-5 w-100 m-0">
        {aboutCards.map(({ title, content }) => (
          <Col xs="12" md="4" key={title} className="text-left mb-5 mb-md-0">
            <strong className="mb-3 d-block">{title}</strong>
            <p>{content}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FrontAbout;
