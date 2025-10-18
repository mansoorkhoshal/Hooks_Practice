import React, { useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState("");

  return (
    // <div>
    //   <p>You Clicked {count} Times</p>

    //   <button onClick={() => setCount(count + 1)} className="outline rounded px-4 bg-green-400">Click Me</button>

    // </div>

    <div className="p-5">
      <input
        className="bg-green-300 py-2 pl-1 mb-3 outline rounded"
        type="text" placeholder="Type Something here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        You Typed : <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default App;
