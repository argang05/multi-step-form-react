// PersonalInformation.js
import React, { useState } from 'react';
import "./PersonalInformation.scss"

const PersonalInformation = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className= 'personal-information'>
      <h3>Multi-Step Form:</h3>
      <p>Step 1 : Personal Information</p>
      <form onSubmit={handleNext}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalInformation;
