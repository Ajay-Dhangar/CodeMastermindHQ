import React, { useState } from 'react';
import { Question } from './assessmentData';

interface AssessmentQuestionProps {
  question: Question;
  onNextQuestion: (answer: string) => void;
}

const AssessmentQuestion: React.FC<AssessmentQuestionProps> = ({ question, onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onNextQuestion(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleAnswerChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default AssessmentQuestion;
