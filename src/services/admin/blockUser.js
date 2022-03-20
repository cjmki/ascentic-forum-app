import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';
import NotFoundError from '../../exceptions/NotFoundError';

const { Op } = sqlClient.Sequelize;

export default async ({ id, blocked }) => {
  const q = {
    id: { [Op.eq]: id },
  };

  let doc = await models.user.findOne({ where: q });
  if (!doc) {
    throw new NotFoundError('user not found');
  }

  doc.blocked = blocked;
  doc = doc.save();
  return doc;
};
