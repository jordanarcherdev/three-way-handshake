const express = require('express');
const app = express();
const port = 5050;
const mongoose = require('mongoose');
const axios =  require('axios');
let address;

var instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 3000
});

instance.get('/getaddress')
  .then(response => {
    console.log(response.data.address);
    let address = response.data.address;
    console.log(`App initialized to ${address}`);
  });

//Test server is live
app.get('/', (req, res) => {
  res.send('Application is working');
})

//We recieve the ngrok address by going here


//Then we go to the address to see what the local server has to say



app.listen(port, () => {
  console.log(`Application Running On Port ${port}`)
})
