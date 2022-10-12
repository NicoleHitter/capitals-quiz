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


let i = 0;

function displayQuestion() {
       
        document.getElementById('question').innerHTML = myQuestions[i].question;
        let answersList = myQuestions[i].answers;
        document.getElementById('a').innerHTML = answersList.a;
        document.getElementById('b').innerHTML = answersList.b;
        document.getElementById('c').innerHTML = answersList.c;

    }
    displayQuestion();


function checkAnswer() {
    let playerAnswer = '';
    for(let y=0; y<3; y++){
        if (document.getElementById('a').checked){
            playerAnswer = document.getElementById('a').innerHTML;
        } else if (document.getElementById('b').checked){
            playerAnswer = document.getElementById('b').innerHTML;
        } else if (document.getElementById('c').checked){
            playerAnswer = document.getElementById('c').innerHTML;
        }
    }

    if (playerAnswer === myQuestions[i].correctAnswer) {
        document.getElementById('answermsg').innerHTML = 'Correct!';
    } else {
        document.getElementById('answermsg').innerHTML = `Incorrect. The correct answer is ${myQuestions[i].correctAnswer}!`
    }
}