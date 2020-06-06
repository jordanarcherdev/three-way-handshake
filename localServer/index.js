const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
var instance = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 3000
});

//Ngrok (Our way out)
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(port)
    .then(url => {
      console.log(url);
      //Here we forward the url to our man in the middle Server
      instance.post('/recieveaddress', {
        user: 'user',
        address: url
      })
        .then(response => {
          console.log(response.data);
        }).catch(err => console.log)
    })
})();

//This is what we want to see without knowing ip or address!
app.get('/', (req, res) => {
  res.send('Yo Dawg, Glad you could make it!')
})



app.listen(port, () => {
  console.log(`Local Server Running On Port ${port}`)
})
