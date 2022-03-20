import Joi from 'joi';

let Schema = {};

Schema.postApprovePost = Joi.object({
  id: Joi.number().required(),
});

export default Schema;
