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

let questionIndex = 0;
let playerAnswer = '';
let score = 0;
let negscore = 0;


startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', displayQuestion);

function startQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    questionArea.classList.remove('hide');
    displayQuestion();
}

function displayQuestion() {
       if(questionIndex<MY_QUESTIONS.length){ 
        document.getElementById('question').innerHTML = MY_QUESTIONS[questionIndex].question;
        let answersList = MY_QUESTIONS[questionIndex].answers;
        document.getElementById('a').innerHTML = answersList.a;
        document.getElementById('b').innerHTML = answersList.b;
        document.getElementById('c').innerHTML = answersList.c;
    } else {
        endQuiz();
    }

    }
    

    
function checkAnswer() {
    
    for(let optionsno=0; optionsno<3; optionsno++){
        if (document.getElementById('firstinput').checked){
            playerAnswer = document.getElementById('a').textContent;
        } else if (document.getElementById('secondinput').checked){
            playerAnswer = document.getElementById('b').textContent;
        } else if (document.getElementById('thirdinput').checked){
            playerAnswer = document.getElementById('c').textContent;
        }
    }

    if (playerAnswer === MY_QUESTIONS[questionIndex].correctAnswer) {
        document.getElementById('answermsg').innerHTML = 'Correct!';
        score++;
        document.getElementById('score').innerHTML=`Correct answers: ${score}`;
    } else {
        document.getElementById('answermsg').innerHTML = `Incorrect. The correct answer is ${MY_QUESTIONS[questionIndex].correctAnswer}!`
        negscore++;
        document.getElementById('negscore').innerHTML=`Wrong answers: ${negscore}`
    }
    questionIndex++;
} 

function endQuiz() {
     document.getElementById("end-paragraph").innerHTML=
     `<p>You have ${score} correct answer(s) and ${negscore} incorrect answer(s)!</p>
     <button id="restart-btn" class="play-btn" onClick="location.href='https://8000-nicolehitte-capitalsqui-ylzxre2nrha.ws-eu71.gitpod.io/'">Restart</button>`;
    
    questionArea.classList.add('hide');
     
}


