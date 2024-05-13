const PageThank = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                <div className="flex flex-col items-center p-4 space-y-2 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1
                        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        Thanh toán thành công</h1>
                    <p>Cảm ơn bạn đã tin tưởng MTracker, kiểm tra email để nhận tài liệu ngay nào</p>

                    <div className="flex gap-10">
                        <a
                            href="http://localhost:5173/"
                            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600  rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">

                            <span className="text-sm font-medium">
                                Home
                            </span>
                        </a>
                        <a
                            href="https://mail.google.com/mail/u/0/#inbox"
                            className="inline-flex items-center px-4 py-2 text-white bg-orange-400  border-indigo-600  rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">

                            <span className="text-sm font-medium">
                                Email
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageThank