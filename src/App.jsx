import { useState, useEffect } from "react";
import { getAllPagesWithSlug } from "../lib/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Programs from "./pages/Programs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles/main.scss";

function App() {
  // const [navData, setNavData] = useState();
  const [pagesData, setPagesData] = useState(null);

  useEffect(async () => {
    const res = await getAllPagesWithSlug();
    setPagesData(res);
  }, []);

  return (
    <>
      {pagesData ? (
        <BrowserRouter>
          <Navbar {...pagesData} />
          <main>
            <Routes>
              <Route index element={<Home {...pagesData} />} />
              <Route path="services" element={<Services {...pagesData} />} />
              <Route path="about-us" element={<AboutUs {...pagesData} />} />
              <Route path="contact-us" element={<ContactUs {...pagesData} />} />
              <Route path="portfolio" element={<Portfolio {...pagesData} />} />
              <Route path="programs" element={<Programs {...pagesData} />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
