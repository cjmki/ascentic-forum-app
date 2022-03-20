import express from 'express';
import controller from './controller';
import cee from '../../util/catchExpressExceptions';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/post', cee(auth(['admin', 'user'])), cee(controller.getUser));
/**
 * query params : limit & offset
 */
router.get('/post', cee(auth(['admin'])), cee(controller.getAllUser));
router.post('/post', cee(auth(['admin', 'user'])), cee(controller.postPost));

export default router;
