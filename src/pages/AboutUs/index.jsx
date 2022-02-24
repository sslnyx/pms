// import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero";
import AboutDes from "../../components/AboutDes";
import AboutYT from "../../components/AboutYT";
import AboutPhilosophy from "../../components/AboutPhilosophy";
import AboutMembers from "../../components/AboutMembers";
import AboutJoin from "../../components/AboutJoin";

import { findPage } from "../../../lib/plugins";

const AboutUs = ({ pages: { edges }, teams }) => {
  const [pageData, setPageData] = useState();
  const slug = useLocation().pathname;

  useEffect(async () => {
    const { node } = findPage(edges, slug.substring(1));
    setPageData(node);
  }, []);

  return (
    <>
      {pageData ? (
        <div className={pageData?.uri}>
          <Hero {...pageData.heroSection} />

          <AboutDes {...pageData} />

          <AboutPhilosophy />

          <AboutMembers {...teams} />

          <AboutJoin />

          <AboutYT />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AboutUs;
