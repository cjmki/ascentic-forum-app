import NotFoundError from '../../exceptions/NotFoundError';
import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';

const { Op } = sqlClient.Sequelize;

export default async ({ email }) => {
  const query = {
    email: { [Op.eq]: email },
  };

  const doc = await models.user.findOne({
    where: query,
    attributes: { exclude: ['passwordDigest', 'auth_token_ctxs'] },
  });

  if (!doc) {
    throw new NotFoundError('user not found');
  }

  return doc;
};
