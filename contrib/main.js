import models from '../src/models/sql';
import users from './test-data/users';
import posts from './test-data/posts';
import comments from './test-data/comments';
import populate from './populate';

const main = async () => {
  console.log('[+] populating database with test data | initiated');
  await populate(models.user, users, (p) => `${p.email} [${p.role}]`);
  await populate(
    models.post,
    posts,
    (p) => `${p.title} [user id - ${p.userId}]`
  );
  await populate(
    models.comment,
    comments,
    (p) => `[post id - ${p.postId}] [user id - ${p.userId}]`
  );
  console.log('[+] populating database with test data | completed');
};

main();
