const Auth = require('../Models/authModel')

const registerUser = async(req, res)=>{
    try {
        const {userName, email, password, role} = req.body;

            if (!userName || !email || !password || !role) {
            return res.status(400).json({
                message: "All feilds are required"
            });
        }

        const user = await Auth.create({
            userName,
            email,
            password,
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


module.exports = {registerUser}