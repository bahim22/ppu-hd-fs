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