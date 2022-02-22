import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findPage } from "../../../lib/plugins";
import Hero from "../../components/Hero";

const ContactUs = ({ pages: { edges } }) => {
  const [pageData, setPageData] = useState();
  const slug = useLocation().pathname;

  useEffect(async () => {
    const { node } = findPage(edges, slug);
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

export default ContactUs;
