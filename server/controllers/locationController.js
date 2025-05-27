const Country = require('../models/Country');

// Get all countries
exports.getCountries = async (req, res) => {
  try {
    const countries = await Country.find({}, 'name code');
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get states by country code
exports.getStatesByCountry = async (req, res) => {
  try {
    const country = await Country.findOne({ name: req.params.code });
    if (!country) return res.status(404).json({ error: 'Country not found' });
    res.json(country.states.map(({ name, code }) => ({ name, code })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get cities by state code in a given country
exports.getCitiesByState = async (req, res) => {
  try {
    const { countryName, stateName } = req.params;
    const country = await Country.findOne({ name: countryName });
    if (!country) return res.status(404).json({ error: 'Country not found' });

    const state = country.states.find((s) => s.name === stateName);
    if (!state) return res.status(404).json({ error: 'State not found' });

    res.json(state.cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
