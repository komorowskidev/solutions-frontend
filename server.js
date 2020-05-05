const express = require('express');

const app = express();

app.use(express.static('./dist/solutions-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/solutions-frontend/'}),
);

app.listen(process.env.PORT || 8080);
