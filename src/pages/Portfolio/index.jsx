import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findPage } from "../../../lib/plugins";
import Hero from "../../components/Hero";

const Portfolio = ({ pages: { edges } }) => {
  const [pageData, setPageData] = useState();
  const slug = useLocation().pathname;

  useEffect(async () => {
    const { node } = findPage(edges, slug.substring(1));
    setPageData(node);
  }, []);

  return (
    <>
      {pageData ? (
        <div className={pageData.slug}>
          <Hero {...pageData.heroSection} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Portfolio;
