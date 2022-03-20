import NotFoundError from '../../exceptions/NotFoundError';
import models from '../../models/sql';

export default async ({ limit, offset }) => {
  const sort = ['id', 'ASC'];
  const doc = await models.user.findAndCountAll({
    attributes: { exclude: ['passwordDigest', 'auth_token_ctxs'] },
    order: [sort],
    limit,
    offset,
  });

  if (!doc) {
    throw new NotFoundError('user not found');
  }

  return doc.rows;
};
