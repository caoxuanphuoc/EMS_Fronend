import axios, { AxiosResponse, HttpStatusCode } from 'axios'
import { BaseResponse } from '../Common/ResponseBase'
import { loginDto } from './Dtos/loginDto'
import { RegisterDto } from './Dtos/registerDto'
const apiHost = import.meta.env.VITE_API_HOST;

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
            await axios.post<BaseResponse<loginDto>>(apiHost + '/api/TokenAuth/Authenticate', body, {
                headers: {
                    'Abp.TenantId': 1

                }

            });
        if (response.status == HttpStatusCode.Ok) {
            localStorage.setItem("accessToken", response.data.result.accessToken)
        }

        return response.data

    }
    register = async (body: any) => {
        const response: AxiosResponse<BaseResponse<RegisterDto>> =
            await axios.post<BaseResponse<RegisterDto>>(apiHost + '/api/User/Resgiter', body, this.config);
        return response.data
    }
}

export const AuthApi = new AuthApiClass();