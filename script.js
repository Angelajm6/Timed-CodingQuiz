const startButton = document.getElementById('start-btn')
const continueButton = document.getElementById ('continue-btn')
const questionBoxElement = document.getElementById ('question-box')
const questionElement = document.getElementById('question')
const answersElement = document.getElementById ('answers')


//This will default both of the values to undefined//
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
continueButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextquestion()
})

function startGame() {
console.log('Game Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionBoxElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersElement.appendChild(button)
    })
}

function resetState() {
    continueButton.classList.add('hide')
    while (answersElement.firstChild) {
        answersElement.removeChild
        (answersElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearstatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function setStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
           { text: 'Hyper Tool Markup Language', correct:false},
           { text: 'Hyper Text Markup Language', correct:true}
        ]
    }
] 
    
