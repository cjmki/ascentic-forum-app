import Joi from 'joi';
import { USER_ROLES } from '../../util/constants/common';

let Schema = {};

Schema.postPost = Joi.object({
  userId: Joi.number().required(),
  role: Joi.string()
    .valid(...USER_ROLES)
    .required(),
  title: Joi.string().min(1).max(500).required(),
  content: Joi.string().min(1).max(1000).required(),
});

Schema.getAllPost = Joi.object({
  approved: Joi.boolean(),
  limit: Joi.number().required(),
  offset: Joi.number().required(),
});

Schema.putPost = Joi.object({
  userId: Joi.number().required(),
  postId: Joi.number().required(),
  title: Joi.string().min(1).max(500),
  content: Joi.string().min(1).max(1000),
});

Schema.deletePost = Joi.object({
  userId: Joi.number().required(),
  postId: Joi.number().required(),
});
export default Schema;
