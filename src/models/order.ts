import { Schema, model } from 'mongoose';
import { preUpdate, handleMongooseError } from './hooks';
import { ErrorMessages } from '../constants';
import { IOrder } from '../types/types';
import ModelNames from './modelNames';
import Joi from 'joi';

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

const addSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({ 'any.required': ErrorMessages.titleReqErr }),
  date: Joi.date()
    .required()
    .messages({ 'any.required': ErrorMessages.dateReqErr }),
  description: Joi.string()
    .required()
    .messages({ 'any.required': ErrorMessages.descriptionReqErr }),
  products: Joi.array(),
});

const Order = model<IOrder>(ModelNames.order, orderSchema);

export { Order, addSchema };
