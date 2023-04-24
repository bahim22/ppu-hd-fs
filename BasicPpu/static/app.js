const express = require('express');
const app = express();
const port = 5500;
// const port = process.env.PORT || 5222;

// let mainPage = path.resolve('./base.html')
// http://127.0.0.1:5500/static/base.html.html
app.get('/ppu-hd-fs/BasicPpu/static/base.html', (req, res) => {
	res.send('./base.html');
});
app.listen(port, () => {
	console.log(`App Live on port ${port}`);
});
