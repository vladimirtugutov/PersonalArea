const express = require('express');
const cors = require('cors');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const { session, sessionConfig } = require('./config/sessions');

const port = process.env.PORT;

const app = express();

// Импортируем routers
const authRouter = require('./routes/auth');
const contactsRouter = require('./routes/contacts');

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(session(sessionConfig));

app.use('/api/auth', authRouter);
app.use('/api/contacts', contactsRouter);

app.listen(port, () => console.log('server working'));
