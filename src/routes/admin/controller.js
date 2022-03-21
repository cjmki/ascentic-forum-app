import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import approvePost from '../../services/admin/approvePost';
import deletePost from '../../services/admin/deletePost';
import blockUser from '../../services/admin/blockUser';
import updateUser from '../../services/admin/updateUser';

const controller = {};

controller.patchApprovePost = async (req, res) => {
  const params = {
    id: req.query.id,
    approved: req.query.status,
  };

  const validated = await validateRequest(params, Schema.patchApprovePost);
  const doc = await approvePost(validated);

  res.json({ data: { doc } });
};

controller.deletePost = async (req, res) => {
  const params = {
    id: req.query.id,
  };

  const validated = await validateRequest(params, Schema.deletePost);
  await deletePost(validated);

  res.json({ data: { op: 'success' } });
};

controller.patchBlockUser = async (req, res) => {
  const params = {
    id: req.query.id,
    blocked: req.query.status,
  };

  const validated = await validateRequest(params, Schema.patchBlockUser);
  const doc = await blockUser(validated);

  res.json({ data: { doc } });
};
controller.patchUpdateUser = async (req, res) => {
  const params = {
    id: req.query.id,
    role: req.query.role,
  };

  const validated = await validateRequest(params, Schema.patchUpdateUser);
  const doc = await updateUser(validated);

  res.json({ data: { doc } });
};

export default controller;
