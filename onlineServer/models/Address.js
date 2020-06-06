//This is in a seperate file just to keep it close to what it is i'm trying to make
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user: {
    type: String
  },
  address:{
    type: String
  }
});

module.exports = Address = mongoose.model('address', AddressSchema);
