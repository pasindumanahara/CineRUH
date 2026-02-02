export default function Cast({member}) {
  const PROFILE_PATH = `https://image.tmdb.org/t/p/w45/${member.profile_path}`;

  return (
    <div className="flex items-center justify-between gap-2 w-max rounded-lg">
      <div
        className="w-12 h-12 bg-red-500 rounded-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${member.profile_path ? PROFILE_PATH : "/poster-placeholder.png"})`,
        }}
      ></div>
      <div className="w-max">
        <h5 className="font-semibold text-[15px]">{member.name}</h5>
        <h6 className="text-[13px]">{member.character}</h6>
      </div>
    </div>
  );
}
