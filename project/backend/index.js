const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const connectionString ="mongodb+srv://HS_21:Su22Star@cluster0.skxe1xv.mongodb.net/?retryWrites=true&w=majority";

var users;
MongoClient.connect(connectionString, function(err, succ) {
    if(err) throw err;
    console.log('Db Connected');
    var db = succ.db('Test');
    users = db.collection('Users');
})


app.post('/AddUser', (req,res) => {
    // console.log(req.body);
    
    users.insertOne(req.body).then((succ) => {
        res.send("ok");
    })

})
app.post('/AddPost', (req,res) => {
    console.log(req.body);
    
    users.insertOne(req.body).then((succ) => {
        res.send("ok");
    })

})

app.get('/getUsers', (req,res) => {
    users.find().toArray().then((succ) => {
        res.send(succ);
    })
})

app.get('/getoneUsers', (req,res) => {
    users.findOne({
        Email:'naveen@gmail.com',
        Password: '123456'
    }).then((succ) => {
        res.send(succ);
    })
})

app.get('/getGenderUsers', (req,res) => {
    users.find({
        Gender:'Female'
    }).toArray().then((succ) => {
        res.send(succ);
    })
})

app.get('/updateonedata', (req,res) => {
    var idd = new mongodb.ObjectId("62f1e065181588aa9c094a56");
    users.updateOne({
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
    users.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})

app.listen(1000,(req,res) => {
    console.log('server started');
})