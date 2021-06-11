module.exports = (sequelize, DataTypes) => {
      const Users = sequelize.define(`user`, {
        username: {
          type: DataTypes.STRING,
          // unique: true,
        },
        profilepicture: {
          type: DataTypes.STRING,
        },
        usertheme: {
          type: DataTypes.INTEGER,
        },
        steamlevel: {
          type: DataTypes.INTEGER,
        },
        reviewsgiven: {
          type: DataTypes.INTEGER,
        },
        playtime: {
          type: DataTypes.INTEGER,
        },
        productactivation: {
          type: DataTypes.INTEGER,
        },
        gamesowned: {
          type: DataTypes.INTEGER,
        },
        // createdAt: {
        //   type: DataTypes.DATE
        // }
      }, {});

      Users.associate = function (reviewModel) {
        Users.hasMany(reviewModel, { foreignKey: 'userid', onDelete: 'CASCADE' });
      };

      return Users;
    };
