
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const articlesRouter = require('./routes/articles');

const app = express();

mongoose.connect('mongodb://localhost:27017/api-project', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api', articlesRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});