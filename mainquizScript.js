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
            quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.href='scoreboard.html';">Check The Scoreboard!!</button>
        `
        }
    }
})