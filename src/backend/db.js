const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://kodflix:kodflix@localhost:27017/kodflix';

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            if (err) throw err;
            const dbo = client.db('kodflix');
            resolve(dbo);
        });
    });
}

module.exports = {connect};