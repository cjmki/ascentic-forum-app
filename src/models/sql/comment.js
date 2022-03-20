export default (sequalize, DataTypes) => {
  const model = sequalize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'cascade', // has no purpose without reference post
      references: {
        model: 'posts',
        key: 'id',
      },
    },
    content: { type: DataTypes.STRING(1000), allowNull: false },
  });

  return model;
};
