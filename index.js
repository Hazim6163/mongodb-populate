//populate was successfully between the posts and tags and too between the categories 

require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const upload = require('express-fileupload');

// connect to the database :
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
// check if the we connected to db or not 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to the mongo db !!');
});

//body parser middleware
app.use(bodyParser.json());
app.use(upload());

//routes: 
const posts = require('./routes/posts');
app.use('/posts', posts);
const tags = require('./routes/tags');
app.use('/tags', tags);
const categories = require('./routes/categories');
app.use('/categories', categories);

app.listen(3001, () => {
    console.log("Server working on : http://localhost:3001/");
});