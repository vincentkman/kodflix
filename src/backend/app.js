const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 3001;

db.connect().then(dbo => {
        // Add route -> request and response
    app.get('/rest/filmshows/', (req, res) => {
        dbo.collection('filmshows').find({}).toArray((err, result) => {
            if(err) throw(err);
            res.send(result);
        });
    });

    app.get('/rest/filmshows/:id', (req, res) => {
        dbo.collection('filmshows').findOne({id : req.params.id}, (err, result) => {
            if(err) throw(err);
            res.send(result);
        });
    });

    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
});

app.listen(port, () => console.log(`Server started on port ${port}!`));