const express = require('express');
const app = express();
const port = 3000;

const mongooes = require('mongoose');
mongooes
  .connect('mongodb+srv://leecy:asdf1234@boilerplate.v6vkvhy.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
