export default function WatchItem({num}){
    return <div className="flex items-center justify-center gap-4 text-white bg-[#1f1f23]  py-2 px-4 rounded-lg hover:bg-[#2C343B] hover:cursor-pointer">
        <span  className="text-xl ">1</span>
        <p className="text-xl">{num}</p>
    </div>
}