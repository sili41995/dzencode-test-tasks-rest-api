import { Schema, model } from 'mongoose';
import { preUpdate, handleMongooseError } from './hooks';
import { ErrorMessages } from '../constants';
import { IOrder, IProduct } from '../types/types';
import ModelNames from './modelNames';

const orderSchema = new Schema<IOrder>(
  {
    title: {
      type: String,
      required: [true, ErrorMessages.titleReqErr],
    },
    date: {
      type: Date,
      required: [true, ErrorMessages.dateReqErr],
    },
    description: {
      type: String,
      required: [true, ErrorMessages.descriptionReqErr],
    },
    products: {
      type: [{ type: Schema.Types.ObjectId, ref: ModelNames.product }],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.pre('findOneAndUpdate', preUpdate);
orderSchema.post('save', handleMongooseError);
orderSchema.post('findOneAndUpdate', handleMongooseError);

const Order = model<IOrder>(ModelNames.order, orderSchema);

export { Order };
