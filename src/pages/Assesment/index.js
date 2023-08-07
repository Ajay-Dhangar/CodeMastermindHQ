import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './styling.css';
import AssessmentQuestion from './AssessmentQuestion';
import assessmentData from './assessmentData';

const Assesment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateScore = () => {
    let score = 0;
    assessmentData.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const renderContent = () => {
    if (currentQuestionIndex < assessmentData.length) {
      return (
        <div className="question-container">
          <AssessmentQuestion
            question={assessmentData[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
          />
        </div>
      );
    } else {
      const totalScore = calculateScore();
      return (
        <div className="question-container">
          <h2 className='assesment-h2'>Assessment Completed</h2>
          <p>Your Score: {totalScore} out of {assessmentData.length}</p>
        </div>
      );
    }
  };

  return (
    <Layout wrapperClassName="main-code-container">
      <div className="Assesment">
        <h1 className="assesment-h1 assesment-title">Developer Assessment</h1>
        {renderContent()}
      </div>
    </Layout> 
  );
};

export default Assesment;
