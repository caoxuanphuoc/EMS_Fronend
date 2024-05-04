import Course from "../Course/CourseDiv"
import Slider from "../Header/Slider"
import SearchBar from "../SearchDiv/Search"

const HomePage = (props: any) => {
    return (
        <div className="my-4">
            <div className="flex my-4">
                <div className="w-[500px] ml-7 mt-[100px]">
                    {/* <h1 className="text-7xl border-solid">M Tracker</h1> */}
                    <p className="text-6xl font-semibold leading-normal text-blue-500">M Tracker</p>
                    <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 mb-4 text-blue-600" >Nơi tri thức là sức mạnh!</p>

                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-10sm px-5 py-2.5 ml-[80px] text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <a href="#search-bar">Đăng ký ngay</a> </button>
                </div>
                <Slider />
            </div>
            <div className="pt-10" id="search-bar">
                <SearchBar />
            </div>
            <div className="px-10 flex flex-wrap gap-5 justify-center">
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </div >
    )
}

export default HomePage
