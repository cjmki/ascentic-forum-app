import Joi from 'joi';
import { USER_ROLES } from '../../util/constants/common';

let Schema = {};

Schema.postPost = Joi.object({
  userId: Joi.number().required(),
  role: Joi.string()
    .valid(...USER_ROLES)
    .required(),
  title: Joi.string().min(1).max(500),
  content: Joi.string().min(1).max(1000),
});

export default Schema;
