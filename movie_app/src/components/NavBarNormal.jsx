export default function NavBarNormal() {
  const toHome = ()=>{
      setTimeout(()=>{  
        navigate("/home")
      },500);
    }
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
  return (
    <div className="font-poppins bg-[#0B090A] flex justify-between items-center px-26 py-4">
      <ul className="text-[#ECF0F1] flex justify-between items-center gap-8">
        <li className="hover:cursor-pointer" onClick={toHome}>Home</li>
        <li className="hover:cursor-pointer">Contact Us</li>
        <li className="hover:cursor-pointer">About Project</li>
      </ul>
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