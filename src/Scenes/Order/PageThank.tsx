import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PaymentApi } from "../../Services/Payment/PaymentService"
import { CreateOrderHistoryDto } from "../../Services/Payment/Dto/CreateOrderHistoryDto"
const PageThank = () => {
    const location = useLocation()
    useEffect(() => {
        const useQuery = () => {

            return new URLSearchParams(location.search);
        };
        const query = useQuery();
        const vnp_Amount = query.get('vnp_Amount');
        const vnp_BankCode = query.get('vnp_BankCode');
        const vnp_BankTranNo = query.get('vnp_BankTranNo');
        const vnp_CardType = query.get('vnp_CardType');
        const vnp_OrderInfo = query.get('vnp_OrderInfo');
        const vnp_PayDate = query.get('vnp_PayDate');
        const vnp_ResponseCode = query.get('vnp_ResponseCode');
        const vnp_TmnCode = query.get('vnp_TmnCode');
        const vnp_TransactionNo = query.get('vnp_TransactionNo');
        const vnp_TransactionStatus = query.get('vnp_TransactionStatus');
        const vnp_TxnRef = query.get('vnp_TxnRef');
        console.log("vnp_Amount", vnp_Amount)
        console.log("vnp_BankCode", vnp_BankCode)
        console.log("vnp_BankTranNo", vnp_BankTranNo)
        console.log("vnp_CardType", vnp_CardType)
        console.log("vnp_OrderInfo", vnp_OrderInfo)
        console.log("vnp_PayDate", vnp_PayDate)
        console.log("vnp_ResponseCode", vnp_ResponseCode)
        console.log("vnp_TmnCode", vnp_TmnCode)
        console.log("vnp_TransactionNo", vnp_TransactionNo)
        console.log("vnp_TransactionStatus", vnp_TransactionStatus)
        console.log("vnp_TxnRef", vnp_TxnRef)
        ////////////////
        const InforOrder: CreateOrderHistoryDto = {
            TransactionNo: vnp_TransactionNo ? vnp_TransactionNo : "",
            ResponseCode: vnp_ResponseCode == "00" ? 200 : 400,
            Message: vnp_OrderInfo ? vnp_OrderInfo : "",
            OrderCode: vnp_TxnRef ? vnp_TxnRef : ""
        };
        const fetchLink = async () => {
            const url = await PaymentApi.updateStatusVnPay(InforOrder)
            return url
        }
        fetchLink()

    })
    http://localhost:5173/thank?vnp_Amount=36000000&vnp_BankCode=NCB&vnp_BankTranNo=VNP14414883&vnp_CardType=ATM&vnp_OrderInfo=AECMS000005&vnp_PayDate=20240515003408&vnp_ResponseCode=00&vnp_TmnCode=PI7EWKGJ&vnp_TransactionNo=14414883&vnp_TransactionStatus=00&vnp_TxnRef=638513299695464691&vnp_SecureHash=8682badbbbf995c3081a96006374446732378b8e69e8646b4a91fb5069f5566b5b9b10f1dfc2a0990bb4d9b3c9635a724a301189ac57670a4a2a58e69097af71
    return (
        <div className="flex items-center justify-center h-screen bg-blue-50">
            <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                <div className="flex flex-col items-center p-4 space-y-2 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" >
                        <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1
                        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        Thanh toán thành công</h1>
                    <p className="py-5 text-center">Cảm ơn bạn đã tin tưởng MTracker là bạn đồng hành <br /> kiểm tra email để nhận tài liệu ngay nào</p>

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