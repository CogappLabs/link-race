import React, { useState, useEffect } from 'react';
import { fetchMetadata } from '../fetchMetadata'
// Components
import Modal from './Modal';
import Option from './Option';

const Question = ({ 
    answers, 
    correctAnswer, 
    userAnswer, 
    goToNextObject, 
    checkAnswer, 
    toggleModal,
    showModal }) => {
        console.log("answers:", answers)

    const [optionsMetadata, setOptionsMetadata] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        Promise.all(answers.map((answer) => fetchMetadata(answer))).then(
            (optionsMetadataTwo) => {
                console.log("metadata", optionsMetadataTwo)
                setOptionsMetadata(optionsMetadataTwo)
            }
        ).then(
            () => {
                setLoading(false)
            }
        ).catch(
            console.error
        )
        
        
        // console.log("metadata", optionMetadata)
    }, [])

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="question">
            {/* Options */}
            {/* TODO: map() the answers */}
            <div>
                {answers.map((answer, index) => {

                    return (
                        <Option 
                            // NB: Might need to refactor if answer is more than one thing
                            key={answer}
                            optionUrl={answer}
                            toggleModal={toggleModal}
                            showModal={showModal}
                            optionMetadata={optionsMetadata[index]} />
                    )
                })}
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
        
}

export default Question