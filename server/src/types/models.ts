import { Types } from "mongoose"

export interface IITem {
  name: string
  description: string
}

export interface IUser {
  username: string
  password: string
  confirmation: string
  country: string
  email: string
  sexe: string
  terms: boolean
}

export interface IPassport {
  number: string
  user_id: IUser & {
    _id: Types.ObjectId
  }
  expirationDate: Date
  nationality: string
}

export interface IAccount {
  user_id: IUser & {
    _id: Types.ObjectId
  }
  accountNumber: string
  balance: number
}