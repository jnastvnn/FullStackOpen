require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)
console.log(mongoUrl)


app.use(cors())
app.use(express.json())

app.use('api/blogs', blogsRouter)

module.exports = app