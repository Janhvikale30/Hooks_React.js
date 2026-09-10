import React, { useState } from "react";

function ColourChange() {
  const [clr, setClr] = useState("lightblue");
  const [clr1, setClr1] = useState("white");
  let [fontS, setFontS] = useState(20);

  return (
    <>
      <div style={{ backgroundColor: clr, padding: "20px" }}>
        <h2 style={{ color: clr1 }}>
          Hello User ! Welcome To Theme Changing Page
        </h2>
        <br></br>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setClr("lightpink")}
        >
          Change Colour
        </button>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => [setClr("black"), setClr1("white")]}
        >
          Dark Mode
        </button>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => [setClr("white"), setClr1("black")]}
        >
          Light Mode
        </button>
        <br></br>
        <br></br>

        {/* Font Size Change */}

        <h5 style={{ fontSize: fontS, color: "lightseagreen" }}>
          Font Change Component
        </h5>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setFontS(fontS + 1);
          }}
        >
          Font ++
        </button>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setFontS(fontS - 1);
          }}
        >
          Font --
        </button>
      </div>
    </>
  );
}

export default ColourChange;
