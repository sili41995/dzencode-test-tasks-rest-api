import express from 'express';
import { getAll } from '../../controllers/orders';
import { Endpoints } from '../../constants';

const router = express.Router();

router.get(Endpoints.root, getAll);

export default router;
