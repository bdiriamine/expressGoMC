
const express = require('express');
const tempsDuTravailMiddleware = require('./middleware/tavailMiddleware');


const app = express()
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views' ,'./views')
app.get('/',tempsDuTravailMiddleware,(req,res)=>{
    res.render('home',{title: 'Home'})
})
app.get('/services',tempsDuTravailMiddleware,(req,res)=>{
    res.render('services',{title: 'services'})
})
app.get('/contact',tempsDuTravailMiddleware,(req,res)=>{
    res.render('contact',{title: 'contact'})
})
app.listen(port,()=>{
    console.log('bienvenu a  notre applciation')
})