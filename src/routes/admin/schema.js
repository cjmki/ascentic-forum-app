import Joi from 'joi';

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

export default Schema;
