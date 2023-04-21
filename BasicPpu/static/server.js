const express = require('express')

const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'css'));

app.use('/html', (req,res,next) =>{
    res.sendFile(path.join(__dirname, 'HTML', 'base.html')
    )
})
);

app.listen(5222);

// const express = require('express')
// const app1 = express()

// const port = process.env.PORT || 5222

// let mainPage = path.resolve('./base.html')
const port = 5222

app.get('/ppu-hd-fs/BasicPpu/static/base.html', (req, res) => {
    res.send('./base.html')
})

app.listen(port, () => {
    console.log(`App Live on port ${port}`)
})

