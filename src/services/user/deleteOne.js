import NotFoundError from '../../exceptions/NotFoundError';
import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';

const { Op } = sqlClient.Sequelize;

export default async ({ id }) => {
  const query = {
    id: { [Op.eq]: id },
  };

  const doc = await models.user.destroy({ where: query });

  if (!doc) {
    throw new NotFoundError('user not found');
  }

  return doc;
};
