import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Preferences({ formData, updateFormData, nextStep, prevStep }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const api = import.meta.env.VITE_API_URL

    useEffect(() => {
        const fetchCountries = async () => {
          try {
              const res = await axios.get(`${api}/api/location/countries`);
              console.log(res.data);
            setCountries(res.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchCountries();
      }, []);
      

      useEffect(() => {
        if (!formData.country) return;
      
        const fetchStates = async () => {
          try {
            const res = await axios.get(`${api}/api/location/states/${formData.country}`);
            setStates(res.data);
            updateFormData({ state: '', city: '' }); 
          } catch (err) {
            console.error(err);
          }
        };
        fetchStates();
      }, [formData.country]);
      

      useEffect(() => {
        if (!formData.state) return;
      
        const fetchCities = async () => {
          try {
            const res = await axios.get(`${api}/api/location/cities/${formData.country}/${formData.state}`);
            setCities(res.data);
            updateFormData({ city: '' }); 
          } catch (err) {
            console.error(err);
          }
        };
        fetchCities();
      }, [formData.state]);
      

  const validateStep = () => {
    if (!formData.country || !formData.state || !formData.city) {
      alert('Please select Country, State, and City');
      return false;
    }
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) nextStep();
  };

  return (
    <form onSubmit={handleNext} className="space-y-6 w-full bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
      <select
        value={formData.country}
        onChange={(e) => updateFormData({ country: e.target.value })}
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c._id} value={c.name}>{c.name}</option>
        ))}
      </select>
    </div>
  
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">State*</label>
      <select
        value={formData.state}
        onChange={(e) => updateFormData({ state: e.target.value })}
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select State</option>
        {states.map((s) => (
          <option key={s._id} value={s.name}>{s.name}</option>
        ))}
      </select>
    </div>
  
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
      <select
        value={formData.city}
        onChange={(e) => updateFormData({ city: e.target.value })}
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select City</option>
        {cities.map((c) => (
          <option key={c._id} value={c.name}>{c.name}</option>
        ))}
      </select>
    </div>
  
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Plan</label>
      <div className="space-x-4">
        {['Basic', 'Pro', 'Enterprise'].map((plan) => (
          <label key={plan} className="inline-flex items-center">
            <input
              type="radio"
              value={plan}
              checked={formData.subscriptionPlan === plan}
              onChange={(e) => updateFormData({ subscriptionPlan: e.target.value })}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-700">{plan}</span>
          </label>
        ))}
      </div>
    </div>
  
    <div>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          checked={formData.newsletter}
          onChange={(e) => updateFormData({ newsletter: e.target.checked })}
          className="text-blue-600 focus:ring-blue-500"
        />
        <span className="ml-2 text-gray-700">Subscribe to newsletter</span>
      </label>
    </div>
  
    <div className="flex justify-between">
      <button
        type="button"
        onClick={prevStep}
        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition duration-200"
      >
        Back
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
      >
        Next
      </button>
    </div>
  </form>
  
  );
}

export default Preferences;
