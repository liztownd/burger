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
      const eatIt = req.params.id;
      burger.update(
          {

          }
      )
  });

  router.post('/api/burgers', (req, res) => {
      burger.insert(['table', 'cols'], ['burgers', req.body.name], (result) => {
          res.json({ id: result.insertId, devoured: result.insertDevoured })
      })
  })
  

module.exports = router;