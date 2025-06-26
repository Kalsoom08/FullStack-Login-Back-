const Auth = require('../Models/authModel')

const registerUser = async(req, res)=>{
    try {
        const {userName, email, password, role = 'public'} = req.body;

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

        res.status(201).json({
            message: "You Are Logged In", 
            data : isExist
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = {registerUser, loginUser}