export default function WatchItem({num,name}){
    return <div className="flex items-center justify-center gap-4 text-white bg-[#161A1D]  py-2 px-4 rounded-lg hover:bg-[#2C343B] hover:cursor-pointer">
        <span  className="text-xl ">{num+1}</span>
        <p className="text-xl">{name}</p>
    </div>
}