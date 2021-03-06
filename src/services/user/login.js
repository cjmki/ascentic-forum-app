import models from '../../models/sql';
import UnauthorizedError from '../../exceptions/UnauthorizedError';
import NotFoundError from '../../exceptions/NotFoundError';

// find user with email and pass. if found generate and return jwt
export default async ({ email, password }) => {
  const user = await models.user.findOne({ where: { email } });

  if (!user) {
    throw new NotFoundError('user not found');
  }

  if (!user.verifyPassword(password)) {
    throw new UnauthorizedError('authorization required');
  }

  const token = user.generateAuthToken();
  await user.save();

  return token;
};
