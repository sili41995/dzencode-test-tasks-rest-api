import { NextFunction, Response, Request } from 'express';
import { Product } from '../../models/product';
import { ctrlWrapper } from '../../utils';

const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const result = await Product.find({});

  res.status(200).json(result);
};

export default ctrlWrapper<Request>(getAll);
