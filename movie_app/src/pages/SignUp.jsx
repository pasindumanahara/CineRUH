export default function SignUp() {
  return (
    <div className="font-poppins relative">
      <div className="bg-[#0B090A] h-[100vh] flex justify-around items-center z-1">
        <img
          src="/st.jpg"
          alt="bg-image"
          className="w-full h-full absolute z-0 opacity-20 saturate-0"
        />
        <div className="z-1">
          <h1 className="text-5xl font-semibold mb-2 text-[#D9D9D9]">
            Explore the world of <br /> Movies and TV Shows
          </h1>
          <p className="text-lg mb-7 text-[#aaaaaa]">
            Sign Up to save your favorite movies and TV-shows, rate <br />
            them, discuss about them add to watch later and more
          </p>
          <h2 className="text-4xl text-[#E74C3C]">CSC113a Movies</h2>
        </div>
        <div className="z-1">
          <h1 className="text-[#D9D9D9] text-4xl font-semibold mb-8">
            Sign Up
          </h1>
          <form className="flex flex-col gap-y-6">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#D9D9D9] ml-4 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Group Nineteen"
                className="h-14 bg-[#252B30] px-4 w-[400px] placeholder-[#797979] placeholder:font-medium focus:ring-1 focus:ring-[#282828] rounded-lg text-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-[#D9D9D9] ml-4 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="group19@domain.lk"
                className="h-14 bg-[#252B30] px-4 w-[400px] placeholder-[#797979] placeholder:font-medium focus:ring-1 focus:ring-[#282828] rounded-lg text-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#D9D9D9] ml-4 mb-1">
                Password
              </label>
              <input
                type="password"
                className="h-14 bg-[#252B30] px-4 w-[400px] placeholder-[#95A5A6] placeholder:font-medium focus:ring-1 focus:ring-[#282828] rounded-lg text-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#D9D9D9] ml-4 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="h-14 bg-[#252B30] px-4 w-[400px] placeholder-[#95A5A6] placeholder:font-medium focus:ring-1 focus:ring-[#282828] rounded-lg text-[#D9D9D9]"
              />
            </div>
            <button className="bg-[#E74C3C] text-[#D9D9D9] h-14 rounded-lg text-lg font-semibold">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
