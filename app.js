const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
mongoose.connect('mongodb+srv://CodeWithAbhi:CodeWithAbhi%402002@cluster0.txt21qn.mongodb.net/booking?retryWrites=true&w=majority',{useNewUrlParser:true});
const port = process.env.port ||80;
// define mongoose schema 
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    desc: String
});

var contact = mongoose.model('contact', contactSchema);
// EXPRESS use huia yaha
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())
// PUG use STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
// ENDPOINTS
app.get('/', (req, res)=>{
    const radheradhe = {}
    res.status(200).render('home.pug', radheradhe);
})
app.get('/contact', (req, res)=>{
    const radheradhe = {}
    res.status(200).render('contact.pug', radheradhe);
})
app.get('/classInfo', (req, res)=>{
    const radheradhe = {}
    res.status(200).render('classInfo.pug', radheradhe);
})
app.get('/about', (req, res)=>{
    const radheradhe = {}
    res.status(200).render('about.pug', radheradhe);
})

app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
    res.status(200).render("home.pug")
    }).catch(()=>{
    res.status(400).send("item not saved by some technical issue")
});
//res.status(200).render('contact.pug')
})
// sarver start 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
