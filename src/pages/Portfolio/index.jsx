import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findPage } from "../../../lib/plugins";
import Hero from "../../components/Hero";
import PortfolioClients from "../../components/PortfolioClients";
import PortfolioProjects from "../../components/PortfolioProjects";
import PortfolioTestimonial from "../../components/PortfolioTestimonial";
import Helmet from "react-helmet";

const Portfolio = ({
  node: { heroSection, portfolioClients, portfolioTestimonial },
  nodes,
}) => {
  return (
    <div className={"portfolio"}>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Hero {...heroSection} />
      <PortfolioClients {...portfolioClients} />
      <PortfolioProjects projects={nodes} />
      <PortfolioTestimonial {...portfolioTestimonial} />
    </div>
  );
};

export default Portfolio;
