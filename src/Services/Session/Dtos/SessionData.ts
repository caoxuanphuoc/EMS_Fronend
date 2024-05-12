export interface SessionData {
    application: {
        version: string,
        releaseDate: Date,
        features: object
    },
    tenant: {
        id: number,
        tenancyName: string,
        name: string
    },
    user:
    {
        id: number,
        name: string,
        surname: string,
        userName: string,
        emailAddress: string
    }
}