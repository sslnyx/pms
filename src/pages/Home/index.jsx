// import React from 'react'
import { useEffect, useState } from "react";
import FrontPageHeroSlides from "../../components/FrontPageHeroSlides";
import { useLocation } from "react-router-dom";
import FrontServices from "../../components/FrontServices";
import FrontAbout from "../../components/FrontAbout";

const Home = ({ pages: { edges } }) => {
  const { pathname } = useLocation();
  const [pageData, setPageData] = useState();

  useEffect(() => {
    const data = edges.find(({ node }) => node.uri === pathname);
    setPageData(data);
  }, []);

  return (
    <div className="front-page">
      {pageData ? (
        <>
          <FrontPageHeroSlides {...pageData} />
          <FrontServices />
          <FrontAbout />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
