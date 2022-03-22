const { Op } = require('sequelize');
const { Contact } = require('../db/models');

exports.showAllContacts = async (req, res) => {
  console.log('check get request at /api/contacts');
  try {
    const allContacts = await Contact.findAll({
      order: [
        ['id', 'ASC'],
      ],
      raw: true,
    });
    return res.json(allContacts);
  } catch (error) {
    return res.status(400).json({ message: 'Пользователь не существует' });
  }
};

exports.createContact = async (req, res) => {
  console.log('post-request!!!');
  const { name, phone, contactData } = req.body;
  await Contact.create({ name, phone, contactData });
  const allContacts = await Contact.findAll({
    order: [
      ['id', 'ASC'],
    ],
    raw: true,
  });
  return res.json(allContacts);
};

exports.showContact = async (req, res) => {
  console.log(`Показать контакт с id ${req.params.id}`);
  const contact = await Contact.findOne({ where: { id: req.params.id } });
  if (contact) {
    return res.json(contact);
  }
  return res.status(404).json({ title: 'Контакт не найден' });
};

exports.deleteContact = async (req, res) => {
  console.log(`Удалить контакт с id ${req.params.id}`);
  Contact.destroy({ where: { id: req.params.id } });
  res.json({ id: req.params.id });
};

exports.searchContacts = async (req, res) => {
  const searchWord = req.body.payload.toLowerCase();
  console.log(`Поиск контактов с "${searchWord}"`);
  const filteredDB = await Contact.findAll({
    where: { name: { [Op.iLike]: `%${searchWord}%` } },
    order: [
      ['id', 'ASC'],
    ],
    raw: true,
  });
  res.json(filteredDB);
};

exports.editContact = async (req, res) => {
  const { name, phone, contactData } = req.body;
  console.log('Изменение контакта по id: ', req.params.id, name, phone, contactData);
  const contact = await Contact.findOne({ where: { id: req.params.id } });
  await contact.update({ name, phone, contactData });
  // The database now has "Ada" for name, but still has the default "green" for favorite color
  await contact.save();
  const allContacts = await Contact.findAll({
    order: [
      ['id', 'ASC'],
    ],
    raw: true,
  });
  return res.json(allContacts);
};
