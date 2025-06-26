const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const connect = require('./Config/connect')
connect()
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use(express.json())

const authRoutes = require('./Routes/authRoute')

app.use('/api/user', authRoutes)



const port = 4000;
app.listen(port , () => console.log(`Your server is running on post number ${port}`) );