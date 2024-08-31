const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/articles', require('./routes/articles'));
app.use('/api/users', require('./routes/users'));

app.listen(5000, () => console.log('Server running on port 5000'));
