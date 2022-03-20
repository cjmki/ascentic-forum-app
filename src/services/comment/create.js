import models from '../../models/sql';

export default async ({ userId, postId, content }) => {
  const doc = await models.comment.create({
    userId,
    postId,
    content,
  });

  return doc;
};
