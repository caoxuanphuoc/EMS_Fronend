import axios, { AxiosResponse, HttpStatusCode } from 'axios'
import { BaseResponse } from '../Common/ResponseBase'
import { loginDto } from './Dtos/loginDto'
export class AuthApiClass {
    config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Authorization': localStorage.getItem('accessToken')
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
}

export const AuthApi = new AuthApiClass();