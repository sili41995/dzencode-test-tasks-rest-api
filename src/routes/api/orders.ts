import express from 'express';
import { deleteById, getAll } from '../../controllers/orders';
import { Endpoints } from '../../constants';
import { isValidId } from '../../middlewares';

const router = express.Router();

router.get(Endpoints.root, getAll);
router.delete(`/:${Endpoints.dynamicId}`, isValidId, deleteById);

export default router;
