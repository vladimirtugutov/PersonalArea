const bcrypt = require('bcrypt');

const createPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'А.С. Пушкин',
        password: await createPassword('111111'),
        email: 'alex@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'М.Ю. Лермонтов',
        password: await createPassword('222222'),
        email: 'lermont@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('Contacts', [
      {
        name: 'А.С. Пушкин',
        phone: '111-11-11',
        contactData: 'г. Санкт-Петербург, Мойка, 12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'М.Ю. Лермонтов',
        phone: '222-22-22',
        contactData: 'г. Пятигорск',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Л.Н. Толстой',
        phone: '333-33-33',
        contactData: 'Ясная поляна',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Contacts', null, {});
  },
};
