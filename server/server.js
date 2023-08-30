// Requirements
const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/auth.routes')
dbConnect();
app.use('/', (req, res) => {
    res.send('Server Side App')
})

app.use('/api/user', authRouter)

// Running Server
app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`)
})