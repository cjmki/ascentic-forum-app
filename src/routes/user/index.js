import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/user/login', cee(controller.postLogin));
router.post(
  '/user/logout',
  cee(auth(['admin', 'user'])),
  cee(controller.postLogout)
);

export default router;
