import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // the code that we want to run
    console.log("this is count", count);

    // optional return function
  }, []); // the dependency array

  // const [inputValue, setInputValue] = useState("");
  // const [input, setinput] = useState("");

  // this is the modren method of increment and decrement
  // we also use simple method in the first example..
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    // <div>
    //   <p>You Clicked {count} Times</p>

    //   <button onClick={() => setCount(count + 1)} className="outline rounded px-4 bg-green-400">Click Me</button>

    // </div>

    // <div className="p-5">
    //   <input
    //     className="bg-green-300 py-2 pl-1 mb-3 outline rounded"
    //     type="text" placeholder="Type Something here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}
    //   />
    //   <p>
    //     You Typed : <strong>{inputValue}</strong>
    //   </p>
    // </div>
    // <div>
    //   <div className="text-center">
    //     <p className="outline rounded px-4 bg-white-400 mt-7  ">
    //       {" "}
    //       you Clicked {count} date
    //     </p>
    //     <button
    //       onClick={() => setCount(count - 1)}
    //       className="outline rounded px-4 bg-green-400 mt-7"
    //     >
    //       increse
    //     </button>
    //     <button
    //       onClick={() => setCount(count * 0)}
    //       className="outline rounded px-4 bg-green-400 "
    //     >
    //       reset
    //     </button>
    //   </div>
    //   <div>
    //     <p> change{input}</p>
    //     <input
    //       className="border-2"
    //       type="text"
    //       placeholder="change password"
    //       value={input}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //   </div>
    // </div>

    <div className="p-2">
      <button className="bg-red-400 px-4 rounded" onClick={decrement}>
        -
      </button>
      <span> {count} </span>
      <button className="bg-red-400 px-4 rounded" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default App;
