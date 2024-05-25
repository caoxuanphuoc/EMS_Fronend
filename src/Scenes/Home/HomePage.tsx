import { PagedClassResultRequestDto } from "../../Services/Classes/dto/PagedClassResultRequestDto"
import Course from "../../Components/Course/CourseDiv"
import Slider from "../../Components/Header/Slider"
import SearchBar from "../../Components/SearchDiv/Search"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { useEffect } from "react"
import { GetAllClassAction } from "../../redux/slices/Classes/ClassesSlice"
import { RootState } from "../../redux/store"
import imgDefault from "../../assets/Images/defaultClass.jpg"
const HomePage = () => {
    const dispatch = useAppDispatch();

    //send
    const data = useAppSelector((state: RootState) => { return state.classes.data?.items })
    const listClass = data ? data : [];
    useEffect(() => {
        const resgData: PagedClassResultRequestDto = {
            maxResultCount: 10,
            skipCount: 0
        }
        dispatch(GetAllClassAction(resgData))
    }, [])
    return (
        <div >
            <div className="flex">
                <div className="w-[500px] ml-7 mt-[220px]">
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
            <div className="px-10 flex flex-wrap gap-10 justify-center mt-10">
                {
                    listClass.map((e) => (
                        <Course key={e.id}
                            id={e.id}
                            title={e.className}
                            img={e.image ? e.image : imgDefault}
                            startDate={e.startDate}
                            courseName={e.course.courseName}
                            fee={e.course.courseFee}
                            showDiscount={true}
                        />
                    )
                    )
                }
            </div>
        </div >
    )
}

export default HomePage
