
export class NumberHelperClass {
    formatNumberMoney = (money: number) => {
        return money.toLocaleString() + " đ";
    }
}
export const NumberHelpers = new NumberHelperClass();