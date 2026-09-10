import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Janhvi");
  return (
    <>
      <div className=" w-50 mx-auto border-secondary rounded-4 d-flex flex-column">
        <h1 className="text-center text-warning bg-dark p-2">
          Usestate Hoook in Functional Component
        </h1>
        <h1 className="text-center">Counter: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("Count has increased!");
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("Count has decreased!");
          }}
        >
          Decrease
        </button>
        <br></br>
        <h1 className="text-center">Name:{name}</h1>
        <button onClick={() => setName("Alice")}>Change Name</button>
      </div>
    </>
  );
};

export default UseStateHook;
