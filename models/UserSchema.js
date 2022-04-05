const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Title: { type: String, required: true },
  Email: { type: String, required: true },
  Message: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;