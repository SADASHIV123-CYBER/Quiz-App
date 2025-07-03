const question = [
    {
        question: 'which of the following type of database',
        answer: [
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

const currentQuestionIndex = 0;
const score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
}
