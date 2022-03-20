import bcrypt from 'bcrypt';
import models from '../../models/sql';
import ValidationError from '../../exceptions/ValidationError';

export default async (params) => {
  const { email, password, firstName, lastName } = params;
  let doc = {};

  delete params.password;
  params.createdAt = new Date().toISOString();

  const passwordDigest = bcrypt.hashSync(password, 10);

  try {
    doc = await models.user.create({
      email,
      firstName,
      lastName,
      passwordDigest,
    });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new ValidationError(`user already exists`);
    }
    throw error;
  }

  return doc;
};
