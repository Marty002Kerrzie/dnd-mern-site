const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc     register a new user
//@ route   post api/users
//@access   public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, username } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if email or username are already being used
    const emailExists = await User.findOne({email})
    if (emailExists) {
        res.status(400)
        throw new Error('Email already has an account')
    }

    const usernameExists = await User.findOne({ username })
    if (emailExists) {
        res.status(400)
        throw new Error('username taken')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        email, 
        password: hashedPassword,
        username
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc     LOG IN an existing user
//@ route   post api/users
//@access   public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //check for the email 
    const user = await User.findOne({ email })

    //see if email exists
    const emailExists = await User.findOne({email})
    if (!emailExists) {
        res.status(400)
        throw new Error('Email not registered with us')
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    
})

//@desc     Get user DATA
//@ route   post api/users
//@access   private
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email, username } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
        username,
    })
})

//GENERATE A JWT TOKEN
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = { 
    registerUser, loginUser, getMe
 }