'use strict';
const bcrypt = require('bcrypt');

function generateUsers () {
  const users = [];
  for (let i = 0; i < 100; i++) {
    users.push({

                 firstName: 'Test',
                 lastName: 'Testovich',
                 login: `test_login${i}`,
                 email: `test${i}@gmail.com`,
                 passwordHash: bcrypt.hashSync(`password${i}`,
                                               bcrypt.genSaltSync(10)),
                 createdAt: new Date(),
                 updatedAt: new Date(),
               }
    );
  }
  return users;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', generateUsers(), {});
  },
  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
  },
};