const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send ({ hello: 'World' })
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App running at port ${PORT}`))