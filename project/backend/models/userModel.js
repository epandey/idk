const { application } = require('express')
const connectDB = require('./config/db')

const app = express()

conn = connectDB.connectDB

app.get('/', (req, res) => {
    const sqlLogin = "SELECT * from user where id = "
});