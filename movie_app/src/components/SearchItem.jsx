export default function SearchItem({details, onClick}) {
  const POSTER_PATH = `https://image.tmdb.org/t/p/original/${details.poster_path}`;
  return (
    <div
      onClick={onClick}
      className="font-poppins bg-[#161A1D] text-[#D9D9D9] inline-flex items-center gap-4 min-w-full p-4 rounded-lg hover:bg-[#2C343B] hover:cursor-pointer"
    >
      <div
        className="min-w-9 min-h-14 rounded-lg bg-center bg-cover"
        style={{
          backgroundImage: `url(${details.poster_path ? POSTER_PATH : "/poster-placeholder.png"})`,
        }}
      ></div>
      <div>
        <h4 className="font-semibold text-lg leading-5.5">
          {details.title || details.name}
        </h4>
        <div className="text-sm">
          {details.media_type === "tv" ? "TV-Show" : "Movie"}
        </div>
      </div>
    </div>
  );
}
