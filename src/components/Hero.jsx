import React from "react";
import { withRouter } from "next/router";

import { getPageData } from "../lib/api";

const Hero = (props) => {
  //   console.log(props);
  return (
    <section id="hero" class="hero text-center" style="overflow:hidden">
      <div class="title-container p-3" style="z-index:100">
        <h1></h1>
        <p class="text-uppercase"></p>
      </div>
      <img />
    </section>
  );
};

export default Hero;
