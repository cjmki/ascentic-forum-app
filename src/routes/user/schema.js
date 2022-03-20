import Joi from 'joi';
import { USER_ROLES } from '../../util/constants/common';

let Schema = {};

Schema.postLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(1).max(255).required(),
});

Schema.postRegister = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(1).max(255).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

Schema.getUser = Joi.object({
  email: Joi.string().email().required(),
});

Schema.getAllUsers = Joi.object({
  limit: Joi.number().required(),
  offset: Joi.number().required(),
});

Schema.getAllPosts = Joi.object({
  userId: Joi.number().required(),
  limit: Joi.number().required(),
  offset: Joi.number().required(),
});

Schema.deleteUser = Joi.object({
  id: Joi.number().required(),
});

export default Schema;
