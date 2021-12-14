const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path=require('path')
const PORT= process.env.PORT||5000

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

//Template Engine Setup
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('views engine','ejs')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})