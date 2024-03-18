import { NextFunction, Response, Request } from 'express';
import { Order } from '../../models/order';
import { ctrlWrapper } from '../../utils';

const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await Order.find({}).populate('products');

  res.status(200).json({
    result,
  });
};

export default ctrlWrapper<Request>(getAll);
