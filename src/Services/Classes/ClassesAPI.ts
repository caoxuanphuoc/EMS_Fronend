import axios, { AxiosResponse } from "axios";
import { BaseResponse } from "../Common/ResponseBase";
import { PagedClassResultRequestDto } from "./dto/PagedClassResultRequestDto";
import { GetAllClassOuput } from "./dto/getAllClassOutput";
import { PagedResultDto } from "../Common/PagedResultDto";
const apiHost = import.meta.env.VITE_API_HOST;
export class ClassesApiClass {

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

    GetAllClass = async (input: PagedClassResultRequestDto) => {
        const response: AxiosResponse<BaseResponse<PagedResultDto<GetAllClassOuput>>> =
            await axios.get<BaseResponse<PagedResultDto<GetAllClassOuput>>>(apiHost + '/api/services/app/Class/GetAll', {
                params: input,
                headers: this.config.headers
            });

        return response.data;
    }
    GetClassById = async (id: number) => {
        const response: AxiosResponse<BaseResponse<GetAllClassOuput>> =
            await axios.get<BaseResponse<GetAllClassOuput>>(apiHost + '/api/services/app/Class/Get',
                {
                    params: {
                        id: id
                    },
                    headers: this.config.headers
                }
            );
        console.log("API get by id", response.data);

        return response.data
    }
}
export const ClassesApi = new ClassesApiClass();