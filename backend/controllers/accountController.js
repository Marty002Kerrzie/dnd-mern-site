//description: Get Accounts
//@route GET /api/account
//@access private

const getAccount = (req, res) => {
    res.status(200).json({ message: `Get goals`})
}

//description: set Accounts
//@route SET /api/goals
//@access private

const setAccount = (req, res) => {
    res.status(200).json({ message: `set goals`})
}

//description: Put accounts
//@route PUT /api/account/:id
//@access private

const putAccount = (req, res) => {
    res.status(200).json({ message: `Update goal: ${req.params.id}`})
}

//description: delete accounts
//@route DELETE /api/account/:id
//@access private

const deleteAccount = (req, res) => {
    res.status(200).json({ message: `delete goal: ${req.params.id}`})
}

module.exports = {
    getAccount, setAccount, putAccount, deleteAccount,
}