import bcrypt from 'bcrypt';
import faker from 'faker';
import { ADMIN_EMAIL } from '../../src/util/constants/common';

const users = [
  {
    email: ADMIN_EMAIL,
    passwordDigest: bcrypt.hashSync('helloworld', 10),
    role: 'admin',
  },
  {
    email: 'user@dom.com',
    passwordDigest: bcrypt.hashSync('helloworld', 10),
    role: 'user',
  },
  {
    email: 'userTwo@dom.com',
    passwordDigest: bcrypt.hashSync('helloworld', 10),
    role: 'user',
  },
];

users.forEach((user) => {
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
});

export default users;
