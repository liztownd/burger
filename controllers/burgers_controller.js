const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
     const id = req.params.id;
     const value = req.body.devoured;

      burger.update(value, id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
          }
          res.status(200).end();
      }
      )
  });

  router.post('/api/burgers', (req, res) => {
      const value = req.body.burger_name;
      console.log(value);
      
      burger.insert(value, (result) => {
          res.json({ id: result.insertId, devoured: result.insertDevoured })
      })
  });

  router.delete('/api/burgers/:id', (req, res) => {
    const id = req.params.id;

    burger.delete(id, (result) => {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
        })
  })
  

module.exports = router;