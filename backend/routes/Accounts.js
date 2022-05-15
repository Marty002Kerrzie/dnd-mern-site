const router = require('express').Router();
let Account = require('../models/function.model');

//route for getting the accounts
router.route('/').get((req, res) => {
    Account.find()
    .then(account => res.json(account))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for getting the mongoDB created ID attached to each new account
router.route('/:id').get((req, res) => {
    Account.findById(req.params.id)
    .then(account => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for deleting the account
router.route('/:id').delete((req, res) => {
    Account.findByIdAndDelete(req.params.id)
    .then(account => res.json(account))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for updating an account
router.route('/update/:id').post((req, res) => {
    Account.findById(req.params.id)
    .then(account => {
        account.username = req.body.username;
        account.password = req.body.password;
        account.Email = req.body.Email;

        account.save()
    .then(() => res.json('Account Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//route for creating new accounts
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const Email = req.body.Email;

    const newAccount = new Account({
        username,
        password,
        Email,
    });

    newAccount.save()
    .then(() => res.json('Account Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
