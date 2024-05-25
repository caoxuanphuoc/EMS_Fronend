import axios, { AxiosResponse } from "axios";
import { BaseResponse } from "../Common/ResponseBase";
import { ValidateOrderInfoDto } from "./Dto/ValidateOrderInfoDto";
import { CreateOrderHistoryDto } from "./Dto/CreateOrderHistoryDto";
import { OrderHistoryDto } from "./Dto/OrderHistoryDto";
import { inputValidateOrderDto } from "./Dto/inputValidateOrderDto";
const apiHost = import.meta.env.VITE_API_HOST;

export class PaymentApiClass {

    config = {
        headers: {
            "Content-Type": "application/json-patch+json",
            "accept": "text/plain",
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            // 'Authorization': "Bearer " + localStorage.getItem('accessToken'),
            'Abp.TenantId': 1,
            // "X-XSRF-TOKEN": "CfDJ8OwtQMvhiLdJpYI1-CGWImn5cjoNVOMxvVxgHUKw-cFmUolxDm6r8RSKLCII9FTlgji21otqMNOLC7NPTWe_D6rS5k5Vo02ftjzIlNM0E1-YziYG99_7iiFxNnCEXAwxa-3robU8g2QnLzLNSQNfx4wksxIgqt_lptMAm6BlpUGcLKX6rHVFX4L7tVCt-UcvHw"
        }
    }

    ValidateOrder = async (input: inputValidateOrderDto) => {
        const response: AxiosResponse<BaseResponse<ValidateOrderInfoDto>> =
            await axios.post<BaseResponse<ValidateOrderInfoDto>>(apiHost + '/api/services/app/Order/ValidateOrder',
                input,
                this.config
            );
        console.log("API ValidateOrder", response.data);

        return response.data
    }
    GetVnpayUrl = async (input: ValidateOrderInfoDto) => {
        const response: AxiosResponse<BaseResponse<string>> =
            await axios.post<BaseResponse<string>>(apiHost + '/api/PaymentControler/PaymentConfirm',
                input,
                this.config
            );
        console.log("API GetVnpayUrl", response.data);

        return response.data?.result
    }
    updateStatusVnPay = async (input: CreateOrderHistoryDto) => {
        const response: AxiosResponse<BaseResponse<OrderHistoryDto>> =
            await axios.post<BaseResponse<OrderHistoryDto>>(apiHost + '/api/services/app/OrderHistory/Create',
                input,
                this.config
            );
        console.log("updateStatusVnPay", response.data);

        return response.data?.result
    }
}
export const PaymentApi = new PaymentApiClass();