import React from 'react';
// Components
import Modal from './Modal';
import Option from './Option';

const Question = ({ question, answer, userAnswer, goToNextObject, checkAnswer }) => (
    <div className="question">
        {/* Options */}
        {/* TODO: map() the options from the API */}
        <div>
            <Option checkAnswer={checkAnswer} />
            <Option checkAnswer={checkAnswer} />
            <Option checkAnswer={checkAnswer} />
            <Option checkAnswer={checkAnswer} />
        </div>

        {/* Answer form */}
        <p>Pick an answer below</p>
        <form>
        {/* TODO: map() the options from the API */}
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
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