const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/checked-role-middleware');

router.get('/', restricted, checkRole('STUDENT'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/something', restricted, checkRole('STUDENT'), checkRole('TUTOR'), (req, res) => {
  res.send('yah');
})

module.exports = router;