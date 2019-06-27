const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// const dbUrl = 'mongodb://kodflix:kodflix@localhost:27017/admin';
// const dbUrl = 'mongodb+srv://kodflix:kodflix@kodflix-ymvgn.mongodb.net/kodflix?retryWrites=true&w=majority';
// const dbUrl = process.env[`DB_URL_${process.env.NODE_ENV}`];

const dbUrl = process.env.NODE_ENV === 'production' ?
    process.env.DB_URL_PRD :
    process.env.DB_URL_DEV;
    
const dbName = dbUrl.substr(dbUrl.lastIndexOf('/') + 1);

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, client) {
            if (err) throw(err);
            const dbo = client.db(dbName);
            resolve(dbo);
        });
    });
}

module.exports = {connect};