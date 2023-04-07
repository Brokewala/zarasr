import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./Helpers/AppContext";
import About from "./Pages/Global/About";
import Contact from "./Pages/Global/Contact";
import Home from "./Pages/Global/Home";
import HomeRandonne from "./Pages/Randonne/HomeRandonne/HomeRandonne";
import HomeTravel from "./Pages/Travel/HomeTravel/HomeTravel";
import HomeTretec from "./Pages/Tretec/HomeTretec/HomeTretec";

function App() {
  const [HederBG, setHederBG] = useState("#408080")
  const [HederColor, setHederColor] = useState("white")


  return (
    <AppContext.Provider value={{ HederBG, setHederBG, HederColor, setHederColor }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* apropos */}
          <Route path="/a-propos" element={<About />} />
          {/* contact */}
          <Route path="/contact" element={<Contact />} />
          {/* travel */}
          <Route path="/travail" element={<HomeTravel />} />
          {/* mada tretec */}
          <Route path="/mada-tretec" element={<HomeTretec />} />
          {/* randonne */}
          <Route path="/mada-randonne" element={<HomeRandonne />} />
          {/* 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
