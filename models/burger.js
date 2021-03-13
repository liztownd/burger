const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
      },

    insert(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, (res) => cb(res));
      },

     update(value, id, cb) {
         orm.update('burgers', 'devoured', value, id, (res) => cb(res));
       },

    delete(id, cb) {
        orm.delete('burgers', id, (res) => cb(res));
    }

};

module.exports = burger;