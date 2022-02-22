import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutDes = ({ content }) => {
  // console.log(content);
  return (
    <section id="about-dec" className="about-dec">
      <Row className="align-items-center content">
        <Col cols="12" md="6" className="mb-5 mb-md-0">
          <img
            data-parallax='{"y": -100, "smoothness": 10}'
            className="about-bg d-none d-md-block"
            src="/img/about/04_aboutus.jpg"
            alt="bg"
          />
          <img
            className="about-bg d-block d-md-none"
            src="/img/about/04_aboutus.jpg"
            alt="bg"
          />
        </Col>
        <Col cols="12" md="6">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="mb-4 about-content"
          ></div>
          <Link to="/services" className="btn-learnmore">
            SEE WHAT WE CAN DO
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default AboutDes;
