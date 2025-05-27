import React from 'react';

function ProfessionalDetails({ formData, updateFormData, nextStep, prevStep }) {
  const validateStep = () => {
    if (!formData.profession) {
      alert('Profession is required');
      return false;
    }

    if (formData.profession === 'Entrepreneur' && !formData.companyName.trim()) {
      alert('Company Name is required for Entrepreneurs');
      return false;
    }

    if (!formData.addressLine1.trim()) {
      alert('Address Line 1 is required');
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
    <label className="block text-sm font-medium text-gray-700 mb-1">Profession*</label>
    <select
      value={formData.profession}
      onChange={(e) =>
        updateFormData({ profession: e.target.value, companyName: '' })
      }
      className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Profession</option>
      <option value="Student">Student</option>
      <option value="Developer">Developer</option>
      <option value="Entrepreneur">Entrepreneur</option>
    </select>
  </div>

  {formData.profession === 'Entrepreneur' && (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
      <input
        type="text"
        value={formData.companyName}
        onChange={(e) => updateFormData({ companyName: e.target.value })}
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )}

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1*</label>
    <input
      type="text"
      value={formData.addressLine1}
      onChange={(e) => updateFormData({ addressLine1: e.target.value })}
      className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
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

export default ProfessionalDetails;
