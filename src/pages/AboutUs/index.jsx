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
import Helmet from "react-helmet";

import { findPage } from "../../../lib/plugins";

const AboutUs = ({ pageContent: { heroSection, content, slug }, teams }) => {
  return (
    <div className={slug}>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Hero {...heroSection} />

      <AboutDes {...{ content }} />

      <AboutPhilosophy />

      <AboutMembers {...{ teams }} />

      <AboutJoin />

      <AboutYT />
    </div>
  );
};

export default AboutUs;
