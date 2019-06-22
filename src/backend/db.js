function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, function (err, client) {
            assert.equal(null, err);
            const dbo = client.db(dbName);
            resolve(dbo);
        });
    });
}