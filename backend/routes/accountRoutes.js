const express = require('express')
const { set } = require('mongoose')
const router = express.Router()
const { getAccount, setAccount, putAccount, deleteAccount } = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware');

//get and post accounts
router.route('/').get(protect, getAccount).post(protect, setAccount)

//delete and update account
router.route('/:id').put(protect, putAccount).delete(protect, deleteAccount)



module.exports = router