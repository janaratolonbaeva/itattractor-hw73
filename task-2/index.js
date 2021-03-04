const Vigenere = require('caesar-salad').Vigenere;
const express = require('express');
const app = express();
const port = 8000;
const password = 'password';

app.listen(port);

app.get('/encode/:value', (req, res) => {
	res.send(Vigenere.Cipher(password).crypt(req.params.value));
});

app.get('/decode/:value', (req, res) => {
	res.send(Vigenere.Decipher(password).crypt(req.params.value));
});
