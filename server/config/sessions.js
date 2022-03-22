const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  // secret: process.env.SESSION_SECRET || 'keyboard cat', так было у Коноплева, сделал как у Панефр
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
    // secure: false,
    secure: process.env.NODE_ENV === 'production',
  },
};

module.exports = { session, sessionConfig };
