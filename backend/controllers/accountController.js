const asyncHandler = require('express-async-handler')

//description: Get Accounts
//@route GET /api/account
//@access private

const getAccount = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get goals`})
})

//description: set Accounts
//@route SET /api/goals
//@access private

const setAccount = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    res.status(200).json({ message: `set goals`})
})

//description: Put accounts
//@route PUT /api/account/:id
//@access private

const putAccount = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal: ${req.params.id}`})
})

//description: delete accounts
//@route DELETE /api/account/:id
//@access private

const deleteAccount = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal: ${req.params.id}`})
})

module.exports = {
    getAccount, setAccount, putAccount, deleteAccount,
}