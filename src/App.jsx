import { useState, useEffect } from "react";
import { getAllPagesWithSlug } from "../lib/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
    // console.log(res);
  }, []);

  return (
    <>
      {pagesData ? (
        <BrowserRouter>
          <Navbar {...pagesData} />
          <main>
            <Routes>
              <Route index element={<Home {...pagesData} />} />
            </Routes>
          </main>
        </BrowserRouter>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
