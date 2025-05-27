const express = require('express');
const locationRouter = express.Router();
const locationController = require('../controllers/locationController');

locationRouter.get('/countries', locationController.getCountries);
locationRouter.get('/states/:code', locationController.getStatesByCountry);
locationRouter.get('/cities/:countryName/:stateName', locationController.getCitiesByState);

module.exports = locationRouter;
