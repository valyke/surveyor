const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App running at port ${PORT}`))