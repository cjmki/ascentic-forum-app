import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';
import NotFoundError from '../../exceptions/NotFoundError';

const { Op } = sqlClient.Sequelize;

export default async ({ id }) => {
  const q = {
    id: { [Op.eq]: id },
  };

  const doc = await models.post.destroy({ where: q });
  if (!doc) {
    throw new NotFoundError('post not found');
  }
  return doc;
};
