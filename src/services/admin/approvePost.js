import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';
import NotFoundError from '../../exceptions/NotFoundError';

const { Op } = sqlClient.Sequelize;

export default async ({ id }) => {
  const q = {
    id: { [Op.eq]: id },
  };
  console.log(q);
  let doc = await models.post.findOne({ where: q });
  if (!doc) {
    throw new NotFoundError('post not found');
  }
  doc.approved = true;
  doc = doc.save();
  return doc;
};
