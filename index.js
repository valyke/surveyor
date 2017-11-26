const express = require('express');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App running at port ${PORT}`))