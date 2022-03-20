import Joi from 'joi';

let Schema = {};

Schema.postComment = Joi.object({
  userId: Joi.number().required(),
  postId: Joi.number().required(),
  content: Joi.string().min(1).max(1000),
});

export default Schema;
