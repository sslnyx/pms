import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

import React from "react";

const Layout = ({ children, pageProps }) => {
  return (
    <>
      <Navbar {...{ pageProps }} />
      <Hero {...{ pageProps }} />
      <main>{children}</main>
      <Footer {...{ pageProps }} />
    </>
  );
};

export default Layout;
