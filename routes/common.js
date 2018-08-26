import express from 'express';
const router = express.Router();

import HomeData from '../controller/common/homeData';
import Position from '../controller/common/position';

router.get('/getHomeData', HomeData.getHomeData);
router.get('/getAddress', Position.getAddress);

export default router;