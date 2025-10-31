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

// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     // GET request
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   // POST request — make payload and send to API
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Step 1: create payload (data to send)
//     const payload = {
//       Name: title,
//       Password: body,
//     };

//     // Step 2: send it using fetch
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload), // convert object → JSON
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log("Post created:", result);
//         alert("Post sent successfully!");
//         // Optionally add new post to list
//         setData([result, ...data]);
//       })
//       .catch((err) => console.error("Error sending post:", err));
//   };

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div className="text-center">
//       <h2 className="m-1">Sign Up/LogIn Dummey API</h2>

//       <form onSubmit={handleSubmit} className=" ">
//         <input
//           className="border-1 rounded"
//           type="text"
//           placeholder="Enter Name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           className="border-1 rounded"
//           placeholder="Enter Password"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         ></input>
//         <br />
//         <button type="submit" className="bg-green-400 m-1 p-2 rounded">
//           Send Post
//         </button>
//       </form>

//       <hr />

//       {/* Display Data */}
//       <ul>
//         {data.slice(0, 5).map((item) => (
//           <li key={item.id}>
//             <strong>{item.Name}</strong>
//             <p>{item.Password}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // form state
//   const [mode, setMode] = useState("signup"); // "signup" or "login"
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState(""); // used for login/signup optionally
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // UI state
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   useEffect(() => {
//     // GET request: fetch posts and normalize them so display expects Name & Password keys
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((result) => {
//         const normalized = result.map((r) => ({
//           id: r.id,
//           Name: r.title ?? r.Name ?? "No title",
//           Password: r.body ?? r.Password ?? "No body",
//         }));
//         setData(normalized);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const resetMessages = () => {
//     setError("");
//     setSuccess("");
//   };

//   const validate = () => {
//     resetMessages();
//     if (!name.trim()) {
//       setError("Please enter your name.");
//       return false;
//     }
//     if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
//       setError("Please enter a valid email address.");
//       return false;
//     }
//     if (!password) {
//       setError("Please enter a password.");
//       return false;
//     }
//     if (mode === "signup" && password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return false;
//     }
//     if (mode === "signup" && password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return false;
//     }
//     return true;
//   };

//   // POST request — make payload and send to API
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setSubmitting(true);
//     const payload = {
//       Name: name,
//       Email: email,
//       Password: password,
//       mode,
//       createdAt: new Date().toISOString(),
//     };

//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const result = await res.json();

//       // normalize returned object (jsonplaceholder returns id/title/body)
//       const normalized = {
//         id: result.id ?? Math.random(),
//         Name: result.Name ?? result.title ?? name,
//         Password: result.Password ?? result.body ?? "—",
//       };

//       setData((prev) => [normalized, ...prev]);
//       setSuccess(
//         `${mode === "signup" ? "Signed up" : "Logged in"} successfully!`
//       );
//       // clear form (but keep email if login)
//       setName("");
//       setPassword("");
//       setConfirmPassword("");
//       if (mode === "signup") setEmail("");
//     } catch (err) {
//       console.error("Error sending post:", err);
//       setError("Network error. Try again.");
//     } finally {
//       setSubmitting(false);
//       // clear message after 3.5s
//       setTimeout(() => {
//         setSuccess("");
//         setError("");
//       }, 3500);
//     }
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
//         <div className="p-6 rounded-2xl shadow-lg bg-white flex items-center gap-4">
//           <svg
//             className="animate-spin h-8 w-8"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             aria-hidden
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//             />
//           </svg>
//           <span className="text-gray-700 font-medium">Loading posts...</span>
//         </div>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-rose-50 py-12 px-4">
//       <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
//         {/* Left: Form card */}
//         <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
//                 {mode === "signup" ? "Create account" : "Welcome back"}
//               </h1>
//               <p className="text-sm text-gray-500 mt-1">
//                 {mode === "signup"
//                   ? "Sign up to get full access to the demo dashboard."
//                   : "Log in to continue to your demo dashboard."}
//               </p>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => {
//                   setMode((m) => (m === "signup" ? "login" : "signup"));
//                   resetMessages();
//                 }}
//                 className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
//                 aria-pressed={mode === "signup" ? "false" : "true"}
//                 title="Toggle login/signup"
//               >
//                 {mode === "signup" ? "Switch to Log In" : "Switch to Sign Up"}
//               </button>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//             <div>
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="name"
//               >
//                 Full name
//               </label>
//               <input
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
//                 placeholder="Your full name"
//               />
//             </div>

//             <div>
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-1"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
//                   placeholder="Enter a secure password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((s) => !s)}
//                   className="absolute inset-y-0 right-2 flex items-center px-2 text-sm text-gray-500"
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             {mode === "signup" && (
//               <div>
//                 <label
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                   htmlFor="confirm"
//                 >
//                   Confirm password
//                 </label>
//                 <input
//                   id="confirm"
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
//                   placeholder="Retype your password"
//                 />
//               </div>
//             )}

//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2 text-sm text-gray-600">
//                 <input
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 rounded"
//                 />
//                 <span>Remember me</span>
//               </label>
//               <button
//                 type="button"
//                 className="text-sm text-indigo-600 hover:underline"
//                 onClick={() =>
//                   alert("Forgot password flow not implemented in demo.")
//                 }
//               >
//                 Forgot password?
//               </button>
//             </div>

//             {/* error / success */}
//             {error && (
//               <div className="text-sm text-red-600 font-medium">{error}</div>
//             )}
//             {success && (
//               <div className="text-sm text-green-600 font-medium">
//                 {success}
//               </div>
//             )}

//             <div className="flex gap-3 items-center">
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold shadow hover:scale-[1.01] transition-transform disabled:opacity-60"
//               >
//                 {submitting
//                   ? mode === "signup"
//                     ? "Signing up..."
//                     : "Logging in..."
//                   : mode === "signup"
//                   ? "Create account"
//                   : "Log in"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setName("Demo User");
//                   setEmail("demo@example.com");
//                   setPassword("password123");
//                   setConfirmPassword("password123");
//                 }}
//                 className="py-2 px-4 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50"
//                 title="Fill demo credentials"
//               >
//                 Demo
//               </button>
//             </div>

//             <div className="pt-2">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200" />
//                 </div>
//                 <div className="relative flex justify-center text-xs">
//                   <span className="bg-white px-2 text-gray-400">
//                     or continue with
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-3 flex gap-3">
//                 <button
//                   type="button"
//                   className="flex-1 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50"
//                 >
//                   Google
//                 </button>
//                 <button
//                   type="button"
//                   className="flex-1 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50"
//                 >
//                   Github
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Right: Recent posts / activity */}
//         <aside className="space-y-4">
//           <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
//             <h2 className="text-lg font-bold text-gray-900 mb-1">
//               Recent activity
//             </h2>
//             <p className="text-sm text-gray-500 mb-4">
//               Latest posts from demo API (first 5 shown)
//             </p>

//             <ul className="space-y-3">
//               {data.slice(0, 5).map((item) => (
//                 <li
//                   key={item.id}
//                   className="p-3 rounded-lg border border-gray-100 hover:shadow-sm transition flex items-start gap-3"
//                 >
//                   <div className="flex-shrink-0 rounded-full h-10 w-10 bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
//                     {String(item.Name || "")
//                       .charAt(0)
//                       .toUpperCase() || "A"}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start gap-2">
//                       <div>
//                         <p className="text-sm font-semibold text-gray-900">
//                           {item.Name}
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1">
//                           {item.Password.substring(0, 80)}
//                           {item.Password.length > 80 ? "…" : ""}
//                         </p>
//                       </div>
//                       <div className="text-xs text-gray-400">
//                         {/* placeholder timestamp */}just now
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-4 flex justify-between items-center">
//               <button
//                 onClick={() => {
//                   // simulate load more
//                   const more = data.slice(5, 10);
//                   if (more.length === 0) {
//                     alert("No more demo items.");
//                   } else {
//                     setData((prev) => [...prev, ...more]);
//                   }
//                 }}
//                 className="text-sm text-indigo-600 hover:underline"
//               >
//                 View more
//               </button>

//               <span className="text-xs text-gray-400">
//                 Demo API: jsonplaceholder.typicode.com
//               </span>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
//             <h3 className="text-sm font-medium text-gray-700">Tips</h3>
//             <ul className="list-disc pl-5 mt-2 text-sm text-gray-500 space-y-1">
//               <li>Try "Demo" to auto-fill fields.</li>
//               <li>Switch between Sign Up and Log In quickly.</li>
//               <li>
//                 All network requests go to a public demo API (no real accounts
//                 created).
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

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
        setData([result, ...data]);
        setTitle("");
        setBody("");
      })
      .catch((err) => console.error("Error sending post:", err));
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-center text-gray-600 text-3xl">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8 md:flex md:items-start md:justify-between">
          <div className="md:flex-1">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
              Sign Up / Log In — Dummy API
            </h2>
            <p className="text-sm text-gray-500">
              Simple demo using jsonplaceholder.typicode.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 p-6 sm:p-8 md:flex gap-6">
          <form onSubmit={handleSubmit} className="flex-1 space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800"
                type="text"
                placeholder="Enter Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800"
                placeholder="Enter Password"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                type="password"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:brightness-105 transition"
              >
                Send Post
              </button>
            </div>
          </form>

          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Recent posts (demo)
              </h3>

              <ul className="divide-y divide-gray-100">
                {data.slice(0, 5).map((item, index) => (
                  <li key={index} className="py-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                        {String(item.Name || "")
                          .charAt(0)
                          .toUpperCase() || "A"}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {item.Name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-3">
                          {item.Password}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-center">
                <button className="text-xs text-indigo-600 hover:underline">
                  View more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-4 text-center text-xs text-gray-400">
          Demo API: by Love with Mansoor Khoshal
        </div>
      </div>
    </div>
  );
}

export default App;
