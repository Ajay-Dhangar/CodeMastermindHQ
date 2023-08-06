import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './styling.css'; // Include your custom styles
import AssessmentQuestion from './AssessmentQuestion';
import assessmentData, { Question } from './assessmentData';

const Assesment: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleNextQuestion = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateScore = (): number => {
    // Calculate user's score based on correct answers
    let score = 0;
    assessmentData.forEach((question: Question, index: number) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const renderContent = (): JSX.Element => {
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
          <h2>Assessment Completed</h2>
          <p>Your Score: {totalScore} out of {assessmentData.length}</p>
        </div>
      );
    }
  };

  return (
    <Layout wrapperClassName="main-code-container">
      <div className="Assesment">
        <h1 className="assesment-title">Developer Assessment</h1>
        {renderContent()}
      </div>
    </Layout>
  );
};

export default Assesment;
