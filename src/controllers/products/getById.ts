import { Response, NextFunction, Request } from 'express';
import { Endpoints } from '../../constants';
import { Product } from '../../models/product';
import { ctrlWrapper, httpError } from '../../utils';

const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const _id = req.params[Endpoints.dynamicId];

  const result = await Product.findOne({ _id });

  if (!result) {
    throw httpError({ status: 404 });
  }

  res.status(200).json(result);
};

export default ctrlWrapper<Request>(getById);
