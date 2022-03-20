import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import create from '../../services/post/create';

const controller = {};

controller.postPost = async (req, res) => {
  const user = res.locals.user;

  const params = {
    userId: user.id,
    role: user.role,
    ...req.body,
  };

  const validated = await validateRequest(params, Schema.postPost);
  const token = await create(validated);

  res.json({ data: { token } });
};

export default controller;
