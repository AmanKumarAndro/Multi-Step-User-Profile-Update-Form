const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePhoto: {
    type: String 
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  customGender: {
    type: String 
  },
  dateOfBirth: {
    type: Date
  },
  profession: {
    type: String,
    enum: ['Student', 'Developer', 'Entrepreneur']
  },
  companyName: {
    type: String 
  },
  addressLine1: {
    type: String
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  subscriptionPlan: {
    type: String,
    enum: ['Basic', 'Pro', 'Enterprise']
  },
  newsletter: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
