import express from 'express';
const router = express.Router();

import restaurantsData from '../controller/shopping/restaurants'

router.get('/restaurants', restaurantsData.restaurants);

export default router;