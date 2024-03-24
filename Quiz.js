const quiz_start = document.getElementById("quiz-start");
const quiz_content = document.getElementById("quiz-content");
let question_number = 0;
let correct_answers = 0;

const questions = [
    {
        title: "What color is grass?",
        answers: [
            { title: "green", correct: true },
            { title: "blue", correct: false },
            { title: "red", correct: false },
            { title: "orange", correct: false },
        ],
    },
    {
        title: "What color is the sky?",
        answers: [
            { title: "green", correct: false },
            { title: "blue", correct: true },
            { title: "red", correct: false },
            { title: "orange", correct: false },
        ],
    }, 
    {
        title: "What color is the sun?",
        answers: [
            { title: "green", correct: false },
            { title: "blue", correct: false },
            { title: "yellow", correct: true },
            { title: "orange", correct: false },
        ],
    },
    {
        title: "What color is water?",
        answers: [
            { title: "transparent", correct: true },
            { title: "Plava", correct: false },
            { title: "green", correct: false },
            { title: "orange", correct: false },
        ],
    },
    {
        title: "What color is rose?",
        answers: [
            { title: "red", correct: true },
            { title: "blue", correct: false },
            { title: "purple", correct: false },
            { title: "orange", correct: false },
        ],
    },
    {
        title: "What color is panda bear?",
        answers: [
            { title: "black & white", correct: true },
            { title: "black", correct: false },
            { title: "white", correct: false },
            { title: "orange", correct: false },
        ],
    },
    {
        title: "What color is Coca Cola?",
        answers: [
            { title: "black & white", correct: false },
            { title: "black", correct: true },
            { title: "white", correct: false },
            { title: "orange", correct: false },
        ],
    },
];

    function generate_question_form(question, questionNumber) {
    const question_container = document.createElement("div");
    question_container.className = "p-8 flex flex-col justify-center gap-4 border-black border-2 rounded-2xl w-1/2";

  

    const title = document.createElement("span");
    title.className = "text-2xl font-semibold";
    title.innerHTML = question.title;

    const answer_container = document.createElement("div");
    answer_container.className = "grid grid-cols-2 gap-3";  
    
    const questionCounter = document.createElement("span");
    questionCounter.className = "text-2xl flex  font-bold text-gray-9000";
    questionCounter.innerHTML = "Qusetion " + (questionNumber + 1) + "/" + questions.length + ":"; 

    for (let i = 0; i < question.answers.length; i++) {
        const answer = document.createElement("button");
        answer.className = "text-xl border-gray-300 border-2 p-4 flex justify-center items-center w-full hover:bg-gray-300 transition-all duration-300 rounded-lg";
        answer.innerHTML = question.answers[i].title;

        answer.addEventListener("click", function () {
            quiz_content.innerHTML = "";
            question_number++;

            if (question.answers[i].correct) {
                correct_answers++;
            }

            if (question_number === questions.length) {
                quiz_over(questions);
            } else {
                generate_question_form(questions[question_number], question_number);
            }
        });

        answer_container.append(answer);
    }
//
    question_container.append(questionCounter); // Add question counter
    question_container.append(title);
    question_container.append(answer_container);

    quiz_content.append(question_container);
}

function quiz_over(questions) {
    const container = document.createElement("div");
    container.className = "flex flex-col justify-center items-center text-center gap-2";

    const span = document.createElement("span");
    span.className = "text-2xl font-semibold";
    span.innerHTML = "Quiz over";

    const span2 = document.createElement("span");
    span2.className = "text-xl text-gray-800";
    span2.innerHTML = "You answered " + correct_answers + " questions correctly out of " + questions.length + ".";

    const dugme = document.createElement("button");
    dugme.className = "w-52 h-20 border-black border-4 rounded-xl text-3xl font-bold hover:bg-black hover:text-white";
    dugme.innerHTML = "Try again";
    dugme.addEventListener("click", function () {
        correct_answers = 0;
        question_number = 0;

        quiz_content.innerHTML = "";
        generate_question_form(questions[0], 0);
    });

    container.append(span);
    container.append(span2);
    container.append(dugme);
    quiz_content.append(container);
}

quiz_start.addEventListener("click", function () {
    quiz_start.remove();
    generate_question_form(questions[0], 0);
});
