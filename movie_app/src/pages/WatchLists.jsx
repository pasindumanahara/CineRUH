import WatchItem from "../components/WatchItem"
import NavBar from "../components/NavBar"
import { useState } from "react"

export default function WatchLists() {
    const [fav, setFav] = useState([]);
    const [later, setLater] = useState([]);
    const [watched, setWatched] = useState([]);

    const deleteAccount = () => {
        fetch("http://localhost/deleteUser.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: localStorage.getItem('email')
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    alert(data.message);
                    toLogout();
                } else {
                    console.err(" Error");
                }
            })
            .catch(err => {
                console.error(err);
                console.err("Server Error");
            });
    };
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

    fetch("http://localhost/lists.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: localStorage.getItem('email')
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                setFav(data.fav_list);
                setLater(data.watch_later_list);
                setWatched(data.watched_list);
            } else {
                console.err(" Error");
            }
        })
        .catch(err => {
            console.error(err);
            console.err("Server Error");
        });


    return (
        <div>
            <NavBar />

            <div className="bg-[#0B090A] min-h-screen pt-8 pb-12">
                <div className="max-w-7xl mx-auto px-4 mb-8">
                    <div className="font-poppins bg-[#161A1D] rounded-lg p-6 flex items-center justify-between w-[1032px] mx-auto">
                        <div className="flex items-center gap-6">
                            <div className="w-30 h-30 rounded-full bg-[#ffffff] overflow-hidden flex items-center justify-center">
                                <img
                                    src="/user.png"
                                    alt="Profile"
                                    className="w-75% h-75% object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl text-white font-bold">{localStorage.getItem('name')}</h2>
                                <p className="text-gray-400 text-sm">{localStorage.getItem('email')}</p>
                            </div>
                        </div>


                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors" onClick={deleteAccount()}>
                            Delete Account
                        </button>
                    </div>
                </div>

                {/* Existing Watch Lists */}
                <div className="flex items-start justify-center gap-12 px-4">
                    <div className="font-poppins w-[320px] bg-[#161A1D] h-160 rounded-lg">
                        <h1 className="text-3xl mb-5 text-white font-bold p-6">Favorites</h1>
                        <div className="flex flex-col ">
                            {
                                fav.map((item, i) => <WatchItem key={i} num={i} name={item} />)
                            }
                        </div>
                    </div>
                    <div className="font-poppins w-[320px] bg-[#161A1D] h-160 rounded-lg">
                        <h1 className="text-3xl mb-5 text-white font-bold p-6">Watch Later</h1>
                        <div className="flex flex-col ">
                            {
                                later.map((item, i) => <WatchItem key={i} num={i} name={item} />)
                            }
                        </div>
                    </div>
                    <div className="font-poppins w-[320px] bg-[#161A1D] h-160 rounded-lg">
                        <h1 className="text-3xl mb-5 text-white font-bold p-6">Watched</h1>
                        <div className="flex flex-col ">
                            {
                                watched.map((item, i) => <WatchItem key={i} num={i} name={item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}