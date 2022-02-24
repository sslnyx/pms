// import React from "react";
import siteLogo from "/img/logos/PMS_logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ pages: { edges } }) => {
  // console.log(edges);
  return (
    <div className="site-header">
      <nav className="d-flex justify-content-between align-items-center align-items-md-end flex-wrap flex-md-nowrap">
        <div className="content">
          <div className="d-flex justify-content-between align-items-center align-items-md-end content">
            <div className="logo-wrapper">
              <Link to="/#" className="order-1">
                <img className="site-logo" src={siteLogo} alt="site-logo" />
              </Link>
            </div>
            <div className="hamburger d-inline-block d-lg-none order-3 order-sm-3 pr-0">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <ul className="d-none d-lg-flex justify-content-between text-uppercase order-2">
              <li>
                <Link to={`/`}>HOME</Link>
              </li>
              {edges?.map(({ node }) =>
                node.slug !== "get-a-quote" && node.slug !== "front-page" ? (
                  <li key={node.slug}>
                    <Link to={`/${node.slug}`}>{node.title}</Link>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
