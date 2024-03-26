import "./styles/utilities.css";
import "./styles/colors.css";

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
// import Calculator from "./pages/Calculator";
// import StickyNotes from "./pages/StickyNotes";

const App = () => {
  useEffect(() => {}, []);

  return(
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          {/*
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/sticky-notes" element={<StickyNotes />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
