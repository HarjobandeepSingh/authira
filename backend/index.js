const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

"default-src 'none'; img-src 'self'"

const connectionString = "mongodb+srv://HS_21:Su22Star@cluster0.skxe1xv.mongodb.net/?retryWrites=true&w=majority";


var Users;
MongoClient.connect(connectionString, function(err, succ) {
    if(err) throw err;
    console.log('Db Connected');
    var db = succ.db('dash');
    Users = db.collection('Users');
    Posts = db.collection('post');
})


app.post('/AddUser', (req,res) => {
     console.log(req.body);
    Users.insertOne(req.body).then((succ) => {
        res.send("ok");
    })
    // Users.insertOne({
    //     Name:'Aru',
    //     Email:'aru@gmail.com',
    //     Password:'123456',
    //     Contact:4561231232,
    //     Gender:'Male'
    // }).then((succ) => {
    //     res.send(succ);
    // })
})
app.post('/AddPost', (req,res) => {
    console.log(req.body);
    
    Posts.insertOne(req.body).then((succ) => {
        res.send("ok");
    })

})
app.get('/getUsers', (req,res) => {
    Users.find().toArray().then((succ) => {
        res.send(succ);
    })
})

app.get('/getPost', (req,res) => {
    Posts.find().toArray().then((succ) => {
        res.send(succ);
    })
})

app.post('/Login', (req,res) => {
    console.log(req.body);
    Users.findOne({
        Email:req.body.email,
        Password:req.body.password,
    }).then((succ) => {
    console.log(succ);
    if(succ){
        console.log("Success!");
        res.send("allok");
    }else{
        console.log('error');
    }
})
})



app.get('/updateonedata', (req,res) => {
    var idd = new mongodb.ObjectId("62f1e065181588aa9c094a56");
    Users.updateOne({
        _id: idd
    },{
        $set: {
            Name: "Arun",
            Email: "arun@gmail.com"
        }
    }).then((succ) => {
        res.send('Ok');
    })
})

app.post('/deleteonedata', (req,res) => {
    console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    Users.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})



app.get('/Users', (req,res) => {
    res.send({Name:'Naveen',Email:'naveen@gmail.com'});
})

app.get('/Data', (req,res) => {
    res.send({Name:'raju',Email:'raju@gmail.com'});
})


app.listen(1000, (req,res) => {
    console.log('Server Started');
})