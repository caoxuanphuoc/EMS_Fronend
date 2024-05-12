
export class DateHelperClass {
    formatDate = (datestring: string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(datestring).toLocaleDateString('es-CL');
        //es-CL
        //en-GB
    }
}
export const DateHelpers = new DateHelperClass();