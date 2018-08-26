import express from 'express';
const router = express.Router();

import user from '../controller/user/user';

router.post('/login', user.login);

export default router;