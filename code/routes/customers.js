const { Client } = require('pg');
var databaseHost = process.env.POSTGRES_HOST;
var databaseName = process.env.POSTGRES_DB;
var databaseUser = process.env.POSTGRES_USER;
var databasePassword = process.env.POSTGRES_PASSWORD;
var databasePort = 5432;
var connectionString = `postgres://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`;

const client = new Client({
    connectionString: connectionString
});

client.connect();
client.query(
    "CREATE TABLE IF NOT EXISTS customer (id serial NOT NULL, name character varying(200) NOT NULL,address text NOT NULL, email character varying(200) NOT NULL, phone character varying(20) NOT NULL )",
    function (err) {
        if (err) {
            console.log(err);
        }
        console.log(`Database Connected: ${connectionString}`);
    }
  );

exports.list = function (req, res) {

    client.query('SELECT * FROM customer', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('customer/list', { title: "Customers", data: result.rows });
    });

};

exports.add = function (req, res) {
    res.render('customer/add', { title: "Add Customer"  });
};

exports.edit = function (req, res) {

    var id = req.params.id;

    client.query('SELECT * FROM customer WHERE id=$1', [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('customer/edit', { title: "Edit Customer", data: result.rows });
    });

};

exports.save = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone];

    client.query('INSERT INTO customer(name, address, email, phone) VALUES($1, $2, $3, $4) RETURNING *', cols, function (err, result) {
        if (err) {
            console.log("Error Saving : %s ", err);
        }
        res.redirect('/customers');
    });

};

exports.update = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone, req.params.id];

    client.query('UPDATE customer SET name=$1, address=$2,email=$3, phone=$4 WHERE id=$5', cols, function (err, result) {
        if (err) {
            console.log("Error Updating : %s ", err);
        }
        res.redirect('/customers');
    });

};

exports.delete = function (req, res) {

    var id = req.params.id;

    client.query("DELETE FROM customer WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error deleting : %s ", err);
        }
        res.redirect('/customers');
    });

};


