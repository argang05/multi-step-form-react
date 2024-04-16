// MultiStepForm.js
import React, { useState } from 'react';
import PersonalInformation from './components/Personal Information/PersonalInformation';
import MedicalCondition from './components/Medical Condition/MedicalCondition';
import ContactInformation from './components/Contact Information/ContactInformation';
import FormSummary from './components/Form Summary/FormSummary';
import SuccessPage from './components/Sucess Page/SuccessPage';
import ProgressBar from './components/Progress Bar/ProgressBar';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    country: '',
    department: '',
    disease: '',
    reports: '',
    email: '',
    phone: '',
  });

  const totalSteps = 4; // Total number of steps in the form

  const submitForm = () => {
    // Submit form logic here
    setStep(step + 1)
    // console.log('Form submitted:', formData);
  };

  const goToFirstPage = () => {
    setStep(1);
  }

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

switch (step) {
    case 1:
      return (
        <div className="multi-step-form-container">
          <PersonalInformation formData={formData} setFormData={setFormData} nextStep={nextStep} />
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>
      );
    case 2:
      return (
        <div className="multi-step-form-container">
          <MedicalCondition formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>
      );
    case 3:
      return (
        <div className="multi-step-form-container">
          <ContactInformation formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>
      );
    case 4:
      return (
        <div className="multi-step-form-container">
          <FormSummary formData={formData} prevStep={prevStep} submitForm={submitForm} />
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>
    );
   case 5:
     return (
        <div className="multi-step-form-container">
          <SuccessPage goToFirstPage={goToFirstPage} />
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
        </div>
    );
    default:
      return null;
  }
};

export default MultiStepForm;
