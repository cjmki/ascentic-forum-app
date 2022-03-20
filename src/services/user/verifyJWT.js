import jwt from 'jsonwebtoken';
import models from '../../models/sql';
import config from '../../config/config';
import UnauthorizedError from '../../exceptions/UnauthorizedError';

// Decodes a jwt token and returns the corresponding user object if successful.
export default async (token) => {
  let decoded = '';
  try {
    decoded = jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    throw new UnauthorizedError('invalid token');
  }

  const user = await models.user.findOne({
    attributes: { exclude: ['passwordDigest'] },
    where: {
      email: decoded.email,
    },
  });

  // if the ctx is not in the database don't accept the token.
  if (!user || !user.verifyCtxToken(decoded.ctx)) {
    throw new UnauthorizedError('invalid token');
  }

  return user;
};
