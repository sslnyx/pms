import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { findPage } from "../../../lib/plugins";
import Hero from "../../components/Hero";

const Programs = ({ node: { heroSection, slug } }) => {
  // const [pageData, setPageData] = useState();
  // const slug = useLocation().pathname;

  // useEffect(async () => {
  //   const { node } = findPage(edges, slug.substring(1));
  //   setPageData(node);
  // }, []);

  return (
    <div className={slug}>
      <Hero {...heroSection} />

      <section className="rebate">
        <Row className="content">
          <Col cols="12" md="6" className="pr-0 pr-md-5">
            <h2 className="mb-5 text-blue">Rebate Programs</h2>
            <h6 className="text-black" style={{ fontWeight: "bold" }}>
              Install a high-efﬁciency boiler for a rebate of up to $45,000.
            </h6>
            <p className="mb-3 mb-md-5">
              Whether building new or retroﬁtting, improve your building’s
              energy performance and qualify for a rebate by installing a
              high-efﬁciency natural gas boiler. And now, food processors,
              greenhouses and other commercial customers who use process heat
              are also eligible for rebates.
            </p>
            <a
              href="https://www.fortisbc.com/rebates/business/natural-gas-boiler-rebates"
              className="btn-learnmore mb-5"
              target="_blank"
            >
              FIND OUT HOW
            </a>
          </Col>
          <Col cols="12" md="6">
            <img src="/img/program/06_rebate.jpg" alt="rebate" />
          </Col>
        </Row>

        <Row className="content">
          <Col cols="12" md="6" className="pr-0 pr-md-5">
            <h2 className="text-blue">
              New Commercial Construction Custom Design Program
            </h2>
            <p className="mb-3">
              BC Hydro’s New Construction Program (NCP), offers up to 100 per
              cent funding for new construction energy studies. This incentive
              is co-funded by FortisBC. FortisBC offers capital incentives for
              measures that will reduce natural gas consumption. The dollar
              amount is proportional to the anticipated natural gas savings.
            </p>
          </Col>
          <Col cols="12" md="6">
            <p>
              With this new alignment between FortisBC and BC Hydro, you can
              benefit by using one approved NCP funded energy study to apply for
              both the FortisBC and NCP capital incentives.
            </p>
            <p>
              For more information about this and many other great efficiency
              programs please see the Fortis BC website.
            </p>
            <a
              href="https://www.fortisbc.com/rebates/business/commercial-new-construction-performance-incentives"
              className="btn-learnmore"
              target="_blank"
            >
              LEARN MORE
            </a>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Programs;
