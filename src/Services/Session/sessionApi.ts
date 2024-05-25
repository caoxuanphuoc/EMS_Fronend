import axios, { AxiosResponse } from "axios";
import { BaseResponse } from "../Common/ResponseBase";
import { SessionData } from "./Dtos/SessionData";
const apiHost = import.meta.env.VITE_API_HOST;

export class SessionApiClass {

    config = {
        headers: {
            // "Content-Type": "application/json",
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            Authorization: "Bearer " + localStorage.getItem('accessToken'),
            'Abp.TenantId': 1,
        }
    }

    GetDataSession = async () => {
        const response: AxiosResponse<BaseResponse<SessionData>> =
            await axios.get<BaseResponse<SessionData>>(apiHost + '/api/services/app/Session/GetCurrentLoginInformations',
                this.config
            );
        console.log("API", response.data);

        return response.data
    }
}
export const SessionApi = new SessionApiClass();