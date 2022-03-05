import { useState, useEffect } from "react";
import { getAllPagesWithSlug } from "../lib/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Helmet from "react-helmet";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Programs from "./pages/Programs";
import { findPage } from "../lib/plugins";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles/main.scss";
import GetAQuote from "./pages/GetAQuote";

function App() {
  // const [navData, setNavData] = useState();
  const [pagesData, setPagesData] = useState(null);

  useEffect(async () => {
    const res = await getAllPagesWithSlug();
    setPagesData((preVal) => res);
  }, []);

  return (
    <ParallaxProvider>
      {pagesData ? (
        <BrowserRouter>
          <Navbar {...pagesData} />
          <main>
            <Helmet
              defaultTitle={"Pacific Mechanical Systems LTD"}
              titleTemplate="%s | Pacific Mechanical Systems LTD"
            ></Helmet>
            <Routes>
              <Route
                index
                element={
                  <Home
                    pageContent={
                      findPage(pagesData.pages.edges, "front-page").node
                    }
                  />
                }
              />
              <Route
                path="services"
                element={
                  <Services {...findPage(pagesData.pages.edges, "services")} />
                }
              />
              <Route
                path="about-us"
                element={
                  <AboutUs
                    pageContent={
                      findPage(pagesData.pages.edges, "about-us").node
                    }
                    teams={pagesData.teams.edges}
                  />
                }
              />
              <Route
                path="contact-us"
                element={
                  <ContactUs
                    {...findPage(pagesData.pages.edges, "contact-us")}
                  />
                }
              />
              <Route
                path="portfolio"
                element={
                  <Portfolio
                    {...findPage(pagesData.pages.edges, "portfolio")}
                    {...pagesData.projects}
                  />
                }
              />
              <Route
                path="programs"
                element={
                  <Programs {...findPage(pagesData.pages.edges, "programs")} />
                }
              />

              <Route
                path="get-a-quote"
                element={
                  <GetAQuote
                    pageContent={
                      findPage(pagesData.pages.edges, "get-a-quote").node
                    }
                  />
                }
              />

              <Route
                path="*"
                element={
                  <Home
                    pageContent={
                      findPage(pagesData.pages.edges, "front-page").node
                    }
                  />
                }
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      ) : (
        ""
      )}
    </ParallaxProvider>
  );
}

export default App;
