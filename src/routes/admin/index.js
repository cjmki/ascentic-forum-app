import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

router.patch(
  '/admin/approve/post',
  cee(auth(['admin'])),
  cee(controller.postApprovePost)
);

export default router;
