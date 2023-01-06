const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3001;

var dataRouter = require('./routes/data');

// const statusCheck = (data, res) => {
// console.log(data);
// res.sendFile(path.join(__dirname + '/public/index.html')); 
// };

// //Middleware
// app.use(express.static(__dirname + '/public' ));

// app.get('/',function(req,res) {
//   const StatusUrl = 'https://us-east1-healthcarepci.cloudfunctions.net/StatusCheck';
//   console.log(StatusUrl)
//     const userAction = async (fun) => {
//         const response=await fetch(StatusUrl)
//         .then(response => response.json())
//         .then(json => fun(json,res))
//     }
//     userAction(statusCheck);
//   });

app.use('/', dataRouter); 



app.listen(port ,(error) =>{
  if(!error)
      console.log("Server is Successfully Running \n  App is listening on port "+ port)
  else 
      console.log("Error occurred, server can't start", error);
  }
);