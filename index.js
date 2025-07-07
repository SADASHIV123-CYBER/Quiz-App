const questions = [
    {
        question: 'which of the following type of database',
        answers: [
            {text: 'java', correct: false},
            {text: 'python', correct: false},
            {text: 'mongoDb', correct: true},
            {text: 'php', correct: false}
        ]
    },

    {
        question: ' Among the following, which is the HTML paragraph tag?',
        answers: [
            { text: 'p', correct: true },
            { text: 'pre', correct: false },
            { text: 'hr', correct: false },
            { text: 'a', correct: false },
        ]
    },
    {
        question: 'The full form of CSS is:',
        answers: [
            { text: 'Colored Special Sheets', correct: false },
            { text: 'color sheet styles', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'None', correct: false },
        ]
    },

    {
        question: ' Which tag is used to create a numbered list in HTML?',
        answers: [
            { text: 'ul', correct: false },
            { text: 'ol', correct: true },
            { text: 'li', correct: false },
            { text: 'None Of these', correct: false },
        ]
    },
    {
        question: ' What is the default display property for a div element in CSS?',
        answers: [
            { text: 'block', correct: true },
            { text: 'inline-block', correct: false },
            { text: 'inline', correct: false },
            { text: 'flex', correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion()
}

function showQuestion() { 
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer)

    })
}

function resetState() {
    nextButton.style.display = "none";

    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectBtn = e.target

    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect) {
        selectBtn.classList.add('correct')
    } else {
        selectBtn.classList.add('incorrect')
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct')
        }

        button.disabled = true;
    })

    nextButton.style.display = 'block'
    
}

function showScore() {
    resetState();

    questionElement.innerHTML = `you scored ${score} out of the ${questions.length}!!`
    nextButton.innerHTML = 'want to play again ??';
    nextButton.style.display = 'block'
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore()
    }
}

nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz()
    }
});

startQuiz();



