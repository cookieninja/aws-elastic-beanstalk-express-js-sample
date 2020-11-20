const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello cruel World! Am I being monitored and edited???'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
