const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors')
require('dotenv').config()
const cors = require('cors');
const router = require('./routes/TodoRoute')
const app = express()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`connected to databas:${conn.connection.host}`.blue)
    } catch (error) {
        console.log(error)
    }
}
connectDB()
app.use(cors())
app.use(express.json())
app.use('/', router)

const PORT = process.env.port || 5000
app.listen(PORT, () => console.log(`server is running on port:${PORT}`.yellow))