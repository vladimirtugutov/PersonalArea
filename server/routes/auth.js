const express = require('express');

const router = express.Router();

const {
  checkUserAndCreateSession,
  destroySession,
  checkIfAuth,
  register,
} = require('../controllers/authController');

// app.use('/auth', authRouter); - здесь подключен этот роутер
// router.get('/', authRender);
router.post('/signin', checkUserAndCreateSession);
router.get('/logout', destroySession);
router.get('/check', checkIfAuth);
router.post('/register', register);

module.exports = router;
