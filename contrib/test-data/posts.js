import faker from 'faker';
const posts = [
  {
    userId: 1,
    replies: [],
    approved: true,
  },
  {
    userId: 2,
    replies: [],
  },
  {
    userId: 2,
    replies: [],
    approved: true,
  },
  {
    userId: 3,
    replies: [],
  },
  {
    userId: 3,
    replies: [],
    approved: true,
  },
];

posts.forEach((post) => {
  post.title = faker.lorem.words();
  post.content = faker.lorem.paragraphs();
});

export default posts;
