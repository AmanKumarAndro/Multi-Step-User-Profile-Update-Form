import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalDetails from './components/ProfessionalDetails';
import Preferences from './components/Preferences';
import Summary from './components/Summary';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: '',
    username: '',
    currentPassword: '',
    newPassword: '',
    gender: '',
    customGender: '',
    dateOfBirth: '',
    profession: '',
    companyName: '',
    addressLine1: '',
    country: '',
    state: '',
    city: '',
    subscriptionPlan: 'Basic',
    newsletter: true,
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {step === 1 && (
        <PersonalInfo formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <ProfessionalDetails formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <Preferences formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (
        <Summary formData={formData} prevStep={prevStep} />
      )}
    </div>
  );
}

export default App;
