export default function SearchItem() {
  return (
    <div className="font-poppins bg-[#252B30] text-[#D9D9D9] inline-flex items-center gap-4 w-75 p-2 rounded-lg hover:bg-[#2C343B] hover:cursor-pointer">
      <div className="w-9 h-14 rounded-lg bg-[url('/bbposter.jpg')] bg-center bg-cover"></div>
      <div>
        <h4 className="font-semibold text-lg">Breaking Bad</h4>
        <div className="text-xs">2015 • Action • Thriller</div>
      </div>
    </div>
  );
}
