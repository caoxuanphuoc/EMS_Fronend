import { BiTimeFive } from 'react-icons/bi'
import { DateHelpers } from "../../Helpers/DateHelper";
import { NumberHelpers } from "../../Helpers/NumberHelper"
import { useNavigate } from "react-router-dom";

interface classProps {
    id: number,
    title: string,
    img: string,
    startDate: string,
    courseName: string,
    fee: number,
    showDiscount?: boolean
}
const Course = (props: classProps) => {
    const navigate = useNavigate();
    const handelNavLink = (idCourse: number) => {
        navigate(
            "/detail?id=" + idCourse + "/#detailClass",
            {
                state: {
                    id: idCourse
                },
            }
        );
    }
    const notDiscount = props.fee - (props.fee * 0.1)
    return (
        <div className="CourseContainer flex gap-10 justify-center flex-wrap items-center">
            <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] 
            hover:bg-blue-200  shadow-lg shadow-greyIsh-400/700 hover:sha-lg border border-solid border-gray-300    ">
                <img src={props.img} alt="" className="rounded-sm" />
                <span className="items-center my-10">
                    <h1 className="text-[16px] font-semibold text-textColor mt-3 truncate
                     " >Lớp: {props.title}</h1>
                    <h6 className="'text-[#ccc] group-hover:text-black font-semibold"> Môn học: {props.courseName}</h6>
                </span>
                <span className="flex items-center  ">
                    <BiTimeFive className="group-hover:text-green-500 text-green-500 " /> {DateHelpers.formatDate(props.startDate)}
                </span>
                <span className="flex gap-2">
                    <h6 className="text-blue-600 group-hover:text-red-500 font-semibold"> Giá chỉ: {NumberHelpers.formatNumberMoney(props.fee)}</h6>
                    {
                        props.showDiscount &&
                        <h6 className="text-blue-500 line-through group-hover:text-red-400">  {NumberHelpers.formatNumberMoney(notDiscount)}</h6>
                    }
                </span>

                <ul>

                </ul>
                <button onClick={() => handelNavLink(props.id)} className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold bg-blue-50 shadow-sm text-textColor hover:bg-blue-600 group-hover/item:text-textColor group-hover:text-white group-hover:bg-orange-500 mt-5">
                    Đăng ký ngay
                </button>
            </div>
        </div>
    )
}
export default Course