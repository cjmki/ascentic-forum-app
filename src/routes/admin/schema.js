import Joi from 'joi';
import { USER_ROLES } from '../../util/constants/common';

let Schema = {};

Schema.patchApprovePost = Joi.object({
  id: Joi.number().required(),
  approved: Joi.boolean().required(),
});

Schema.deletePost = Joi.object({
  id: Joi.number().required(),
});

Schema.patchBlockUser = Joi.object({
  id: Joi.number().required(),
  blocked: Joi.boolean().required(),
});

Schema.patchUpdateUser = Joi.object({
  id: Joi.number().required(),
  role: Joi.string()
    .valid(...USER_ROLES)
    .required(),
});

export default Schema;
