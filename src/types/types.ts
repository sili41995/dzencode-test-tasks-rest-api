import { ObjectId } from 'mongoose';
import { Request } from 'express';

export interface IHttpError {
  status: number;
  message?: string;
}

export interface IErrorMessageList {
  [key: number]: string;
}

export interface IPrice {
  value: number;
  symbol: string;
  isDefault: boolean;
}

export type Prices = IPrice[];

export interface IProduct {
  id: ObjectId;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: Date;
    end: Date;
  };
  price: Prices;
  order: number;
  date: Date;
}

export interface IOrder {
  id: ObjectId;
  title: string;
  date: Date;
  description: string;
  products: ObjectId[];
}
