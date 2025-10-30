// import React, { useState } from "react";

// const App = () => {
//   // const [count, setCount] = useState(0);

//   // useEffect(() => {
//   // the code that we want to run
//   // console.log("this is count", count);

//   // optional return function
//   // }, [count]); // the dependency array

//   // const [inputValue, setInputValue] = useState("");
//   // const [input, setinput] = useState("");

//   // this is the modren method of increment and decrement
//   // we also use simple method in the first example..
//   // function increment() {
//   // setCount((prevCount) => prevCount + 1);
//   // }
//   // function decrement() {
//   //   setCount((prevCount) => prevCount - 1);
//   // }

//   // const [color, setColor] = useState("Red");

//   // const [car, setCar] = useState({
//   //   brand: "Cultus",
//   //   model: "Suzuki",
//   //   year: "1947",
//   //   color: "red",
//   // });

//   // const updateColor = () => {
//   //   setCar(previousState => {
//   //     return { ...previousState, color: "blue" };
//   //   });
//   // };

//   return (
//     // <div>
//     //   <h1>My {car.brand}</h1>
//     //   <h1>
//     //     It is a {car.model}, in {car.color} color from {car.year}.
//     //   </h1>
//     //   <button type="button" onClick={updateColor}>
//     //     Blue
//     //   </button>
//     // </div>

//     // <div>
//     //   <h1>You Select {color} Color! </h1>
//     //   <button type="button" onClick={() => setColor("Blue")} className="me-2">
//     //     Blue
//     //   </button>
//     //   <button type="button" onClick={() => setColor("Green")} className="me-2">
//     //     Green
//     //   </button>
//     //   <button type="button" onClick={() => setColor("Orange")} className="me-2">
//     //     Orange
//     //   </button>
//     //   <button type="button" onClick={() => setColor("Pink")} className="me-2">
//     //     Pink
//     //   </button>
//     //   <button type="button" onClick={() => setColor("Indigo")} className="me-2">
//     //     Indigo
//     //   </button>
//     // </div>
//     // <div>
//     //   <p>You Clicked {count} Times</p>

//     //   <button onClick={() => setCount(count + 1)} className="outline rounded px-4 bg-green-400">Click Me</button>

//     // </div>

//     // <div className="p-5">
//     //   <input
//     //     className="bg-green-300 py-2 pl-1 mb-3 outline rounded"
//     //     type="text" placeholder="Type Something here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}
//     //   />
//     //   <p>
//     //     You Typed : <strong>{inputValue}</strong>
//     //   </p>
//     // </div>
//     // <div>
//     //   <div className="text-center">
//     //     <p className="outline rounded px-4 bg-white-400 mt-7  ">
//     //       {" "}
//     //       you Clicked {count} date
//     //     </p>
//     //     <button
//     //       onClick={() => setCount(count - 1)}
//     //       className="outline rounded px-4 bg-green-400 mt-7"
//     //     >
//     //       increse
//     //     </button>
//     //     <button
//     //       onClick={() => setCount(count * 0)}
//     //       className="outline rounded px-4 bg-green-400 "
//     //     >
//     //       reset
//     //     </button>
//     //   </div>
//     //   <div>
//     //     <p> change{input}</p>
//     //     <input
//     //       className="border-2"
//     //       type="text"
//     //       placeholder="change password"
//     //       value={input}
//     //       onChange={(e) => setInputValue(e.target.value)}
//     //     />
//     //   </div>
//     // </div>

//     // <div className="p-2">
//     //   <button className="bg-red-400 px-4 rounded" onClick={decrement}>
//     //     -
//     //   </button>
//     //   <span> {count} </span>
//     //   <button className="bg-red-400 px-4 rounded" onClick={increment}>
//     //     +
//     //   </button>
//     // </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    // GET request
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // POST request — make payload and send to API
  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 1: create payload (data to send)
    const payload = {
      Name: title,
      Password: body,
    };

    // Step 2: send it using fetch
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // convert object → JSON
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Post created:", result);
        alert("Post sent successfully!");
        // Optionally add new post to list
        setData([result, ...data]);
      })
      .catch((err) => console.error("Error sending post:", err));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="ml-2">
      <h2 className="m-1">Sign Up/LogIn With Dummey API Data</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="border-1 rounded"
          type="text"
          placeholder="Enter Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className="border-1 mt-1 rounded"
          placeholder="Enter Password"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <br />
        <button type="submit" className="bg-green-400 m-1 p-2 rounded">
          Send Post
        </button>
      </form>

      <hr />

      {/* Display Data */}
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>
            <strong>{item.Name}</strong>
            <p>{item.Password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
