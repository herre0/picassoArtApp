module.exports = (sequelize, Sequelize) => {
    const Painting = sequelize.define("paintings", {
      name: {
        type: Sequelize.STRING
      },      
      description: {
        type: Sequelize.STRING
      },      
      imageUrl: {
        type: Sequelize.STRING
      },      
      category: {
        type: Sequelize.STRING
      },      
      order: {
        type: Sequelize.INTEGER
      },      
      price: {
        type: Sequelize.STRING
      }
    });
  
    return Painting;
  };