import { useState, useEffect } from "react";
import { getAllPagesWithSlug } from "../lib/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./styles/main.scss";

function App() {
  const [navData, setNavData] = useState();

  useEffect(async () => {
    const res = await getAllPagesWithSlug();
    setNavData(res);
    console.log(res);
  }, []);

  return (
    <BrowserRouter>
      <Navbar {...navData} />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
