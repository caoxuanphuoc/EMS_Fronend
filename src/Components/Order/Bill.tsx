import { MdOutlinePeopleAlt, MdAssignment, MdOutlinePayment } from "react-icons/md";
import { ValidateOrderInfoDto } from "../../Services/Payment/Dto/ValidateOrderInfoDto";
const Bill = (props: ValidateOrderInfoDto) => {

    return (
        <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto ">
            <h3 className="font-bold text-2xl my-4 text-center text-blue-600">Thanh toán hóa đơn</h3>
            <hr className="mb-2" />

            <div className="mb-5">
                <div className="flex gap-2 items-center  mb-3">
                    <span><MdOutlinePeopleAlt /></span>
                    <span className="text-lg font-bold ">Thông tin người mua:</span>
                </div>
                <div className="text-gray-700 mb-2">
                    <span >Họ và tên: </span>
                    {props.fullName}
                </div>
                <div className="text-gray-700 mb-2">
                    <span>Số điện thoại: </span>
                    0345757092
                </div>
                <div className="text-gray-700 mb-2">
                    <span >Email: </span>
                    {props.email}
                </div>
            </div>
            <hr className="mx-1 my-1" />
            <div className="mb-5">
                <div className="flex gap-2 items-center  mb-3">
                    <MdAssignment />
                    <span className="text-lg font-bold ">Thông tin đơn hàng:</span>
                </div>

                <div className="text-gray-700 mb-2">
                    <span >Lớp học </span>
                    <span className="font-bold">{props.className}</span>
                </div>
                <div className="text-gray-700 mb-2">
                    <span >Môn học </span>
                    <span className="font-bold">{props.courseName}</span>
                </div>
            </div>
            <hr className="mx-1 my-1" />
            <table className="w-full mb-8">
                <thead>
                    <tr>
                        <th className="text-left font-bold text-gray-700 text-lg"><MdOutlinePayment /> Thông tin thanh toán</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-left text-gray-700">Học phí</td>
                        <td className="text-right text-gray-700">{props.fee}VND</td>
                    </tr>
                    <tr>
                        <td className="text-left text-gray-700">Giảm giá</td>
                        <td className="text-right text-gray-700">{props.discount} VND</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td className="text-left font-bold text-gray-700">Total</td>
                        <td className="text-right font-bold text-gray-700">{props.orderTotal} Vnd</td>
                    </tr>
                </tfoot>
            </table>
            <div className="text-gray-700 mb-2">Power by ECMS</div>
            {/* <div className="text-gray-700 text-sm">Please remit payment within 30 days.</div> */}
        </div>
    )
}
export default Bill