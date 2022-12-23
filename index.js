const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 5000;

//Middleware
app.use(express.static(__dirname + '/public' ));

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/public/index.html')); 
  });

app.use('/', router); 
app.listen(port || 3000); 
console.log('Running at Port ',port); 