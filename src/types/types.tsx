export  interface IAdress {
    street: string;
    city: string;
    zipcode: string
}

export interface IUser {
    name: string;
    email: string;
    id: number;
    address: IAdress
}

export interface ITodo {
    id: number;
    title: string;
    comlete: boolean
}