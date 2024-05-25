
const Footer = () => {
    return (
        <div className="footer p-[5rem] bg-blue-400 rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center">
            <div className="">
                <div className="logoDiv">
                    <h1 className=" text-[25px] text-white ">
                        <strong>ECMS</strong>
                    </h1>
                    <p className="font-medium text-blue-50" >
                        Học tập là quá trình nỗ lực không ngừng nghĩ, M Tracker rất vui khi có thể đồng hành cùng bạn trên chặng đường đầy thử thách này.
                        <br />   MTracker Nơi tri thức là sức mạnh.
                    </p>
                </div>
            </div>
            <div className="grid ml-10">
                <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Company
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Featurea</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">New</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>

            <div className="grid">
                <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Resource
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Featurea</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">New</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>

            <div className="grid">
                <span className=" divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                    Company
                </span>
                <div className="grid gap-3">
                    <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">Featurea</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">New</li>
                    <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                </div>
            </div>
        </div>
    )
}
export default Footer