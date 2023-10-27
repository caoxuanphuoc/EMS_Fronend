import React from "react";
import {BiTimeFive} from 'react-icons/bi'

const Course =() =>{
    return(
        <div className=" CourseContainer flex gap-10 justify-center flex-wrap items-center py-10">
            <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] 
            hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:sha-lg">
                <span className=" flex justify-between items-center gap-4">
                    <h1 className="text-[16px] font-semibold text-textColor
                     group-hover:text-white"> Web develop</h1>
                    <span className="flex items-center text-[#ccc] gap-1">
                        <BiTimeFive/> Now
                    </span>
                </span>
                <h6 className="'text-[#ccc]"> Canada</h6>

                <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, placeat
                    . Rerum reprehenderit necessitatibus molestias molestiae hic fugiat itaque sit corporis quasi,
                </p>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                    Đăng ký
                </button>
            </div>
        </div>
    )
}
export default Course