export interface BaseResponse<T> {
    result: T,
    targetUrl: null,
    success: boolean,
    error: errorData,
    unAuthorizedRequest: boolean,
    __abp: boolean

}

export interface errorData {
    code: number,
    message: string,
    details: string,
    validationErrors: itemError[]
}
interface itemError {
    message: string,
    members: string[]
}
