import { Response, NextFunction, Request } from 'express';
import { ctrlWrapper } from '../../utils';
import { Order } from '../../models/order';

const add = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await Order.create({
    ...req.body,
  });

  res.status(201).json(result);
};

export default ctrlWrapper<Request>(add);
