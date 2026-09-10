import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateClass from "./Components/StateClass";
import UseStateHook from "./Components/UseStateHook";
import ColourChange from "./Components/ColourChange.jsx";
import Show from "./Show.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  let [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/useStateHook" element={<UseStateHook />} /> */}
          <Route path="/colourChange" element={<ColourChange />} />
        </Routes>
      </Router>
      {isVisible ? <Show /> : <h5>Component is hidden</h5>}
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setIsVisible(!isVisible)}
      >
        Show/Hide
      </button>
    </>
  );
}

export default App;
