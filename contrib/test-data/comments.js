import faker from 'faker';
const comments = [
  {
    userId: 1,
    postId: 1,
  },
  {
    userId: 2,
    postId: 2,
  },
  {
    userId: 2,
    postId: 3,
  },
  {
    userId: 3,
    postId: 4,
  },
  {
    userId: 3,
    postId: 5,
  },
  {
    userId: 1,
    postId: 1,
  },
  {
    userId: 2,
    postId: 2,
  },
  {
    userId: 2,
    postId: 3,
  },
  {
    userId: 3,
    postId: 4,
  },
  {
    userId: 3,
    postId: 5,
  },
  {
    userId: 1,
    postId: 1,
  },
  {
    userId: 2,
    postId: 2,
  },
  {
    userId: 2,
    postId: 3,
  },
  {
    userId: 3,
    postId: 4,
  },
  {
    userId: 3,
    postId: 5,
  },
];

comments.forEach((comment) => {
  comment.content = faker.lorem.paragraphs();
});

export default comments;
