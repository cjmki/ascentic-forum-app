import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import create from '../../services/post/create';
import ValidationError from '../../exceptions/ValidationError';

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

export default controller;
