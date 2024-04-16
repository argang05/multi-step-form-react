import React from 'react';
import './ProgressBar.scss'

const ProgressBar = ({ currentStep, totalSteps }) => {
  const calculateProgress = () => {
    return ((currentStep - 1) / totalSteps) * 100;
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${calculateProgress()}%` }}></div>
    </div>
  );
};

export default ProgressBar;