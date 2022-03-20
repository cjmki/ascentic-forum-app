/* eslint-disable func-names */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import config from '../../config/config';

export default (sequalize, DataTypes) => {
  const model = sequalize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      firstName: { type: DataTypes.STRING, allowNull: true },
      lastName: { type: DataTypes.STRING, allowNull: true },
      passwordDigest: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user' },
      blocked: { type: DataTypes.BOOLEAN, defaultValue: false },
      auth_token_ctxs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: [],
      },
    },
    {
      hooks: {
        afterCreate: (record) => {
          delete record.dataValues.passwordDigest;
          delete record.dataValues.auth_token_ctxs;
        },
        afterUpdate: (record) => {
          delete record.dataValues.passwordDigest;
          delete record.dataValues.auth_token_ctxs;
        },
      },
    }
  );
  return model;
};
