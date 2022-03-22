const bcrypt = require('bcrypt');
const { User } = require('../db/models');

exports.checkUserAndCreateSession = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = {
          username: user.name,
          email: user.email,
          id: user.id,
        };
        console.log('session>>>', req.session);
        return res.json({
          username: user.name,
          email: user.email,
          id: user.id,
        });
      }
      return res.json({
        username: 'Данные введены неверно!',
        email: null,
        id: null,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Пользователь не существует' });
  }
};

exports.destroySession = (req, res) => {
  console.log('DESTROY');
  try {
    req.session.destroy();
    res.cookie('sid', '00', { expires: new Date() });
    res.clearCookie('sid');
    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).json({ message: 'Произошла ошибка' });
  }
};

exports.checkIfAuth = (req, res) => {
  console.log('Check if auth');
  try {
    if (req.session?.user?.id) {
      return res.json(req.session.user);
    }
  } catch (error) {
    return res.status(400).json({ message: 'Произошла ошибка' });
  }
};

exports.register = async (req, res) => {
  console.log('Register new user');
  const { email, password, username } = req.body;
  console.log('req.body>>>>>>', req.body);
  try {
    if (email && password && username) {
      const hashPass = await bcrypt.hash(password, 10);
      const user = await User.findOne({ where: { email } });
      if (user) {
        console.log('Пользователь уже существует');
        return res.status(400).json({ message: 'Пользователь уже существует' });
      }
      const newUser = await User.create({ name: username, password: hashPass, email });
      console.log('newUser>>>>>>>>>>>>>>', newUser);
      if (newUser) {
        req.session.user = {
          username: newUser.name,
          email: newUser.email,
          id: newUser.id,
        };
        console.log('session>>>', req.session);
        return res.json({
          username: newUser.name,
          email: newUser.email,
          id: newUser.id,
        });
      }
      throw Error();
    }
    throw Error();
  } catch (error) {
    return res.status(400).json({ message: 'Пользователь не зарегистрирован' });
  }
};
