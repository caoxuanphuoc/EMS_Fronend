import React from "react";

const Footer =() =>{
    return(
        <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center">
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                        <strong>ECMS</strong>
                    </h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius est. 
                    Sed corporis quibusdam, architecto enim dolor eaque maxime commodi, fuga natus ab tempore vitae, asperiores vero! Veniam, porro natus?
                </p>
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