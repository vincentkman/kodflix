const express = require('express')
const app = express()
const port = 3001
const getShows = require('./shows');

// Add route -> request and response
app.get('/rest/shows', (req, res) => res.send(getShows()))

app.listen(port, () => console.log(`Server started on port ${port}!`))
