import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Row className="content">
        <Col
          cols="12"
          md="4"
          className="mb-3 mb-md-0 d-flex flex-column justfiy-content-center"
        >
          <a
            href="mailto:info@pacificmechanical.ca"
            className="text-uppercase d-block mb-3"
          >
            info@pacificmechanical.ca
          </a>
          <a href="tel:+1604.251.3766">T: 604.251.3766</a>
          <a href="tel:+1604.251.3788" className="d-block mb-3">
            F: 604.251.3788
          </a>

          <a
            className="text-uppercase"
            href="https://www.google.com/maps/place/7050+Russell+Ave,+Burnaby,+BC+V5J+4R9/@49.2194035,-122.9807726,17z/data=!3m1!4b1!4m5!3m4!1s0x54867648e91b2027:0xe1b21058ea511d33!8m2!3d49.2194035!4d-122.9785839?hl=en"
            target="_blank"
          >
            7050 Russell Ave., Burnaby
            <br />
            BC Canada V5J 4R9
          </a>
        </Col>
        <Col cols="12" md="8" className="text-black text-block">
          <strong>Who We Are:</strong>
          <p>
            We are a group of construction industry professionals focused on
            mechanical contracting for the commercial and industrial sector. We
            work for general contractors, or as prime contractor or project
            management lead, and collaborate with engineering firms on
            design/build projects.
          </p>
          <br />

          <strong style={{ marginBottom: "1rem" }}>
            Part of the Pacific Industries Group.
            <br />
            Check out our sister companies:
          </strong>

          <div className="footer-logo d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-center justify-content-md-end">
            <a target="_blank" href="https://pacificone.ca/">
              <img
                style={{ width: "200px", height: "auto" }}
                className="po-logo"
                src="/img/footer-logo/PO.png"
                alt="pacificone-logo.png"
              />
            </a>
            <a target="_blank" href="https://pacificxraycoring.ca/">
              <img
                style={{ width: "230px", height: "auto" }}
                src="/img/footer-logo/PXC.png"
                alt="pacificone-logo.png"
              />
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
