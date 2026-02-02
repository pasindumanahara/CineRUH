// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     fetch("http://localhost/login.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password })
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.status === "success") {
//           localStorage.setItem("email", data.email);
//           localStorage.setItem("name", data.name);
//           localStorage.setItem("isLoggedIn", "true");
//           localStorage.setItem("searchBar",true);

//           setSuccessMessage(data.name + " " + data.message);
//           setErrorMessage("");

//           setTimeout(() => navigate("/home"), 500);
//         } else {
//           setErrorMessage(data.message);
//         }
//       })
//       .catch(() => setErrorMessage("Server error!"));
//   };

//   const toSignUp = () => {
//     setTimeout(() => navigate("/signup"), 300);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-zinc-900">
//       <div className="w-full max-w-sm bg-zinc-800 p-6 rounded-lg shadow-md">
        
//         <h1 className="text-center text-2xl font-semibold text-white mb-1">
//           CSC113a Movies TEST LOGIN
//         </h1>
//         <p className="text-center text-sm text-zinc-400 mb-6">
          
//         </p>

//         <form onSubmit={handleLogin} className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-sm text-zinc-300 mb-1">Email</label>
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="csc113a@gmail.com"
//               className="px-3 py-2 rounded bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-sm text-zinc-300 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="px-3 py-2 rounded bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded"
//           >
//             Log In
//           </button>
//         </form>

//         {errorMessage && (
//           <p className="text-center text-sm text-red-500 mt-3">
//             {errorMessage}
//           </p>
//         )}

//         {successMessage && (
//           <p className="text-center text-sm text-green-500 mt-3">
//             {successMessage}
//           </p>
//         )}

//         <p className="text-center text-sm text-zinc-400 mt-5">
//           Don’t have an account?{" "}
//           <span
//             onClick={toSignUp}
//             className="text-red-500 cursor-pointer hover:underline"
//           >
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }


// TODO :: Change the back ground color of the bg img,
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // get the navigate function
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          // Set data to local storage TODO :: remove session data
          localStorage.setItem("email", data.email);
          localStorage.setItem("name", data.name);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("searchBar",true);

          setSuccessMessage(data.name+" "+data.message);
          setErrorMessage("");
          // This will manage logged in status, stored in locally
          localStorage.setItem("isLoggedIn", "true");
          // This will navigate to the home  TODO::Change later for any page, for testing only adjust the time
          setTimeout(() => {
            navigate("/home"); 
          }, 500); 
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch(err => {
        console.error(err);
        setErrorMessage("Server error!");
      });
      
  };

  const toSignUp = () => {
    setTimeout(() => {
      navigate("/signup");
    }, 500);
  };

  return (
    <div className="font-poppins relative">
      <div className="bg-[#0B090A] h-[100vh] flex justify-around items-center z-1">
        <img
          src="/bb.jpg"
          alt="bg-image"
          className="w-full h-full absolute z-0 opacity-10 saturate-0"
        />
        <div className="z-1">
          <h1 className="text-5xl font-semibold mb-2 text-[#D9D9D9]">
            Welcome back to <br /> CSC113a Movies
          </h1>
          <p className="text-lg mb-7 text-[#aaaaaa]">
            Log In to save your favorite movies and TV-shows, rate <br />
            them, discuss about them add to watch later and more
          </p>
          <h2 className="text-4xl text-[#E74C3C]">CSC113a Movies</h2>
        </div>
        <div className="z-1">
          <h1 className="text-[#D9D9D9] text-4xl font-semibold mb-8">
            Log In
          </h1>
          <div onSubmit={handleLogin} className="flex flex-col gap-y-6">
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[#D9D9D9] ml-4 mb-1">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="csc113a@gmail.com"
                className="h-14 bg-[#252B30] px-4 w-[400px] placeholder-[#797979] placeholder:font-medium focus:ring-1 focus:ring-[#282828] rounded-lg text-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#D9D9D9] ml-4 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 bg-[#252B30] px-4 w-[400px] placeholder-[#95A5A6] placeholder:font-medium focus:ring-1 focus:ring-[#282828] rounded-lg text-[#D9D9D9]"
              />
            </div>
            <button 
              onClick={handleLogin}
              className="bg-[#E74C3C] text-[#D9D9D9] h-14 rounded-lg text-lg font-semibold hover:bg-[#C0392B] transition-colors"
            >
              Log In
            </button>
              <p className="text-center text-sm font-medium mt-2 text-[#E74C3C]">
                {errorMessage}
              </p>

              <p className="text-center text-sm font-medium mt-2 text-green-500">
                {successMessage}
              </p>
            
            <p className="text-center text-sm font-medium text-[#D9D9D9]">
              Don't have an account?{" "}
              <span className="text-[#E74C3C] cursor-pointer" onClick={toSignUp}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

