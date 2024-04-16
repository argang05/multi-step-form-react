// ContactInformation.js
import React, { useState } from 'react';
import './ContactInformation.scss'

const ContactInformation = ({ formData, setFormData, nextStep , prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className='contact-information'>
      <h3>Multi-Step Form:</h3>
      <p>Step 3 : Contact Information</p>
      <form onSubmit={handleNext}>
        <label>
          Email Address:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit">Next</button>
        <button type="submit" onClick={handleBack}>Back</button>
      </form>
    </div>
  );
};

export default ContactInformation;
