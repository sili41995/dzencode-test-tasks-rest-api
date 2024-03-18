import express from 'express';
import { getAll } from '../../controllers/products';
import { Endpoints } from '../../constants';

const router = express.Router();

router.get(Endpoints.root, getAll);

export default router;
