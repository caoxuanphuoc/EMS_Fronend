import React from "react";

const NavBar =() =>{
    return(
        <div className="navBar flex justify-between items-center p-[3rem]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueColor"> 
                <strong>ECMS</strong>
                </h1>
            </div>
            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Trang chủ
                </li><li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Về chúng tôi
                </li><li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Môn học
                </li><li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Login
                </li><li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Register
                </li>
            </div>
        </div>
    )
}
export default NavBar