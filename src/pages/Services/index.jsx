import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Button,
  Accordion,
  useAccordionButton,
  Col,
  Row,
} from "react-bootstrap";
import { services } from "../../../lib/staticData";
import { findPage } from "../../../lib/plugins";
import Hero from "../../components/Hero";

const servInCol = paginate(services, services.length / 2);

function paginate(arr, size) {
  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size);
    let page = acc[idx] || (acc[idx] = []);
    page.push(val);
    return acc;
  }, []);
}

console.log(servInCol)

const Services = ({ pages: { edges } }) => {
  const [pageData, setPageData] = useState();
  const slug = useLocation().pathname;

  useEffect(async () => {
    const { node } = await findPage(edges, slug);
    setPageData(node);
  }, [pageData]);

  return (
    <>
      {pageData ? (
        <div className={pageData.slug}>
          <Hero {...pageData.heroSection} />
          <div
            className="intro content text-center mt-5 p-3 p-md-5"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          ></div>

          <section id="services-section">
            <div className="services-section content pl-3 pr-3">
              <Accordion className="service-wrapper" defaultActiveKey={0}>
                <Row>
                  {servInCol.map((services2, i) => (
                    <Col>
                      {services2.map(({ title, img, serPageContent }, j) => (
                        <Accordion.Item eventKey={title}>
                          <Accordion.Header>
                            <Button className="d-flex">
                              <img
                                className="serv-icon"
                                src={`/img/services/icon0${img}.svg`}
                              />
                              <span style={{ marginRight: "1rem" }}>
                                {title}
                              </span>
                              <span className="collapse-button"></span>
                            </Button>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div
                              className="mb-4 pr-0 pr-md-5"
                              style={{ maxWidth: "500px" }}
                              dangerouslySetInnerHTML={{
                                __html: serPageContent,
                              }}
                            ></div>
                            <Link to="contact-us" className="btn-learnmore">
                              TALK TO US TODAY
                            </Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Col>
                  ))}
                </Row>
              </Accordion>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Services;
