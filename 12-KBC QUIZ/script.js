const questionpool = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: "William Shakespeare" },
    { question: "What is the largest mammal?", options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Silver", "Iron"], answer: "Oxygen" },
    { question: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C", "212°C"], answer: "100°C" },
    { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "Thailand", "South Korea"], answer: "Japan" },
    { question: "What is the smallest prime number?", options: ["2", "1", "3", "5"], answer: "2" },
    { question: "Which ocean is the largest?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific" },
    { question: "Who discovered gravity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Isaac Newton" },
    { question: "What is the hardest natural substance?", options: ["Diamond", "Gold", "Iron", "Quartz"], answer: "Diamond" },
    { question: "Which language has the most native speakers?", options: ["Mandarin", "English", "Spanish", "Hindi"], answer: "Mandarin" },
    { question: "What is the largest continent?", options: ["Asia", "Africa", "Europe", "North America"], answer: "Asia" },
    { question: "Who is known as the Father of Computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the square root of 64?", options: ["8", "6", "7", "9"], answer: "8" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["Brazil", "China", "UK", "Russia"], answer: "Brazil" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], answer: "Alexander Graham Bell" },
    { question: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
    { question: "What is the main ingredient in guacamole?", options: ["Avocado", "Tomato", "Onion", "Pepper"], answer: "Avocado" },
    { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "Who wrote 'Harry Potter'?", options: ["J.K. Rowling", "Stephen King", "Roald Dahl", "Suzanne Collins"], answer: "J.K. Rowling" },
    { question: "What is the largest organ in the human body?", options: ["Skin", "Heart", "Liver", "Lungs"], answer: "Skin" },
    { question: "Which country is famous for the pyramids?", options: ["Egypt", "Mexico", "Peru", "India"], answer: "Egypt" },
    { question: "What is the freezing point of water?", options: ["0°C", "32°C", "100°C", "50°C"], answer: "0°C" },
    { question: "Who is the current UN Secretary-General (2024)?", options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"], answer: "António Guterres" },
    { question: "Which animal is known as the King of the Jungle?", options: ["Lion", "Tiger", "Elephant", "Leopard"], answer: "Lion" },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara" },
    { question: "Who invented the light bulb?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "James Watt"], answer: "Thomas Edison" },
    { question: "Which is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City" },
    { question: "What is the currency of Japan?", options: ["Yen", "Won", "Dollar", "Euro"], answer: "Yen" },
    { question: "Which organ pumps blood through the body?", options: ["Heart", "Liver", "Kidney", "Lungs"], answer: "Heart" },
    { question: "Who is known as the Iron Man of India?", options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose"], answer: "Sardar Vallabhbhai Patel" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Mount Everest" },
    { question: "Which festival is known as the festival of lights?", options: ["Diwali", "Holi", "Eid", "Christmas"], answer: "Diwali" },
    { question: "Who was the first man to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
    { question: "Which country is called the Land of Maple Leaf?", options: ["Canada", "USA", "Australia", "Russia"], answer: "Canada" },
    { question: "What is the largest island in the world?", options: ["Greenland", "Australia", "Madagascar", "Borneo"], answer: "Greenland" },
    { question: "Which vitamin is produced when a person is exposed to sunlight?", options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B"], answer: "Vitamin D" },
    { question: "Who is the author of 'The Alchemist'?", options: ["Paulo Coelho", "Dan Brown", "J.K. Rowling", "Stephen King"], answer: "Paulo Coelho" },
    { question: "Which is the largest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Fibula"], answer: "Femur" },
    { question: "What is the national flower of India?", options: ["Lotus", "Rose", "Jasmine", "Sunflower"], answer: "Lotus" },
    { question: "Which is the fastest land animal?", options: ["Cheetah", "Lion", "Tiger", "Leopard"], answer: "Cheetah" },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Larry Page"], answer: "Tim Berners-Lee" },
    { question: "Which country is known as the Land of Thousand Lakes?", options: ["Finland", "Sweden", "Norway", "Denmark"], answer: "Finland" },
    { question: "What is the largest bird in the world?", options: ["Ostrich", "Eagle", "Penguin", "Emu"], answer: "Ostrich" },
    { question: "Which is the longest bone in the human body?", options: ["Femur", "Tibia", "Fibula", "Humerus"], answer: "Femur" },
    { question: "Who is the founder of Microsoft?", options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Larry Page"], answer: "Bill Gates" }
];

let questions = [];
let score = 0;
let currentQuestionIndex = 0;

const startBtn = document.getElementById("startButton");
const quizContainer = document.querySelector(".quiz-container");
const optionsContainer = document.getElementById("options");
const scoreboard = document.getElementById("score-board");
const finalScore = document.getElementById("finalScore");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-button");

// 🔹 shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    questions = shuffleArray([...questionpool]).slice(0, 10); // pick 10 random
    score = 0;
    currentQuestionIndex = 0;

    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    scoreboard.style.display = "none";
    document.getElementById("next-button").style.display = "block";

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => checkAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}
document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 11) {
        showQuestion();
        document.getElementById("next-button").disabled = true;
    } else {
        endQuiz();
    }
});

function checkAnswer(button, selectedOption) {
    const question = questions[currentQuestionIndex];

    if (selectedOption === question.answer) {
        score++;
        button.style.backgroundColor = "#42da47";
    } else {
        button.style.backgroundColor = "#ef552e";
        // Highlight the correct answer
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText === question.answer) {
                btn.style.backgroundColor = "#42da47";
            }
        });
    }

    document.getElementById("next-button").disabled = false;
}

function endQuiz() {
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
    finalScore.innerText = `Your score: ${score} out of 10`;
    const percentage = (score / 10) * 100;
    scoreText.innerText = `You scored ${percentage}%`;
}

restartBtn.addEventListener("click", restartQuiz);

function restartQuiz() {
    startQuiz();
}
