import Joi from 'joi';
import { USER_ROLES } from '../../util/constants/common';

let Schema = {};

Schema.postLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(1).max(255).required(),
});

export default Schema;
