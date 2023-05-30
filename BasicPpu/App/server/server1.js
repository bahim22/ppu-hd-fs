const express = require('express')

// const port = process.env.PORT || 5222
const app = express()
const port = 5222

app.get('./ppu-hd-fs/BasicPpu/App/home3.html', (req, res) => {
    res.send('home3.html')
})

app.listen(port, () => {
    console.log("App Live on port ${port}")
})
