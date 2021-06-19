'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Customers', 'email', {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn('Customers', 'phone', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Customers', 'email'),
      queryInterface.removeColumn('Customers', 'phone'),
    ]);
  },
};
