import React from 'react';
// Components
import Modal from './Modal';
import Option from './Option';

const Question = ({ answers, correctAnswer, userAnswer, goToNextObject, checkAnswer }) => (
    <div className="question">
        {/* Options */}
        {/* TODO: map() the answers */}
        <div>
            {answers.map((answer) => (
                <Option 
                    // NB: Might need to refactor if answer is more than one thing
                    key={answer}
                    optionUrl={answer} />
            ))}
        </div>

        {/* Answer form */}
        <p>Pick an answer below</p>
        <form>
            {answers.map((answer) => (
                <button key={answer}>{answer}</button>
            ))}
        </form>

        {/* Modal */}
        {/* Will show whether you got it right or wrong. 
        If right then it'll show the 'next question' button */}
        <Modal>
            {/* TODO: If user answer matches the answer then right, else wrong */}
            <p>You're right/wrong!</p>
            <button onClick={goToNextObject}>Go to next object</button>
        </Modal>
    </div>
)

export default Question