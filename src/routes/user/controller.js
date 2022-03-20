import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import logout from '../../services/user/logout';
import login from '../../services/user/login';
import register from '../../services/user/register';
import findOne from '../../services/user/findOne';
import findAll from '../../services/user/findAll';
import findAllPost from '../../services/user/findAllPost';
import generatePostSummary from '../../services/user/generatePostSummary';

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

controller.postRegister = async (req, res) => {
  const params = {
    ...req.body,
  };

  const validated = await validateRequest(params, Schema.postRegister);
  const doc = await register(validated);

  res.json({ data: { doc } });
};

controller.getUser = async (req, res) => {
  const user = res.locals.user;
  const params = {
    email: user.email,
  };
  const validated = await validateRequest(params, Schema.getUser);
  const doc = await findOne(validated);

  res.json({ data: doc });
};

controller.getAllUser = async (req, res) => {
  const params = {
    ...req.query,
  };

  const validated = await validateRequest(params, Schema.getAllUsers);

  const doc = await findAll(validated);

  res.json({ data: { doc } });
};

controller.getAllPosts = async (req, res) => {
  const user = res.locals.user;
  const params = {
    userId: user.id,
    ...req.query,
  };

  const validated = await validateRequest(params, Schema.getAllPosts);

  const doc = await findAllPost(validated);

  res.json({ data: { doc } });
};

controller.getPostSummary = async (req, res) => {
  const user = res.locals.user;
  const params = {
    email: user.email,
    firstName: user.firstName,
  };
  const doc = await generatePostSummary(params);

  res.json({ data: { doc } });
};

export default controller;
