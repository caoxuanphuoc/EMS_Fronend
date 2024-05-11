import axios, { AxiosResponse, HttpStatusCode } from 'axios'
import { BaseResponse } from '../Common/ResponseBase'
import { loginDto } from './Dtos/loginDto'
import { RegisterDto } from './Dtos/registerDto'
export class AuthApiClass {
    config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Authorization': localStorage.getItem('accessToken'),
            'Abp.TenantId': 1,
        }
    }
    login = async (body: any) => {
        const response: AxiosResponse<BaseResponse<loginDto>> =
            await axios.post<BaseResponse<loginDto>>('/api/TokenAuth/Authenticate', body, this.config);
        if (response.status == HttpStatusCode.Ok) {
            localStorage.setItem("accessToken", response.data.result.accessToken)
        }

        return response.data

    }
    register = async (body: any) => {
        const response: AxiosResponse<BaseResponse<RegisterDto>> =
            await axios.post<BaseResponse<RegisterDto>>('/api/User/Resgiter', body, this.config);
        return response.data
    }
}

export const AuthApi = new AuthApiClass();