let myQuestions = [{
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

let playerAnswer = '';
let score = 0;

let i = 0

function displayQuestion() {
       
        document.getElementById('question').innerHTML = myQuestions[i].question;
        let answersList = myQuestions[i].answers;
        document.getElementById('a').innerHTML = answersList.a;
        document.getElementById('b').innerHTML = answersList.b;
        document.getElementById('c').innerHTML = answersList.c;

    }
    displayQuestion();

    
function checkAnswer() {
    
    for(let y=0; y<3; y++){
        if (document.getElementById('firstinput').checked){
            playerAnswer = document.getElementById('a').textContent;
        } else if (document.getElementById('secondinput').checked){
            playerAnswer = document.getElementById('b').textContent;
        } else if (document.getElementById('thirdinput').checked){
            playerAnswer = document.getElementById('c').textContent;
        }
    }

    if (playerAnswer === myQuestions[i].correctAnswer) {
        document.getElementById('answermsg').innerHTML = 'Correct!';
        score++;
        document.getElementById('score').innerHTML=`Correct answers: ${score}/10`;
    } else {
        document.getElementById('answermsg').innerHTML = `Incorrect. The correct answer is ${myQuestions[i].correctAnswer}!`
    }
} 

function incrementIndex() {
    i += 1;
    displayQuestion();
}

