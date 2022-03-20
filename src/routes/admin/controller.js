import Schema from './schema';
import validateRequest from '../../util/validateRequest';
import approvePost from '../../services/admin/approvePost';

const controller = {};

controller.postApprovePost = async (req, res) => {
  const params = {
    id: req.query.id,
  };

  const validated = await validateRequest(params, Schema.postApprovePost);
  const doc = await approvePost(validated);

  res.json({ data: { doc } });
};

export default controller;
