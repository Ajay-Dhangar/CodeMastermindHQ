import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './styling.css';
import AssessmentQuestion from './AssessmentQuestion'; // Make sure the path is correct
import assessmentData from './assessmentData';

const Assessment = () => {
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
          <h2 className='assessment-h2'>Assessment Completed</h2>
          <p>Your Score: {totalScore} out of {assessmentData.length}</p>
        </div>
      );
    }
  };

  return (
    <Layout wrapperClassName="main-code-container">
      <div className="Assessment">
        <h1 className="assessment-h1 assessment-title">Developer Assessment</h1>
        {renderContent()}
      </div>
    </Layout> 
  );
};

export default Assessment;
