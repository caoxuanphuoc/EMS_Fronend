import {
    NavLink,
} from "react-router-dom";
const Header = () => {

    return (
        <div className="navBar flex justify-between mt-5 pb-4">
            <div className="logoDiv">
                <NavLink
                    to="/"
                    className="pl-6 text-[25px] text-blueColor"
                >
                    <strong>ECMS</strong>
                </NavLink>
            </div>
            <div className="menu flex gap-5">
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    <NavLink
                        to="/"
                    >
                        Trang chủ
                    </NavLink>
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">

                    <NavLink
                        to="/about"
                    >
                        Về chúng tôi
                    </NavLink>
                </li><li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    <NavLink
                        to="/course"
                    >
                        About
                    </NavLink>
                </li>

                <li className="menuList text-[#6f6f6f]">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3  border border-blue-500  rounded">
                        Login
                    </button>
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3  border border-blue-500  rounded">
                        Register
                    </button>
                </li>


            </div>
        </div >
    )
}
export default Header