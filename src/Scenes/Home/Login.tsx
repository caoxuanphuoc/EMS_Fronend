import { useEffect, useState } from 'react';
import { loginDataDto } from '../../Services/Auth/Dtos/loginDataDto';
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { loginAction } from '../../redux/slices/AuthSlice';
import { RegisterDto } from '../../Services/Auth/Dtos/registerDto';
import { AuthApi } from '../../Services/Auth/AuthApi'
import { RootState } from '../../redux/store';
import { useNavigate } from "react-router-dom";
import { SesionDataAction } from '../../redux/slices/Session/SessionSlice';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from 'axios';
const Login = (props: any) => {
    //#region redux init
    const dispatch = useAppDispatch()
    let navigate = useNavigate();
    const x = useAppSelector((state: RootState) => state.auth.data?.accessToken)

    const token = localStorage.getItem('accessToken')
    //const [islog, setIslog] = useState(token == undefined)
    useEffect(() => {
        console.log("Thay doi sesion", token);

        if (token != undefined) {
            dispatch(SesionDataAction())
            return navigate("/");
        }
    })

    //#endregion

    //#region login
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // Register 
    const [name, setName] = useState("");
    const [surname, setsurName] = useState("");
    const [email, setemail] = useState("");
    //const [conPass, setconPass] = useState("");
    const [showErrComPass, setShowErrComPass] = useState(false)



    const handleUsernameChange = (event: any) => {
        setUserName(event.target.value);
        console.log(userName);

    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };
    const handleSurnameChange = (event: any) => {
        setsurName(event.target.value);
    };
    const handlenameChange = (event: any) => {
        setName(event.target.value);
    };
    const handleEmalChange = (event: any) => {
        setemail(event.target.value);
    };
    const handleConfirmPasswordChange = (event: any) => {
        //setconPass(event.target.value);
        if (password != event.target.value)
            setShowErrComPass(true)
        else
            setShowErrComPass(false)

    };
    const notify = (mess: string, type: number) => {
        if (type == 1)
            toast.success(mess, { autoClose: false });
        if (type == 0)
            toast.error(mess, { autoClose: false });
    }
    const registerFun = async () => {
        console.log("registerFun");

        let resgData: RegisterDto = {
            userName: userName,
            name: name,
            surname: surname,
            emailAddress: email,
            password: password,
            captchaResponse: "string"
        }
        try {

            await AuthApi.register(resgData)
            notify("Đăng nhập ngay nào", 1)
            setResgiterForm(false)
        } catch (e: unknown) {
            const error = e as AxiosError<any>;
            let errmess = error.response?.data?.error.message;
            throw errmess
        }
    }

    const handleSubmit = async () => {
        console.log("clich submit");

        if (!resgiterForm) {

            const loginData: loginDataDto = {
                userNameOrEmailAddress: userName,
                password: password,
                rememberClient: true
            };
            dispatch(loginAction(loginData))
            console.log("Loging success", x);
            if (x != undefined)
                return navigate("/");

        } else {
            toast.promise(
                registerFun,
                {
                    pending: 'Vui lòng đợi trong giây lắt',
                    success: 'Đăng ký hoàn tất',
                    error: {
                        render({ data }) {
                            return `${data}`
                        },
                    }
                }
            )
        }
    };
    //#endregion

    //handle register
    const { isRegister } = props
    const [resgiterForm, setResgiterForm] = useState(isRegister)

    return <div className="bg-white dark:bg-gray-900 dark:text-white">
        <ToastContainer />
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: `https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80` }} >
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">ECMS</h2>

                        <p className="max-w-xl mt-3 text-gray-300"><strong>M Tracker </strong>
                            - Nơi học hỏi không bao giờ ngừng, đặt nền móng vững chắc cho thành công.</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full max-w-md  mx-auto mr-5">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">M Tracker</h2>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">Sign {resgiterForm ? 'in' : 'up'} to access your account</p>
                    </div>

                    <div className="mt-8 ">
                        {
                            resgiterForm ?
                                <div className="mt-5 flex gap-2">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Tên</label>
                                        <input onChange={handlenameChange} type="name" name="name" id="name" placeholder="name" className="block  px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div>
                                        <label htmlFor="surName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Họ</label>
                                        <input onChange={handleSurnameChange} type="surName" name="surName" id="surName" placeholder="surName" className="block  px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div> :
                                null
                        }
                        <div className='mt-5'>
                            <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                            <input onChange={handleUsernameChange} type="username" name="username" id="username" placeholder="Username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        {
                            resgiterForm ?
                                <div className="mt-5">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                        <input onChange={handleEmalChange} type="email" name="email" id="email" placeholder="Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div> :
                                null
                        }
                        <div className="">
                            <div className="mt-5">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    {resgiterForm ? null :
                                        <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    }
                                </div>
                                <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                        </div>
                        {
                            resgiterForm ?
                                <div className="mt-4">
                                    <div>
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                                        <input onChange={handleConfirmPasswordChange} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="block w-full  px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        {showErrComPass &&
                                            <label htmlFor="confirmPassword" className="block mb-2 text-sm text-red-500 ">Not same password</label>
                                        }
                                    </div>
                                </div> :
                                null
                        }
                        <div className="mt-5">
                            <button onClick={handleSubmit}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                {resgiterForm ? 'Register now' : 'Sign in'}
                            </button>
                        </div>



                        <p className="mt-5 text-sm text-center text-gray-400">Don&#x27;t have an account yet?
                            <button onClick={() => {
                                setResgiterForm(!resgiterForm)
                                console.log("click butt");

                            }} className='hover:text-blue-600 underline text-blue-300'>  Sign {resgiterForm ? 'in' : 'up'}</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Login;
