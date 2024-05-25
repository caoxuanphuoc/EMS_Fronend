import { useLocation, useNavigate } from "react-router-dom"
import imgDefault from "../../assets/Images/defaultClass.jpg"
import { MdClass, MdAssignmentInd, MdAvTimer, MdCheck } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { PagedClassResultRequestDto } from "../../Services/Classes/dto/PagedClassResultRequestDto";
import { GetAllClassAction } from "../../redux/slices/Classes/ClassesSlice";
import Course from "../../Components/Course/CourseDiv";
import { NumberHelpers } from "../../Helpers/NumberHelper";
import { DateHelpers } from "../../Helpers/DateHelper";
import { ClassByIdAction } from "../../redux/slices/Classes/ClassGetByIdSlice";
// interface DetailClass {
//     nameClass: string,
//     description: string,
//     fee: number,
//     nameCourse: string,
//     startTime: string
// }
const ClassDetailScreen = () => {
    const location = useLocation()
    console.log("location", location);
    const dispatch = useAppDispatch();
    //send
    const data = useAppSelector((state: RootState) => { return state.classes.data?.items })
    const listClass = data ? data : [];
    const dataDetail = useAppSelector((state: RootState) => { return state.classDetail.data })
    const userInfo = useAppSelector((stare: RootState) => { return stare.session.data?.user })
    useEffect(() => {
        const resgData: PagedClassResultRequestDto = {
            maxResultCount: 10,
            skipCount: 0
        }
        dispatch(ClassByIdAction(location.state.id))
        dispatch(GetAllClassAction(resgData))
    }, [location])
    const navigate = useNavigate();
    const hanldeValidateOrder = () => {
        let classId = location.state.id;
        let userId = userInfo?.id;
        if (userId == undefined || userId == null) {
            navigate(
                "/auth"
            );
        }

        navigate(
            "/payment?idClass=" + classId + "&userId=" + userId
        );
    }
    return (
        <div className='app-container ' >
            <div className=" grid grid-rows-2 grid-cols-3 gap-4 bg mb-10 ">
                <div className=" row-span-2 col-span-2  mt-[100px] p-5 pl-[50px]" id='detailClass'>
                    <div className="h-[150px] row-span-2">
                        <h2 className="text-3xl font-bold">{dataDetail?.className}</h2>
                        <p>{dataDetail?.className}</p>
                    </div>
                    <div className="row-span-2">
                        <h3 className="font-bold text-2xl">Bạn sẽ học được gì:</h3>
                        <ul className="list-disc">
                            <div className="flex justify-between gap-4">
                                <li className="mt-3 ">
                                    <span className="flex items-center gap-1">
                                        <MdCheck color="green" />
                                        <div className="w-[300px] text-sm">
                                        Nắm chắc toàn bộ các kiến thức theo từng chuyên đề bám sát cấu trúc đề thi.
                                        </div>
                                    </span>
                                </li>
                                <li className="mt-3 ">
                                    <span className="flex items-center gap-1">
                                        <MdCheck color="green" />
                                        <div className="w-[300px] text-sm">
                                        Hình thành tư duy phản xạ giải quyết các dạng bài
                                        </div>
                                    </span>
                                </li>
                            </div>
                            <div className="flex justify-between gap-4">
                                <li className="mt-3 ">
                                    <span className="flex items-center gap-1">
                                        <MdCheck color="green" />
                                        <div className="w-[300px] text-sm">
                                        Được học toàn diện kiến thức cơ bản và kỹ năng cần thiết
                                        </div>
                                    </span>
                                </li>
                                <li className="mt-3 ">
                                    <span className="flex items-center gap-1">
                                        <MdCheck color="green" />
                                        <div className="w-[300px] text-sm">
                                        Được hỗ trợ giải đáp thắc mắc trong suốt quá trình tham gia khóa học.
                                        </div>
                                    </span>
                                </li>
                            </div><div className="flex justify-between gap-4">
                                <li className="mt-3 ">
                                    <span className="flex items-center gap-1">
                                        <MdCheck color="green" />
                                        <div className="w-[300px] text-sm">
                                            Tự tin với các bài học và giành điểm số cao trong các bài thi/kiểm tra trên lớp.
                                        </div>
                                    </span>
                                </li>
                                <li className="mt-3 ">
                                    <span className="flex items-center gap-1">
                                        <MdCheck color="green" />
                                        <div className="w-[300px] text-sm">
                                        Động lực học tập - Tự giác học tập
                                        </div>
                                    </span>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="h-full mt-10  ">
                        <span className="font-bold text-2xl">Khóa học liên quan:</span>
                        <div className="flex flex-wrap  ">
                            {
                                listClass.map((e) => (
                                    <div className="mt-4 mx-1 shadow-sm" key={e.id + "Course_Relate"}>
                                        <Course key={e.id}
                                            id={e.id}
                                            title={e.className}
                                            img={e.image ? e.image : imgDefault}
                                            startDate={e.startDate}
                                            courseName={e.course.courseName}
                                            fee={e.course?.courseFee}
                                        />
                                    </div>
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className=" row-span-1 col-span-1  ">
                    <div className=" p-2 mt-[100px]">
                        <div className="">
                            <img src={dataDetail?.image ? dataDetail?.image : imgDefault} className="rounded-lg object-fill h-50 w-96" />
                        </div>
                        <div className="flex justify-center mt-5">
                            <div>
                                <span className="text-blue-500 font-semibold text-3xl text-center">{NumberHelpers.formatNumberMoney(dataDetail ? dataDetail.course.courseFee : 0)}</span>
                                <span>/month</span>
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <div>
                                <button onClick={hanldeValidateOrder} className="p-3 mt-2 rounded-2xl transition ease-in-out delay-150 bg-blue-500 text-white hover:-translate-y-1 hover:scale-110 hover:bg-orange-500  duration-200 font-semibold">ĐĂNG KÝ HỌC</button>
                            </div>
                        </div>
                        <div className="ml-16 mt-5">
                            <ul className="list-disc">
                                <li className="mt-3">
                                    <span className="flex items-center gap-2">
                                        <MdClass />
                                        <p>
                                            Khóa học: {dataDetail?.course?.courseName}
                                        </p>
                                    </span>
                                </li>
                                <li className="mt-2">
                                    <span className="flex items-center gap-2">
                                        <MdAssignmentInd />
                                        <p>
                                            Số lượng học viên: {dataDetail?.currentStudent + "/" + dataDetail?.limitStudent}
                                        </p>
                                    </span>
                                </li><li className="mt-2">
                                    <span className="flex items-center gap-2">
                                        <MdAvTimer />
                                        <p>
                                            Ngày bắt đầu: {DateHelpers.formatDate(dataDetail ? dataDetail.startDate : "")}
                                        </p>
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ClassDetailScreen