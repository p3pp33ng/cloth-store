import { Token } from "./token";

export interface IUser{
    userName: string | null;
    password: string | null;
    reEnterPassword: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    emailConfirmed: boolean | null;
    phoneNumber: string | null;
    phoneNumberConfirmed: boolean | null;
    isTwoFactorEnabled: boolean | null;
}

export interface LoginUser {
    userName: string;
    password: string;
}

export interface DeleteUser {
    userName: string;
    email: string;
}

export interface UpdateUser {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    twoFactorEnabled: boolean;
}

export interface RegisterUser {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    reEnterPassword: string;
}

export interface GetUser {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    emailConfirmed: boolean;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    isTwoFactorEnabled: boolean;
}

export class User {
    public constructor(userName: string | null,
                        firstName: string | null,
                        lastName: string | null,
                        email: string | null,
                        token: Token) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.token = token;
    }
    userName: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    token: Token;
}