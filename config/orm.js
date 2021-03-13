const connection = require('./connection.js');

const orm = {

    selectAll(table, cb){
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, res) => {
        if (err) throw err;
        cb(res);
        });
    },

    insertOne(table, cols, value, cb){
        let queryString = `INSERT INTO ${table}`;
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES ("';
        queryString += value.toString();
        queryString += '")';

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },

   update(table, cols, value, id, cb){
       let queryString = `UPDATE ${table} SET ${cols.toString()} = ${value.toString()} WHERE id = ${id} `

       connection.query(queryString, (err, res) => {
           if (err) throw err;
           cb(res);
       })
   },

   delete(table, id, cb) {
       let queryString = `DELETE FROM ${table} WHERE id = ${id}`;

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
   }

}

module.exports = orm;