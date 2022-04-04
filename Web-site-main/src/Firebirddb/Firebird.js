var Firebird = require('node-firebird');

var options = {
    host: process.env.FIREBIRD_HOST,
    port: process.env.FIREBIRD_PORT,
    database: process.env.FIREBIRD_DATABASE,
    user: process.env.FIREBIRD_USER,
    password: process.env.FIREBIRD_PASSWORD,
};

// 5 = the number is count of opened sockets
var pool = Firebird.pool(5, options);

// Get a free pool
pool.get(function(err, db) {

    if (err)
        throw err;

    // db = DATABASE
    db.query('SELECT * FROM USUARIOS', function(err, result) {
        // IMPORTANT: release the pool connection
        db.detach();
    });
});

// Destroy pool
pool.destroy();