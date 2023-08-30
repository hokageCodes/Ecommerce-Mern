const { default: mongoose } = require('mongoose')
const dbConnect = () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected successfully')
    } catch (error) {
        console.log('Database Error')
    }
}
module.exports = dbConnect;