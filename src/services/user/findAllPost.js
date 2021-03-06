import NotFoundError from '../../exceptions/NotFoundError';
import models from '../../models/sql';

export default async ({ userId, limit, offset }) => {
  const sort = ['id', 'ASC'];
  const doc = await models.post.findAndCountAll({
    where: [{ userId }, { approved: true }],
    include: [
      {
        model: models.comment,
        as: 'comments',
      },
    ],
    attributes: { exclude: ['passwordDigest', 'auth_token_ctxs'] },
    order: [sort],
    limit,
    offset,
  });

  if (!doc) {
    throw new NotFoundError('no post found');
  }

  return doc.rows;
};
