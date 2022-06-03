import React from 'react';

import './index.css'

/**
 * ProgressBar component 
 */
const ProgressBar = ({ questionNumber, questionCount }) => {
  const width = questionNumber && questionCount
    ? (questionNumber / questionCount) * 100
    : 0;

  return (
    <div className={['progress-container']}>
      <div className={['progress']} style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;