const express = require('express')
const { set } = require('mongoose')
const router = express.Router()
const { getAccount, setAccount, putAccount, deleteAccount } = require('../controllers/accountController')

//get and post accounts
router.route('/').get(getAccount).post(setAccount)

//delete and update account
router.route('/:id').put(putAccount).delete(deleteAccount)



module.exports = router