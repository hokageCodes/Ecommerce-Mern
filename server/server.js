// Requirements
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/auth.routes');
const { notFound, errorHandler } = require('./middlewares/errorHandler');


dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/user', authRouter);


app.use(notFound)
app.use(errorHandler)


// Running Server
app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`)
})