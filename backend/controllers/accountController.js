const asyncHandler = require('express-async-handler');

const Account = require('../models/accountModel');


//description: Get Accounts
//@route GET /api/account
//@access private

const getAccount = asyncHandler(async (req, res) => {
    const account = await Account.find()

    res.status(200).json({ account })
})

//description: set Accounts
//@route SET /api/goals
//@access private

const setAccount = asyncHandler(async (req, res) => {
    if(!req.body.username) {
        res.status(400)
        throw new Error('please add a username')
    } else if (!req.body.email) {
        res.status(400)
        throw new Error('please add an email')
    } else if (!req.body.password) {
        res.status(400)
        throw new Error('please add an email')
    } 

    const account = await Account.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    res.status(200).json({ account })
})

//description: Update or (put) accounts
//@route PUT /api/account/:id
//@access private

const putAccount = asyncHandler(async (req, res) => {
    const account = await Account.findById(req.params.id)

    if (!account) {
        res.status(400)
        throw new Error('Account not found')
    }

    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
        username: req.body.username,
        email: req.body.username,
        password: req.body.password,
        new: true,
    })


    res.status(200).json({ updatedAccount})
})

//description: delete accounts
//@route DELETE /api/account/:id
//@access private

const deleteAccount = asyncHandler(async (req, res) => {
    const account = await Account.findById(req.params.id)

    if (!account) {
        res.status(400)
        throw new Error('Account not found')
    }
    
    await account.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getAccount, setAccount, putAccount, deleteAccount,
}