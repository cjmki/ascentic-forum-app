import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import logout from '../../services/user/logout';
import login from '../../services/user/login';

const controller = {};

controller.postLogin = async (req, res) => {
  const params = {
    ...req.body,
  };

  const validated = await validateRequest(params, Schema.postLogin);
  const token = await login(validated);

  res.json({ data: { token } });
};

controller.postLogout = async (req, res) => {
  const params = {
    email: res.locals.user.email,
  };

  await logout(params);

  res.json({ op: 'success' });
};

export default controller;
