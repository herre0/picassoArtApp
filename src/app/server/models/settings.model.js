module.exports = (sequelize, Sequelize) => {
  const Settings = sequelize.define("settings", {
    headerText: {
      type: Sequelize.STRING
    },
    aboutText: {
      type: Sequelize.STRING(1000),
  },
    photo: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    instagram: {
      type: Sequelize.STRING
    },
    facebook: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    adress: {
      type: Sequelize.STRING
    },
    logoName: {
      type: Sequelize.STRING
    },
    siteTitle: {
      type: Sequelize.STRING
    },
    titleLogo: {
      type: Sequelize.STRING
    }

  });

  return Settings;
};