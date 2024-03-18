import { Schema, model } from 'mongoose';
import { preUpdate, handleMongooseError } from './hooks';
import { ErrorMessages } from '../constants';
import { IProduct } from '../types/types';
import ModelNames from './modelNames';

const productSchema = new Schema<IProduct>(
  {
    serialNumber: {
      type: Number,
      required: [true, ErrorMessages.serialNumberReqErr],
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      default:
        'https://res.cloudinary.com/dcwbkakpl/image/upload/v1710440853/marshall-london-smartphone-6545_nwbnb7.jpg',
    },
    title: {
      type: String,
      required: [true, ErrorMessages.titleReqErr],
    },
    type: {
      type: String,
      required: [true, ErrorMessages.typeReqErr],
    },
    specification: {
      type: String,
      required: [true, ErrorMessages.typeReqErr],
    },
    guarantee: {
      start: {
        type: Date,
        required: [true, ErrorMessages.startGuaranteeReqErr],
      },
      end: {
        type: Date,
        required: [true, ErrorMessages.endGuaranteeReqErr],
      },
    },
    price: [
      {
        value: {
          type: Number,
          required: [true, ErrorMessages.priceValueReqErr],
        },
        symbol: {
          type: String,
          required: [true, ErrorMessages.priceSymbolReqErr],
        },
        isDefault: {
          type: Boolean,
          default: false,
        },
      },
    ],
    order: {
      type: Number,
      required: [true, ErrorMessages.orderReqErr],
    },
    date: {
      type: Date,
      required: [true, ErrorMessages.dateReqErr],
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.pre('findOneAndUpdate', preUpdate);
productSchema.post('save', handleMongooseError);
productSchema.post('findOneAndUpdate', handleMongooseError);

const Product = model<IProduct>(ModelNames.product, productSchema);

export { Product };
