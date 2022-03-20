import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/user', cee(auth(['admin', 'user'])), cee(controller.getUser));
/**
 * query params : limit & offset
 */
router.get('/users', cee(auth(['admin'])), cee(controller.getAllUser));

router.post('/user/login', cee(controller.postLogin));
router.post(
  '/user/logout',
  cee(auth(['admin', 'user'])),
  cee(controller.postLogout)
);
router.post('/user/register', cee(controller.postRegister));

/**
 * query params : limit & offset
 */
router.get(
  '/user/post',
  cee(auth(['admin', 'user'])),
  cee(controller.getAllPosts)
);

router.get(
  '/user/post-summary',
  cee(auth(['admin', 'user'])),
  cee(controller.getPostSummary)
);

export default router;
