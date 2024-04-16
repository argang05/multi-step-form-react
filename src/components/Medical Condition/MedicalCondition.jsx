// MedicalCondition.js
import React, { useState } from 'react';
import './MedicalCondition.scss';
import pdfIcon from "../../assets/pdf-icon.png"

const MedicalCondition = ({ formData, setFormData, nextStep , prevStep }) => {
  const [filePreview, setFilePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'reports' && files && files[0]) {
      const file = files[0];
      setFormData({ ...formData, reports: file });
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="medical-condition">
      <h3>Multi-Step Form:</h3>
      <p>Step 2 : Medical Condition</p>
      <form onSubmit={handleNext}>
        <label>
          Department:
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
          </select>
        </label>
        <label>
          Disease:
          <select name="disease" value={formData.disease} onChange={handleChange}>
            <option value="heart">Heart Disease</option>
            <option value="stroke">Stroke</option>
            <option value="fracture">Fracture</option>
          </select>
        </label>
        <label>
          Upload Reports:
          <input type="file" name="reports" accept=".pdf,.jpeg,.png" onChange={handleChange} />
        </label>
        {filePreview && (
          <div>
            <h6>File Preview:</h6>
            {formData.reports.name.toLowerCase().endsWith('.pdf') ? (
              <div>
                <img height={'50px'} src={pdfIcon} alt="PDF Icon" />
                <span>{formData.reports.name}</span>
              </div>
            ) : (
              <img height={'50px'} width={'50px'} src={filePreview} alt="File Preview" />
            )}
          </div>
        )}
        <button type="submit">Next</button>
        <button type="submit" onClick={prevStep}>Back</button>
      </form>
    </div>
  );
};

export default MedicalCondition;