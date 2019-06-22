const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getShows = require('./shows');

// Add route -> request and response
app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(port, () => console.log(`Server started on port ${port}!`));

// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});