const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require('./config.js');

module.exports = {
  getGameReviews: async (gameID, host) => {
    try {
      const { Review, User } = sequelize.models;

      await User.associate(Review);
      const results = await User.findAll({
        attributes: [
          'username',
          'profilepicture',
          'usertheme',
          'steamlevel',
          'reviewsgiven',
          'playtime',
          'productactivation',
          'gamesowned',
          [Sequelize.col('reviews.creationdate'), 'creationdate'],
          [Sequelize.col('reviews.reviewtext'), 'reviewText'],
          // [Sequelize.col('reviews.creationdate'), 'creationDate'],
          [Sequelize.col('reviews.recommended'), 'recommended'],
          [Sequelize.col('reviews.helpfulcount'), 'helpfulCount'],
          [Sequelize.col('reviews.nothelpfulcount'), 'notHelpfulCount'],
          [Sequelize.col('reviews.helpfulscore'), 'helpfulScore'],
          [Sequelize.col('reviews.funnycount'), 'funnyCount'],
          [Sequelize.col('reviews.earlyaccess'), 'earlyAccess'],
          [Sequelize.col('reviews.awards'), 'awards'],
          [Sequelize.col('reviews.comments'), 'comments'],
        ],
        include: [
          {
            model: Review,
            where: { game: gameID },
            as: 'reviews',
            attributes: [],
          },
        ],
        order: [['reviews', 'creationdate', 'desc']]
      });

      return results;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
};