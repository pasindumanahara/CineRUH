import WatchItem from "../components/WatchItem"
import NavBar from "../components/NavBar"
import { useState } from "react"

export default function WatchLists() {
    const [fav, setFav] = useState([]);
    const [later, setLater] = useState([]);
    const [watched, setWatched] = useState([]);

    const arr = [1, 2, 3, 4,5]

    return (
        <div>
            <NavBar />
            <div className="flex items-center justify-center gap-12 pt-8 bg-[#161A1D]">
                <div className="font-poppins w-[320px] bg-[#1f1f23] h-160 rounded-lg">
                    <h1 className="text-3xl mb-5 text-white font-bold p-6">Favorites</h1>
                    <div className="flex flex-col ">
                        {
                            arr.map((item, i) => <WatchItem num={item}/>)
                        }
                    </div>
                </div>
                <div className="font-poppins w-[320px] bg-[#161A1D] h-160 rounded-lg">
                    <h1 className="text-3xl mb-5 text-white font-bold p-6">Watch Later</h1>
                    <div className="flex flex-col ">
                        {
                            arr.map((item, i) => <WatchItem num={item}/>)
                        }
                    </div>
                </div>
                <div className="font-poppins w-[320px] bg-[#161A1D] h-160 rounded-lg">
                    <h1 className="text-3xl mb-5 text-white font-bold p-6">Watched</h1>
                    <div className="flex flex-col ">
                       {
                            arr.map((item, i) => <WatchItem num={item}/>)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}