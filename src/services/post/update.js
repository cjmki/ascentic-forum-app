import models from '../../models/sql';
import sqlClient from '../../config/sql/sqlClient';
import NotFoundError from '../../exceptions/NotFoundError';
import UnAuthorizedError from '../../exceptions/UnauthorizedError';

const { Op } = sqlClient.Sequelize;

export default async ({ userId, postId, title, content }) => {
  const query = {
    id: { [Op.eq]: postId },
  };

  const doc = await models.post.findOne({
    where: query,
  });

  if (!doc) {
    throw new NotFoundError('post not found');
  }

  // to maintain the entergrity of post only the creator can only make changes to post
  if (userId !== doc.userId) {
    throw new UnAuthorizedError('not the creator');
  }

  if (title) doc.title = title;
  if (content) doc.content = content;

  await doc.save();
  return doc.get();
};
