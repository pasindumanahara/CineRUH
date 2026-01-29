// TODO :: write all functions for all

import {useEffect, useState} from "react";
import Cast from "./Cast";

export default function Details({id, type}) {
  const [data, setData] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // Track movie is watched, added to fav or added to watch later
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  const API_KEY = "875a977ab94cd7108c47a3bed943830f";
  
  useEffect(() => {
    if (!id) return;
    const getData = async () => {
      setDetailsLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&append_to_response=credits`,
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setDetailsLoading(false);
      }
    };

    getData();
  }, [id, type]);

  // Call checkMovieStatus when data loads
  useEffect(() => {
    if (data) {
      checkMovieStatus();
    }
  }, [data]);

  // Check exists in the fav , watch later and watched list
  const checkMovieStatus = () => {  
    // Fav
    fetch("http://localhost/checkFav.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        movie_id: data.id,
        "email": localStorage.getItem("email")
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === "success") {
          setIsInFavorites(result.in_favorites);
        } else {
          setIsInFavorites(false);
        }
      })
      .catch(err => {
        console.error("Error checking favorites:", err);
        setIsInFavorites(false);
      });

    // Check  watch later list

    fetch("http://localhost/checkWatchLater.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        movie_id: data.id,
        "email": localStorage.getItem("email")
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === "success") {
          setIsInWatchlist(result.in_watchlater);
        } else {
          setIsInWatchlist(false);
        }
      })
      .catch(err => {
        console.error("Error checking watch later:", err);
        setIsInWatchlist(false);
      });

    // Check watched
      fetch("http://localhost/checkWatched.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        movie_id: data.id,
        "email": localStorage.getItem("email")
      })
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === "success") {
          setIsWatched(result.is_watched);          
        } else {
          setIsWatched(false);
        }
      })
      .catch(err => {
        console.error("Error checking watched:", err);
        setIsWatched(false);
      });

    };

  // Favorite
  const toggleFavorites = () => {
    if (!data) return;

    if (isInFavorites) {
      //Remove from favorites
       fetch("http://localhost/removeFromFav.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie_id: data.id,
          "email": localStorage.getItem("email")
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setIsInFavorites(false);
          }
        })
        .catch(err => {
          console.error(err);
        });  
      
    } else {

      // Add to favorites
      fetch("http://localhost/saveToFav.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie_id: data.id,
          "email": localStorage.getItem("email")
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setIsInFavorites(true);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  // Toggle watchlist
  const toggleWatchlist = () => {
    if (!data) return;

    if (isInWatchlist) {
      //Remove from watchlist
       fetch("http://localhost/removeFromWatchLater.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie_id: data.id,
          "email": localStorage.getItem("email")
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setIsInWatchlist(false);
            
          }
        })
        .catch(err => {
          console.error(err);
        });
   
      
    } else {
      
      // Add to watch later list
      fetch("http://localhost/saveToWatchLater.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie_id: data.id,
          "email": localStorage.getItem("email")
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setIsInWatchlist(true);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  // Toggle watched
  const toggleWatched = () => {
    if (!data) return;

    if (isWatched) {
      // Remove from watched
      fetch("http://localhost/removeFromWatched.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie_id: data.id,
          "email": localStorage.getItem("email")
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setIsWatched(false);
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      // Add to watched
      fetch("http://localhost/saveToWatched.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          movie_id: data.id,
          "email": localStorage.getItem("email")
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setIsWatched(true);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  console.log(data);
  return (
    <div
      className={`font-poppins my-8 bg-[#161A1D] text-[#ECF0F1] min-h-screen ${detailsLoading || !data ? "flex items-center justify-center" : ""}`}
    >
      {detailsLoading ? (
        <p className="text-[#95A5A6]">Loading...</p>
      ) : !data ? (
        <p className="text-[#95A5A6]">No details to show</p>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold">
                {data.title || data.name}
              </h1>
              <div>2015 • Action • Thriller</div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <button onClick={toggleWatchlist}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* first one - favorites */}
                  <path
                    d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z"
                    fill={isInWatchlist ? "#fe0505" : "#666"}
                  />
                  <path
                    d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4089 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.76 19.5189L13.69 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891ZM11 12.7489H9.75V13.9989C9.75 14.4089 9.41 14.7489 9 14.7489C8.59 14.7489 8.25 14.4089 8.25 13.9989V12.7489H7C6.59 12.7489 6.25 12.4089 6.25 11.9989C6.25 11.5889 6.59 11.2489 7 11.2489H8.25V9.99891C8.25 9.58891 8.59 9.24891 9 9.24891C9.41 9.24891 9.75 9.58891 9.75 9.99891V11.2489H11C11.41 11.2489 11.75 11.5889 11.75 11.9989C11.75 12.4089 11.41 12.7489 11 12.7489Z"
                    fill={isInWatchlist ? "#fff" : "#666"}
                  />
                </svg>
              </button>
              <button onClick={toggleFavorites}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* heart - watchlist */}
                  <path
                    d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                    fill={isInFavorites ? "#FF6224" : "#666"}
                  />
                </svg>
              </button>
              <button onClick={toggleWatched}>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>done [#1478]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {/* third one - watched */}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-139.000000, -400.000000)"
                      fill={isWatched ? "#0fff1b" : "#666"}
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M97.23065,248.168 L92.7776,252.408 C92.366,252.8 91.69925,252.8 91.28765,252.408 L89.0627,250.289 C88.65215,249.899 88.65215,249.266 89.0627,248.875 C89.4722,248.485 90.1379,248.485 90.5474,248.875 L91.2908,249.583 C91.7003,249.973 92.36495,249.973 92.7755,249.583 L95.74595,246.754 C96.15545,246.363 96.8201,246.363 97.23065,246.754 C97.6412,247.144 97.6412,247.777 97.23065,248.168 M101.9,240 L85.1,240 C83.93975,240 83,240.895 83,242 L83,258 C83,259.104 83.93975,260 85.1,260 L101.9,260 C103.06025,260 104,259.104 104,258 L104,242 C104,240.895 103.06025,240 101.9,240"
                          id="done-[#1478]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-8 mb-6">
            <div
              className="min-w-52 h-78 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : "/poster-placeholder.png"})`,
              }}
            ></div>
            <div>
              <div className="mb-6">
                <h2 className="font-semibold text-lg">About</h2>
                <p className="leading-relaxed wrap-break-words whitespace-normal">
                  {data.overview}
                </p>
              </div>
              <div className="flex items-center gap-8 mb-6">
                <div>
                  <h2 className="font-semibold text-lg">Director</h2>
                  <p className="leading-4">Vince Gilligan</p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Producer</h2>
                  <p className="leading-4">Vince Gilligan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Cast</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 bg-[#252B30] p-8 rounded-lg">
              {data.credits.cast.map((member) => (
                <Cast key={member.id} member={member} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pb-8">
            <div className="flex items-center gap-2 font-mono font-semibold">
              <div className="w-8 h-4.5 bg-[url('/imdb.png')] bg-cover bg-center rounded-sm"></div>
              <span>9.6/10 IMDb</span>
            </div>
            <div>
              <select
                name="ratings"
                id="ratings"
                className="bg-[#252B30] w-39 px-4 py-2 rounded-lg mr-4"
              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
                <option value="6">6 Stars</option>
                <option value="7">7 Stars</option>
                <option value="8">8 Stars</option>
                <option value="9">9 Stars</option>
                <option value="10">10 Stars</option>
              </select>
              <button className="h-10 bg-[#E74C3C] rounded-lg px-8">
                Rate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}