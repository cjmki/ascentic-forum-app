import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import create from '../../services/post/create';
import findAll from '../../services/post/findAll';
import ValidationError from '../../exceptions/ValidationError';
import update from '../../services/post/update';
import remove from '../../services/post/remove';

const controller = {};

controller.postPost = async (req, res) => {
  const user = res.locals.user;

  if (user.blocked) {
    throw new ValidationError('user is blocked');
  }

  const params = {
    userId: user.id,
    role: user.role,
    ...req.body,
  };

  const validated = await validateRequest(params, Schema.postPost);
  const doc = await create(validated);

  res.json({ data: { doc } });
};

controller.getAllPost = async (req, res) => {
  const params = {
    ...req.query,
  };

  const validated = await validateRequest(params, Schema.getAllPost);
  const doc = await findAll(validated);

  res.json({ data: { doc } });
};

controller.putPost = async (req, res) => {
  const user = res.locals.user;

  if (user.blocked) {
    throw new ValidationError('user is blocked');
  }

  const params = {
    userId: user.id,
    postId: req.query.id,
    ...req.body,
  };

  const validated = await validateRequest(params, Schema.putPost);
  const doc = await update(validated);

  res.json({ data: { doc } });
};

controller.deletePost = async (req, res) => {
  const user = res.locals.user;

  if (user.blocked) {
    throw new ValidationError('user is blocked');
  }

  const params = {
    userId: user.id,
    postId: req.query.id,
  };

  const validated = await validateRequest(params, Schema.putPost);
  const doc = await remove(validated);

  res.json({ data: { doc } });
};

export default controller;
