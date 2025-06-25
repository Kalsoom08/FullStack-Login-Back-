const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const connect = require('./Config/connect')
connect()




const port = 4000;
app.listen(port , () => console.log(`Your server is running on post number ${port}`) );