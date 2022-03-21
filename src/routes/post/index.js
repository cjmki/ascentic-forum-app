import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

/**
 * query params : limit & offset
 */
router.get('/post', cee(auth(['admin', 'user'])), cee(controller.getAllPost));
router.post('/post', cee(auth(['admin', 'user'])), cee(controller.postPost));
router.put('/post', cee(auth(['admin', 'user'])), cee(controller.putPost));
router.delete(
  '/post',
  cee(auth(['admin', 'user'])),
  cee(controller.deletePost)
);

export default router;
