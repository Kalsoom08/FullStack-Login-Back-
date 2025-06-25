require('dotenv').config()
const mongoose = require('mongoose')
const ConnectionString = process.env.DB_STRING;

const connect = async()=>{
try {
    await mongoose.connect(ConnectionString);
    console.log("DB Connected");
} catch (error) {
    console.log(error.message);
    process.exit(1)  
}
}

module.exports = connect