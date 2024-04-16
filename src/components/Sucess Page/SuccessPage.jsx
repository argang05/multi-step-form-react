// SuccessPage.jsx
import React from 'react';
import './SuccessPage.scss';

const SuccessPage = ({goToFirstPage}) => {
  return (
    <div className="success-page">
      <h2>Form Submitted Successfully!</h2>
      <p>Thank you for submitting your information.</p>
      <button onClick={goToFirstPage}>Go Back To First Page</button>
    </div>
  );
};

export default SuccessPage;
