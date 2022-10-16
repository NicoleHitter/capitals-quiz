/**
 * the dictionary from where questions will be taken 
 * the buttons constant 
 * the scores variables declared 
 */
const MY_QUESTIONS = [{
        question: "Which is the capital of Brasil?",
        answers: {
            a: 'Rio De Janeiro',
            b: 'Sao Paolo',
            c: 'Brasilia'
        },
        correctAnswer: 'Brasilia'
    },
    {
        question: "Which is the capital of Portugal?",
        answers: {
            a: 'Porto',
            b: 'Lisbon',
            c: 'Algarve'
        },
        correctAnswer: 'Lisbon'
    },
    {
        question: "Which is the capital of Romania?",
        answers: {
            a: 'Bucharest',
            b: 'Budapest',
            c: 'Transilvania'
        },
        correctAnswer: 'Bucharest'
    },
    {
        question: "Which is the capital of Canada?",
        answers: {
            a: 'Toronto',
            b: 'Ottawa',
            c: 'Ontario'
        },
        correctAnswer: 'Ottawa'
    }
];

const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const questionArea = document.getElementById('text-container');
const end = document.getElementById('end-of-quiz');
const optionsButtons = document.querySelectorAll('.buttons');
const checkBox = document.getElementsByName('planswer');

let questionIndex = -1;
let playerAnswer = '';
let score = 0;
let negscore = 0;

/**
 * This function will show to console that quiz has started
 * and as loading will hide the question area and buttons
 * leaving only the start button 
 */
function startQuiz() {
    console.log('started');
    questionArea.classList.remove('hide');
    startButton.classList.add('hide');
    displayQuestion();
}

/**
 * This function will show question
 * by taking elements by id from html and adding the text from dictionary 
 * that uses the right tag
 * as there is limited number of questions inside the dictionary 
 * this function will end once it reached the end of questions and will run the end function
 */
function displayQuestion() {
    questionIndex++;
    if (questionIndex < MY_QUESTIONS.length) {
        document.getElementById('question').innerHTML = MY_QUESTIONS[questionIndex].question;
        let answersList = MY_QUESTIONS[questionIndex].answers;
        document.getElementById('a').innerHTML = answersList.a;
        document.getElementById('b').innerHTML = answersList.b;
        document.getElementById('c').innerHTML = answersList.c;
        // this loop will change the previous checked button to not checked 
        for (let option = 0; option < checkBox.length; option++) {
            checkBox[option].checked = false;
        }
    } else {
        endQuiz();
    }
    submitButton.classList.add('hide');
    nextButton.classList.add('hide');
}

/**
 * This function will take every option button and see which one is checked 
 * then will compare the answer with correct answer
 * if correct will increase score of correct answers
 * otherwise will increase negscore of wrong answers 
 * then will increement question index to be able to go to next question
 */
function checkAnswer() {

    for (let optionsno = 0; optionsno < 3; optionsno++) {
        if (document.getElementById('firstinput').checked) {
            playerAnswer = document.getElementById('a').textContent;
        } else if (document.getElementById('secondinput').checked) {
            playerAnswer = document.getElementById('b').textContent;
        } else if (document.getElementById('thirdinput').checked) {
            playerAnswer = document.getElementById('c').textContent;
        }
    }

    if (playerAnswer === MY_QUESTIONS[questionIndex].correctAnswer) {
        document.getElementById('answermsg').innerHTML = 'Correct!';
        score++;
        document.getElementById('score').innerHTML = `Correct answers: ${score}`;
    } else {
        document.getElementById('answermsg').innerHTML = `Incorrect. The correct answer is ${MY_QUESTIONS[questionIndex].correctAnswer}!`;
        negscore++;
        document.getElementById('negscore').innerHTML = `Wrong answers: ${negscore}`;
    }
    nextButton.classList.remove('hide');
    submitButton.classList.add('hide');
}

/**
 * This function will hide again the area of the question
 * then display a paragraph with the scores and 
 * restart button that if pressed will reload page at the beginning to play game again
 */
function endQuiz() {
    document.getElementById("final-message").innerHTML =
        `You have ${score} correct answer(s) and ${negscore} incorrect answer(s)!`;
    end.classList.remove('hide');
    questionArea.classList.add('hide');
}

//Wait for the DOM to finish loading before running the game 
// Get the button elements and add event listeners to them
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');
    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', displayQuestion);

    optionsButtons.forEach(buttons => {
        buttons.addEventListener('click', function handleClick(event) {
            console.log('button clicked', event);

            submitButton.classList.remove('hide');
        });
    });

    submitButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', displayQuestion);
});