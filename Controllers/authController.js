const Auth = require('../Models/authModel')
const {signToken} = require('../Utils/JWTGenerator')
const hashPassword = require('../Utils/hashPassword');
const comparePassword = require('../Utils/comparePassword.js');

const registerUser = async(req, res)=>{
    try {
        const {userName, email, password, role} = req.body;

            if (!userName || !email || !password || !role) {
            return res.status(400).json({
                message: "All feilds are required"
            });
        }

        const hashedPassword = await hashPassword(password)
        const user = await Auth.create({
            userName,
            email,
            password: hashedPassword,
            role
        })
         res.status(201).json({
            message :" Registered Successfully",
            data : user
        })

        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(501).json({message: "All feilds are required!"});
        }

        const isExist = await Auth.findOne({
            email
        })
        if(!isExist){
            res.status(404).json({
                message: 'Register Yourself first'
            })
        }
        const isPasswordMatch = await comparePassword(password, isExist.password);
        if (!isPasswordMatch) {
            return res.json(501).json({
                message: "Incorrect Password!"
            });
        }
        const token = signToken({id : isExist._id, role: isExist.role})
        res.status(201).json({
            message: "You Are Logged In", 
            data : isExist,
            token
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = {registerUser, loginUser}