import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findPage } from "../../../lib/plugins";
import Hero from "../../components/Hero";
import Helmet from "react-helmet";

const ContactUs = ({ node: { heroSection, slug } }) => {
  return (
    <div className={slug}>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Hero {...heroSection} />
      <section id="address" className="address align-items-start">
        <a
          href="https://www.google.com/maps/place/7050+Russell+Ave,+Burnaby,+BC+V5J+4R9/@49.2194035,-122.9807726,17z/data=!3m1!4b1!4m5!3m4!1s0x54867648e91b2027:0xe1b21058ea511d33!8m2!3d49.2194035!4d-122.9785839?hl=en"
          target="_blank"
        >
          <img
            src="/img/contactus/05_googlemap_pin.png"
            alt="05_googlemap_pin.png"
            style={{ maxWidth: "50px" }}
          />
        </a>
        <div className="address-wrapper p-3">
          <span></span>
          <h2 className="text-blue mb-5">Pacific Mechanical Systems Ltd.</h2>
          <a
            className="text-black d-block mb-3"
            href="https://www.google.com/maps/place/7050+Russell+Ave,+Burnaby,+BC+V5J+4R9/@49.2194035,-122.9807726,17z/data=!3m1!4b1!4m5!3m4!1s0x54867648e91b2027:0xe1b21058ea511d33!8m2!3d49.2194035!4d-122.9785839?hl=en"
            target="_blank"
          >
            <p className="text-black">7050 Russell Ave. Burnaby, BC, V5J 4R9</p>
          </a>
          <p>
            <span>Office:</span>
            <a href="tel:604.251.3766">604.251.3766</a>
          </p>
          <p>
            <span>Fax:</span>
            <a href="tel:604.251.3788">604.251.3788</a>
          </p>
          <p className="mb-5">
            <span>Email:</span>
            <a href="mailto:info@pacificmechanical.ca">
              info@pacificmechanical.ca
            </a>
          </p>

          <p className="text-black">
            For emergencies after hours, please call:
          </p>
          <p>
            <a href="tel:604.251.3766">604.251.3766</a>
          </p>
        </div>
      </section>

      <section
        id="join"
        className="join text-center mb-0"
        style={{ background: "#282829" }}
      >
        <h2 className="mb-5">Join Our Team</h2>
        <p className="mb-5" style={{ maxWidth: "430px" }}>
          If you are looking for a challenge and diversity in your job, we would
          love to hear from you!
        </p>
        <a
          href="https://ca.indeed.com/cmp/Pacific-Mechanical-System/jobs"
          className="btn-learnmore-white"
          target="_blank"
        >
          SEE OUR JOB OPENINGS
        </a>
      </section>
    </div>
  );
};

export default ContactUs;
