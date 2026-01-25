import Details from "./Details";
import SearchItem from "./SearchItem";
import {useState} from "react";
import NavBar from "../components/NavBar";

export default function DetailPane({movies, loading}) {
  const [selectedId, setSelectedId] = useState("");
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="font-poppins bg-[#0B090A] flex items-center justify-center gap-9 py-8">
      <div>
        <h1 className="text-[#D9D9D9] text-2xl mb-5 ">Search Result</h1>
        <div className="bg-[#161A1D] w-87 h-155 rounded-xl flex flex-col items-center justify-center overflow-y-scroll">
          <div className="max-h-135">
            {loading ? (
              <p className="text-[#95A5A6]">Loading...</p>
            ) : movies.length === 0 ? (
              <p className="text-[#95A5A6]">No details to show</p>
            ) : (
              movies.map((movie) => (
                <SearchItem
                  details={movie}
                  key={movie.id}
                  onClick={() => {
                    setSelectedId(movie.id);
                    setSelectedType(movie.media_type);
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[#D9D9D9] text-2xl mb-5">Details</h1>
        <div className="bg-[#161A1D] min-w-206 min-h-135 max-h-135 rounded-xl flex items-center justify-center p-12 overflow-y-scroll">
          {/* <p className="text-[#95A5A6]">No details to show</p> */}

          <div className="max-h-135">
            <Details id={selectedId} type={selectedType} />
          </div>
        </div>
      </div>
    </div>
  );
}
