import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import create from '../../services/comment/create';

const controller = {};

controller.postComment = async (req, res) => {
  const user = res.locals.user;
  const params = {
    userId: user.id,
    ...req.body,
  };

  const validated = await validateRequest(params, Schema.postComment);
  const doc = await create(validated);

  res.json({ data: { doc } });
};

export default controller;
