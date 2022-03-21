import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';
import NotFoundError from '../../exceptions/NotFoundError';

const { Op } = sqlClient.Sequelize;

export default async ({ id, role }) => {
  const q = {
    id: { [Op.eq]: id },
  };

  const doc = await models.user.findOne({ where: q });
  if (!doc) {
    throw new NotFoundError('user not found');
  }

  doc.role = role;
  await doc.save();

  return doc.get();
};
