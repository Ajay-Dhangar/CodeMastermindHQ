import React, { useState } from 'react';

const AssessmentQuestion = ({ question, onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onNextQuestion(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <h2 className='assessment-h2'>{question.phase}</h2> {/* Make sure 'question.phase' is correct */}
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
