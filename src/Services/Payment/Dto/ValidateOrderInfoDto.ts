export interface ValidateOrderInfoDto {
    userId: number,
    fullName: string,
    email: string,
    classId: number,
    className: string,
    courseName: string,
    fee: number,
    discount: number,
    orderTotal: number
}