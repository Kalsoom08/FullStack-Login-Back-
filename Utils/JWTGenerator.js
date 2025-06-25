require('dotenv').config()
const jwt = require('jsonwebtoken')

const key = process.env.JWT_KEY;
const expiresIn = process.env.EXPIRE_IN;

if (!key) throw new Error('Missing JWT_KEY in .env');

const signToken = (payload)=>{
    return jwt.sign(payload, key, {expiresIn})
}

const verifyToken =(token)=>{
    try {
        jwt.verify(token, key)
    } catch (error) {
       return null 
    }
}

module.exports = {signToken, verifyToken}