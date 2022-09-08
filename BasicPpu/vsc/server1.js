const express = require('express')

const app = express()

// const port = process.env.PORT || 5222

const port = 5222

app.get('/Basic/home3.html', (req, res) => {
    res.send('/Basic/home3.html')
})

app.listen(port, () => {
    console.log("App Live on port ${port}")
})

// ** Server from @bahim22/athena repo 

const path = require('path');
const express = require('express');
const app = express();
// other relevant code rm
// express serves files in prod
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route ** will delete, alter **
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// GET req unresolved by node will default to client routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// <-------            --------->
// ** OTHER Options for Production server/index.js settings
const express = require('express');
const path = require('path');
// const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5222);