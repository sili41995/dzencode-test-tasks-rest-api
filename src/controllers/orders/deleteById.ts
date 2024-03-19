import { Response, NextFunction, Request } from 'express';
import { Endpoints } from '../../constants';
import { Order } from '../../models/order';
import { ctrlWrapper, httpError } from '../../utils';

const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const _id = req.params[Endpoints.dynamicId];

  const result = await Order.findOneAndDelete({ _id });

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result);
};

export default ctrlWrapper<Request>(deleteById);
