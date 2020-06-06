const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Address = require('./models/Address');
const db = 'mongodb://127.0.0.1:27017/mitm';
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('Mongodb Connected ...'))
  .catch(err => console.log)


//Test server is live
app.get('/', (req, res) => {
  res.send('Man in the middle says hello!');
})

//We need 2 routes here one to recieve our ngrok address
app.post('/recieveaddress', (req, res) => {
  console.log(req)
    const user = req.body.user;
    const address = req.body.address;

    const newAddress = new Address({
      user: user,
      address: address
    })
    newAddress.save().then(address => {
      res.json(address);
    });
})

//And one to serve the address to our application
app.get('/getaddress', (req, res) => {
  Address.findOne({user: 'user'}).then(address => {
    res.json(address);
  }).catch(err => console.log);
})

app.listen(port, () => {
  console.log(`Online Server Running On Port ${port}`)
})
