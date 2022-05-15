const router = require('express').Router();
let User = require('../models/user.model');

//route for looking for the users (get request) -> someone looking for user
router.route('./.').get((req, res) => {
    User.find()
    .then(user => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for adding a new user to the database -> someone signing up
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

