import { shuffleArray } from './utils'
import data from './20211118-173517-paths.json'

export const fetchQuestions = async () => {
    const path = data[0]
    return path.map((question) => (
        {
            answers: shuffleArray([question.nextBestStep, ...question.neighbours]),
            correctAnswer: question.nextBestStep
        }
    ))
}