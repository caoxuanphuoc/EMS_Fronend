import { useState } from "react";
import Bill from "../../Components/Order/bill"
import logo_bank from "../../assets/Images/payment_bank.png"
import logo_nvpay from "../../assets/Images/vnpt-pay.png"
import qrVietin from "../../assets/Images/qrVietin.jpg"
import { Modal } from "antd";
const PageOrder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className=" grid grid-rows-10 h-max " >

            <div className="row-span-1">
                <h1 className="ml-[10%]  my-5 text-3xl font-semibold ">Xác nhận thanh toán.</h1>
            </div>
            <div className=" row-span-1 grid grid-cols-8 h-full items-center">
                <div className=" col-start-2 col-span-4 bg-green-50 pb-10">
                    <Bill />

                </div>
                <div className=" col-start-6 col-span-3 bg-green-50 mx-10 ">
                    <div className="border-2 border-gray-500 rounded-2xl bg-white p-9" >
                        <span> Lựa chọn phương thức để tiếp tục thanh toán </span>
                        <hr className="px-3 my-5" />
                        <div className="flex flex-wrap gap-2 justify-between">
                            <img onClick={showModal} src={logo_bank} alt="" className="border-2 hover:cursor-pointer p-3 mt-2 rounded-2xl transition ease-in-out delay-150  text-white hover:-translate-y-1 hover:scale-110 hover:bg-orange-400  duration-200 font-semibold" />
                            <img onClick={showModal} src={logo_nvpay} alt="" className="border-2 hover:cursor-pointer p-3 mt-2 rounded-2xl transition ease-in-out delay-150  text-white hover:-translate-y-1 hover:scale-110 hover:bg-orange-400  duration-200 font-semibold" />
                        </div>
                        <hr className="px-1 border-2 bg-black my-10" />
                        <div className="flex justify-center">
                            <button className="px-3 bg-gray-400 rounded-xl p-3 hover:bg-gray-500"> Hủy thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <Modal width={800} title={"Thông tin chuyển khoản"} okButtonProps={{ hidden: true }} footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
                <div className="py-10 bg-blue-50 ">
                    <div className="grid grid-cols-6">
                        <div className="col-span-2">
                            <img src={qrVietin} alt="" />
                        </div>
                        <div className="col-span-4 flex flex-col gap-4 bg-blue-50 ">
                            <div className="border-2 rounded-lg p-5 ">
                                <h4 className="font-bold ">Công ty Cổ phần Đầu tư và Dịch vụ Giáo dục</h4>
                                <p>Số tài khoản: <strong>107872471539</strong> </p>
                                <p><strong>Ngân hàng Vietinbank chi nhánh Thừa Thiên Huế- Chi nhánh Hội Sở</strong></p>
                                <p>Số tiền: <strong>1.200.000 VND</strong></p>
                                <p>Nội dung chuyển khoản: <strong>1363NH 0345757092</strong></p>
                            </div>
                            <button onClick={handleCancel} className="mx-[15%] mt-5 rounded-2xl bg-blue-300 px-4 py-2 font-bold hover:bg-orange-300">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default PageOrder