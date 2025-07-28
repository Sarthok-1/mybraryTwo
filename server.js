if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(express.static('public'))
// const db = require('./config/keys').MongoURI
// const db = process.env.DATABASE_URL
mongoose.connect(process.env.DATABASE_URL).then(()=>console.log('Connected to MongoDB...')).catch(err=>console.log(err))
// db.on('error', error=> console.error(error))
// db.once('open', ()=>console.log('connected to Mongosoe...'))
app.use('/', indexRouter)
const PORT = 4000
app.listen(process.env.PORT || PORT, console.log(`server started on PORT ${PORT}`))