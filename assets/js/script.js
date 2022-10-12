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


for (let i = 0; i < myQuestions.length; i++) {
    function displayQuestion() {
       
        document.getElementById('question').innerHTML = myQuestions[i].question;
        let answersList = myQuestions[i].answers;
        document.getElementById('a').innerHTML = answersList.a;
        document.getElementById('b').innerHTML = answersList.b;
        document.getElementById('c').innerHTML = answersList.c;

    }
    displayQuestion();
};

