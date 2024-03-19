import express from 'express';
import { add, deleteById, getAll } from '../../controllers/orders';
import { Endpoints } from '../../constants';
import { isValidId, validateBody } from '../../middlewares';
import { addSchema } from '../../models/order';
import { validBodySchema } from '../../schemas';

const router = express.Router();

router.get(Endpoints.root, getAll);
router.post('/', validateBody(validBodySchema), validateBody(addSchema), add);
router.delete(`/:${Endpoints.dynamicId}`, isValidId, deleteById);

export default router;
