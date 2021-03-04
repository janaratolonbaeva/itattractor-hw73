const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('You can then "/" go to your page');
});

app.listen(port);

app.get('/:name', (req, res) => {
	res.send(req.params.name);
});