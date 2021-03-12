const connection = require('./connection.js');

const orm = {

    selectAll(table, cb){
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, res) => {
        if (err) throw err;
        cb(res);
        });
    },

    insertOne(table, cols, cb){
        let queryString = `INSERT INTO ${table}`;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (?)';

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

   // updateOne(table, cols, ){}

}

module.exports = orm;