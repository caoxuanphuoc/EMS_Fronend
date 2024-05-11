import {
    NavLink,
    useNavigate,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { SesionDataAction } from "../../redux/slices/Session/SessionSlice";
const Header = () => {
    const dispatch = useAppDispatch()
    let navigate = useNavigate();
    const token = localStorage.getItem('accessToken')
    const isLogin = token != undefined
    const user = useAppSelector((state: RootState) => state.session.data?.user)
    const [showdrop, setShowDrop] = useState(false);
    useEffect(() => {
        let token3 = localStorage.getItem('accessToken')
        if (token3 != undefined)
            dispatch(SesionDataAction())
    }, [])
    const logout = () => {
        localStorage.clear()
        return navigate("/");
    }
    return (
        <div className="navBar flex justify-between py-4 bg-blue-50 px-5">
            <div className="logoDiv">
                <NavLink
                    to="/"
                    className="pl-6 text-[25px] text-blueColor"
                >
                    <strong>ECMS</strong>
                </NavLink>
            </div>
            <div className="menu flex gap-5">
                <li className="menuList text-[#6f6f6f] hover:text-blueColor header-hover">
                    <NavLink to="/" >
                        Trang chủ
                    </NavLink>
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor header-hover">

                    <NavLink to="/about">
                        Về chúng tôi
                    </NavLink>
                </li><li className="menuList text-[#6f6f6f] hover:text-blueColor header-hover">
                    <NavLink
                        to="/course"
                    >
                        About
                    </NavLink>
                </li>

                <li className="menuList text-[#6f6f6f]">
                    {
                        !isLogin ?
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3  border border-blue-500  rounded">

                                <NavLink
                                    to="/auth"
                                >
                                    Login
                                </NavLink>
                            </button>
                            :
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={() => setShowDrop(!showdrop)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3  border border-blue-500  rounded flex">
                                        {user?.surname + " " + user?.name}
                                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                                        </svg>
                                    </button>
                                </div>

                                {showdrop &&

                                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                                        <div className="py-1" role="none">
                                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>

                                            <button onClick={logout} type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>

                                        </div>
                                    </div>
                                }
                            </div>
                    }

                </li>
                {!isLogin &&
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-3  border border-blue-500  rounded">
                            <NavLink
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </button>
                    </li>
                }


            </div>
        </div >
    )
}
export default Header