/* eslint-disable no-console*/

import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

const app = express();
middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

const PORT = constants.PORT;
app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port ${PORT}
      ------------------------
      Running on ${process.env.NODE_ENV}
      ------------------------
      Welcome to Blogate Server :)
    `);
  }
});
