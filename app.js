const express = require('express')
const app = express();
var cors = require('cors');
app.use(cors());
//const uri = process.env.URI;
//The webiste-->Node
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(express.json()); // To parse JSON request bodies
var url = "mongodb://localhost:27017/deva_subbu_test";
mongoose.connect(url);
app.use(express.urlencoded({ extended: true }));
console.log("connection good");
app.get('/api', (req, res) => {
	res.send("From the server side of signup");
})

app.use('/', require('./routes/index'));
app.listen(8000);