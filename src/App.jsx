import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Clicked me {count}</p>

      <button onClick={() => setCount(count + 1)} className="outline rounded px-4 bg-green-400">Click Me</button>
    </div>
  );
};

export default App;
