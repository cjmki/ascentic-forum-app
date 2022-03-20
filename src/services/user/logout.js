import models from '../../models/sql';
import NotFoundError from '../../exceptions/NotFoundError';

export default async ({ email }) => {
  const user = await models.user.findOne({ where: { email } });

  if (!user) {
    throw new NotFoundError('user not found');
  }

  user.removeCtxToken();
  await user.save();

  return true;
};
