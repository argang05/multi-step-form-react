// FormSummary.js
import React from 'react';
import './FormSummary.scss'
import pdfIcon from "../../assets/pdf-icon.png"

const FormSummary = ({ formData, prevStep, submitForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const renderFilePreview = () => {
    if (formData.reports) {
      return (
        <div>
          <h6>Uploaded File</h6>
          {formData.reports.type === 'application/pdf' ? (
            <div>
              <img height={'50px'} src={pdfIcon} alt="PDF Icon" style={{ maxWidth: '50px' }} />
              <span>{formData.reports.name}</span>
            </div>
          ) : (
            <img height={'50px'} width={'50px'} src={URL.createObjectURL(formData.reports)} alt="File Preview" style={{ maxWidth: '100px' }} />
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='form-summary'>
      <h3>Form Summary</h3>
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Country: {formData.country}</p>
      <p>Department: {formData.department}</p>
      <p>Disease: {formData.disease}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      {renderFilePreview()}
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormSummary;