const asyncHandler = require('express-async-handler');

const Account = require('../models/accountModel');
const User = require('../models/userModel');


//description: Get Accounts
//@route GET /api/account
//@access private

const getAccount = asyncHandler(async (req, res) => {
    const character = await Account.find( { user: req.user.id })

    res.status(200).json({ character })
})

//description: set Accounts
//@route SET /api/goals
//@access private

const setAccount = asyncHandler(async (req, res) => {
    if(!req.body.character) {
        res.status(400)
        throw new Error('please add a Name for your character')
    } else if (!req.body.race) {
        res.status(400)
        throw new Error("please add your character's race")
    } else if (!req.body.level) {
        res.status(400)
        throw new Error('please add your level')
    } 

    const account = await Account.create({
        character: req.body.character,
        race: req.body.race,
        level: req.body.level,
        user: req.user.id
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

    const user = await User.findById(req.user.id)

    //check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches the account creator
    if(account.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
        character: req.body.character,
        race: req.body.race,
        level: req.body.level,
        user: req.user.id,
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
        throw new Error('Character not found')
    }

    const user = await User.findById(req.user.id)

    //check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches the account creator
    if(account.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    await account.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getAccount, setAccount, putAccount, deleteAccount,
}