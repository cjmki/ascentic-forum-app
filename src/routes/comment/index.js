import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/comment',
  cee(auth(['admin', 'user'])),
  cee(controller.postComment)
);

export default router;
