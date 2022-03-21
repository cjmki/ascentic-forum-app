import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

router.patch(
  '/admin/approve/post',
  cee(auth(['admin'])),
  cee(controller.patchApprovePost)
);

router.delete('/admin/post', cee(auth(['admin'])), cee(controller.deletePost));
router.patch(
  '/admin/block/user',
  cee(auth(['admin'])),
  cee(controller.patchBlockUser)
);

router.patch(
  '/admin/update/user',
  cee(auth(['admin'])),
  cee(controller.patchUpdateUser)
);

export default router;
