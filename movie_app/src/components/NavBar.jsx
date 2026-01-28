import {useNavigate} from "react-router-dom";

export default function NavBar({query, setQuery, searchMovies}) {
  const API_KEY = "875a977ab94cd7108c47a3bed943830f";
  const navigate = useNavigate();
  const toLogout = () => {
    fetch("http://localhost/logout.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          // Removing local storage item
          localStorage.removeItem("isLoggedIn");
          localStorage.clear();
          setTimeout(() => {
            navigate("/"); 
          }, 500);
        }
      })
      .catch(err => {
        console.error(err);
      });
    };

    const toAbout = ()=>{
      localStorage.setItem("searchBar",false);
      setTimeout(()=>{  
        navigate("/aboutproject")
      },500);
    }
    const toHome = ()=>{
      localStorage.setItem("searchBar",true);
      setTimeout(()=>{  
        navigate("/home")
      },500);
    }
    
  return (
    <div className="font-poppins bg-[#0B090A] flex justify-between items-center px-26 py-4">
      <ul className="text-[#ECF0F1] flex justify-between items-center gap-8">
        <li className="hover:cursor-pointer" onClick={toHome}>Home</li>
        <li className="hover:cursor-pointer">Contact Us</li>
        <li className="hover:cursor-pointer" onClick={toAbout}>About Project</li>
      </ul>
      <div className="w-100 h-14 bg-[#252B30] rounded-xl flex justify-between items-center pl-5 pr-2">
        <input
          type="text"
          placeholder="Search for movies and shows"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="focus:outline-none placeholder:text-[#797979] text-[#ECF0F1] w-64"
          disabled={localStorage.getItem("searchBar") === true}
        />
        <button
          className="w-10 h-10 bg-[#E74C3C] rounded-xl flex items-center justify-center hover:cursor-pointer"
          onClick={searchMovies}
          disabled={localStorage.getItem("searchBar") === true}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div>
        <button className="bg-[#252B30] text-[#ECF0F1] py-2 px-5 font-[15px] rounded-lg mr-6 hover:cursor-pointer">
          Account
        </button>
        <button className="bg-[#E74C3C] text-[#ECF0F1] py-2 px-5 font-[15px] rounded-lg hover:cursor-pointer" onClick={toLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
