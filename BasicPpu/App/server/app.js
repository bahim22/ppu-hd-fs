const express = require('express');
// import express from 'express';
const app = express();
const PORT = 5500 || process.env.PORT;
// const port = process.env.PORT || 5222;

// let mainPage = path.resolve('./base.html')
// http://127.0.0.1:5500/static/base.html.html
app.get('/ppu-hd-fs/BasicPpu/App/base.html', (req, res) => {
	res.send('./base.html');
});
app.listen(PORT, () => {
	console.log(`App Live on port http://127.0.0.1:${PORT}/`);
});
