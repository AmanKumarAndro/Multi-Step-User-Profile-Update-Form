const mongoose = require('mongoose');

const City = new mongoose.Schema({
  name: String,
});

const State = new mongoose.Schema({
  name: String,
  code: String,
  cities: [City],
});

const CountrySchema = new mongoose.Schema({
  name: String,
  code: String,
  states: [State],
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;
