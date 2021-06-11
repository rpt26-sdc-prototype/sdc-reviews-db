module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define(`reviews`, {
    game: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
    reviewtext: {
      type: DataTypes.STRING(8000),
    },
    creationdate: {
      type: DataTypes.BIGINT,
    },
    recommended: {
      type: DataTypes.INTEGER,
    },
    helpfulcount: {
      type: DataTypes.INTEGER,
    },
    nothelpfulcount: {
      type: DataTypes.INTEGER,
    },
    helpfulscore: {
      type: DataTypes.INTEGER,
    },
    funnycount: {
      type: DataTypes.INTEGER,
    },
    earlyaccess: {
      type: DataTypes.INTEGER,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false
  });

  return Reviews;
};
