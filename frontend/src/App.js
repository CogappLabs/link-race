import React, { useState } from 'react';
import { fetchQuestions } from './fetchQuestions'
// Components
import Question from './components/Question';

function App() {
  // TODO: This will come from data
  const TOTAL_QUESTIONS = 10;

  // Is the game loading
  const [loading, setLoading] = useState(false)
  // Question number
  const [number, setNumber] = useState(0)
  // An array containing the correct answers
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  // Is the game over
  const [gameEnd, setGameEnd] = useState(true)
  // Modal state
  const [showModal, setShowModal] = useState(false)

  // Fetches data, sets up quiz
  const startQuiz = async () => {
    setLoading(true)
    setGameEnd(false)
    // Does this have to happen here?
    // TODO: Use a try/catch
    const questions = await fetchQuestions()
    console.log("questions:", questions[number].answers)
    setUserAnswers([])
    setNumber(0)
    setQuestions(questions)
    // Once everything above is done we won't be loading anymore
    setLoading(false)
    // console.log("answers:", answers)
  }

  // Checks answer on click
  const checkAnswer = (e) => {

  }

  // Moves to next object on click
  const goToNextObject = () => {

  }

  // Open modal
  const toggleModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="App">
      {/* Info/rules modal */}
      <button>?</button>

      {/* Start button */}
      {/* Only show if game is not started */}
      {gameEnd && (
        <button onClick={startQuiz}>Begin</button>
      )}

      {/* Loading text */}
      {/* Only show if loading is true */}
      {/* TODO: Use animation? */}
      {loading && <p>Loadinggg...</p>}

      {/* Question */}
      {/* Only show if not loading or game ended */}
      {!loading && !gameEnd && (
        <Question
          answers={questions[number].answers}
          correctAnswer={questions[number].correctAnswer}
          userAnswer={userAnswers[number] ? userAnswers[number] : undefined}
          goToNextObject={goToNextObject} 
          checkAnswer={checkAnswer}
          toggleModal={toggleModal} 
          showModal={showModal}
        />
      )}

      {/* Journey progress */}
      <div>Joourney progress bar</div>
    </div>
  );
}

export default App;
