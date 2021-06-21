module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Customers', 'phone', {
        type: Sequelize.STRING,
        validate: {
          isNumeric: true
        }
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.changeColumn('Customers', 'phone')]);
  },
};