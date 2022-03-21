import NotFoundError from '../../exceptions/NotFoundError';
import models from '../../models/sql';

export default async ({ limit, offset, approved }) => {
  const sort = ['id', 'ASC'];
  const doc = await models.post.findAndCountAll({
    where: [{ approved: approved || false }],
    include: [
      {
        model: models.comment,
        as: 'comments',
      },
    ],
    order: [sort],
    limit,
    offset,
  });

  if (!doc) {
    throw new NotFoundError('no post found');
  }

  return doc.rows;
};
