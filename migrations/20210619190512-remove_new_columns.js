'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Customers', 'email'),
      queryInterface.removeColumn('Customers', 'phone')
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Customers', 'email'),
      queryInterface.removeColumn('Customers', 'phone'),
    ]);
  },
};
