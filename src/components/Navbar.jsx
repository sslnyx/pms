// import React from "react";
import siteLogo from "/assets/img/logos/PMS_logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ edges }) => {
  // console.log(edges);
  return (
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
            {edges?.map(({ node }) =>
              node.slug !== "get-a-quote" ? (
                <li key={node.slug}>
                  <Link to={node.uri}>{node.title}</Link>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
