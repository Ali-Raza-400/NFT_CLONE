import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ConnectWallet from "./Pages/ConnectWallet/ConnectWallet.jsx";
import AllDrawingTools from "./Pages/AllDrawingTools";

import Listnftstep2 from "./Pages/Listnftstep2";
import Listnftstep3 from "./Pages/Listnftstep3";
import Pooldata from "./Pages/Pooldata";
import Nftdata from "./Pages/Nftdata";
import Menu from "./Pages/Menu";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/alldrawingtools" element={<AllDrawingTools />} />
          <Route path="/listnftstep2" element={<Listnftstep2 />} />
          <Route path="/listnftstep3" element={<Listnftstep3 />} />
          <Route path="/pooldata" element={<Pooldata />} />
          <Route path="/nftdata" element={<Nftdata />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
