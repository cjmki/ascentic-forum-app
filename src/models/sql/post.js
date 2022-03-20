export default (sequalize, DataTypes) => {
  const model = sequalize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      references: {
        // WorkingDays hasMany Users n:n
        model: 'users',
        key: 'id',
      },
    },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING(1000), allowNull: false },
    approved: { type: DataTypes.BOOLEAN, defaultValue: false },
  });

  return model;
};
