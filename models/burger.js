const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
      },

    insert(cb) {
        orm.insertOne('burgers', 'burger_name', (res) => cb(res));
      },

    // updateOne(cb) {
    //     orm.all('burger_name', (res) => cb(res));
    //   },

};

module.exports = burger;