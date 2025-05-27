import axios from 'axios';
import React, { useState } from 'react';

function Summary({ formData, prevStep }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const api = import.meta.env.VITE_API_URL;

    const handleSubmit = async () => {
        setLoading(true);
        setMessage(null);

        try {
            const submissionData = { ...formData };

            // Remove preview URL if present (optional, for base64 image)
            if (submissionData.profilePhoto?.preview) {
                delete submissionData.profilePhoto.preview;
            }

            await axios.post(`${api}/api/user/update-user`, submissionData);
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        } catch (err) {
            console.error('Submission failed:', err);
            setMessage({ type: 'error', text: 'Submission failed. Check console for details.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6 bg-white w-full p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Review Your Details</h2>
      
        <div className="grid gap-3 text-gray-700">
          {formData.profilePhoto && (
            <div>
              <p className="font-medium">Profile Photo:</p>
              <img
                src={formData.profilePhoto}
                alt="Profile"
                className="w-24 h-24 mt-2 object-cover rounded-full border"
              />
            </div>
          )}
      
          {Object.entries(formData).map(
            ([key, value]) =>
              key !== 'profilePhoto' &&
              value !== '' &&
              value !== undefined && (
                <div key={key} className="flex items-start">
                  <p className="font-medium capitalize w-40">{key.replace(/([A-Z])/g, ' $1')}:</p>
                  <p className="text-gray-600">{String(value)}</p>
                </div>
              )
          )}
        </div>
      
        {message && (
          <div
            className={`p-3 text-sm rounded-md border ${message.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-700'
              : 'bg-red-50 border-red-200 text-red-700'
              }`}
          >
            {message.text}
          </div>
        )}
      
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition duration-200"
          >
            Back
          </button>
      
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
      
    );
}

export default Summary;
