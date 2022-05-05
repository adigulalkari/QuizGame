const quizData = [{
        question: "The following is not NASA space shuttle?",
        a: "Discovery",
        b: "Endeavour",
        c: "Challenger",
        d: "Fortuner",
        correct: "d",
    },
    {
        question: "The first flight of the space shuttle program by NASA was launched in?",
        a: "1979",
        b: "1980",
        c: "1981",
        d: "1982",
        correct: "c",
    },
    {
        question: "First human to travel into space?",
        a: "Alan Shepard",
        b: "Neil Armstrong",
        c: "Yuri Gagarin",
        d: "Vladimir Komarov",
        correct: "c",
    },
    {
        question: "The observation of objects in space, known as",
        a: "Astronomy",
        b: "Telescopy",
        c: "Space exploration",
        d: "Meterology",
        correct: "a",
    },
    {
        question: "The first human-made object to orbit",
        a: "Apollo 1",
        b: "Sputnik 1",
        c: "Salyut 1",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "The day on which the Sun’s direct rays cross the celestial equator is called?",
        a: "Equinox",
        b: "Alphelion",
        c: "Solistice",
        d: "Ecliptic",
        correct: "a",
    },
    {
        question: "Who invented the telescope?",
        a: "Hypatia",
        b: "Galileo",
        c: "Hans Lippershey",
        d: "Johannes Kepler",
        correct: "c",
    },
    {
        question: "Which of these objects is the farthest from the Sun?",
        a: "90377 Sedna",
        b: "Saturn",
        c: "Neptune",
        d: "Kuiper belt",
        correct: "a",
    },
    {
        question: "What term describes the alignment of three celestial bodies?",
        a: "suzerainty",
        b: "symbology",
        c: "sizzle",
        d: "syzygy",
        correct: "d",
    },
    {
        question: "What is the visible part of the Sun called?",
        a: "the stratosphere",
        b: "the lithosphere",
        c: "the photosphere",
        d: "the atmosphere",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            if (score >= 5) {
                firework1.style.display = 'block';
                firework2.style.display = 'block';
                firework3.style.display = 'block';
                firework4.style.display = 'block';
                firework5.style.display = 'block';
                firework6.style.display = 'block';
                quiz.innerHTML = `
        <h2>Damnn!<br> You know your stuff!!<br>Congrats!!<br>Your score is ${score}/${quizData.length}</h2>
        <button onclick="location.href='index.html';">Go back to HomePage!!!</button>
        `
            } else {
                quiz.innerHTML = `
            <h2>You could do better!!<br>Your score is ${score}/${quizData.length}</h2>
    
            <button onclick="location.href='index.html';">Go back to HomePage!!</button>
            `
            }
        }
    }
})