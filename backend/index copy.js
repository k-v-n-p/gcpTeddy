const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 5000;

const statusCheck = (data, res) => {
console.log(data);
res.sendFile(path.join(__dirname + '/public/index.html')); 
};

//Middleware
app.use(express.static(__dirname + '/public' ));

app.get('/',function(req,res) {
  const StatusUrl = 'https://us-east1-healthcarepci.cloudfunctions.net/StatusCheck';
  console.log(StatusUrl)
    const userAction = async (fun) => {
        const response=await fetch(StatusUrl)
        .then(response => response.json())
        .then(json => fun(json,res))
    }
    userAction(statusCheck);
  });

app.use('/', router); 
app.listen(port || 3000); 
console.log('Running at Port ',port); 