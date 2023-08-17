let questions = [
    { question: "Wo haben wir uns zum ersten Mal gesehen?", answer: "Eiscafe" },
    { question: "Mit welchem Auto habe ich dich beim ersten Date abgeholt?", answer: "Mercedes" },
    { question: "Was habe ich beim ersten Date in meinem Auto vergessen?", answer: "Autoschlüssel" },
    { question: "Was war der erste Spitzname, den du mir gegeben hast?", answer: "Süßi" },
    { question: "Wo habe ich dich zum ersten Mal geküsst?", answer: "Edeka Parkplatz" },
    { question: "Was habe ich sofort am Anfang am schönsten an dir gefunden?", answer: "Mein Lächeln" },
    { question: "An welchem Tag sind wir offiziell zusammengekommen? (Tipp: Wir feiern heute das 1-jährige Jubiläum, haha!)", answer: "19.08.2022" }
];

let phrase = "I love you";
let earnedLetters = [];
let currentQuestionIndex = 0;

function startGame() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    } else {
        document.querySelector('.game-container').style.display = 'none';
        document.querySelector('.end-screen').style.display = 'block';
    }
}

function submitAnswer() {
    let userAnswer = document.getElementById("answer").value;
    if (userAnswer === questions[currentQuestionIndex].answer) {
        let randomLetter = phrase[Math.floor(Math.random() * phrase.length)];
        while (earnedLetters.includes(randomLetter) || randomLetter === " ") {
            randomLetter = phrase[Math.floor(Math.random() * phrase.length)];
        }
        earnedLetters.push(randomLetter);
        document.getElementById("progress").innerText += randomLetter;
        currentQuestionIndex++;
        displayQuestion();
        document.getElementById("answer").value = "";  // Clear the answer input box
    } else {
        alert("Try again!");
    }
}

function showHeartfeltMessage() {
    document.querySelector('.end-screen').style.display = 'none';
    document.querySelector('.message-screen').style.display = 'block';
    document.getElementById("heartfeltMessage").innerText = "Hey Fiona,\n\nDas letzte Jahr mit dir war wie ein Traum. Von unseren Treffen bis zu den langen Telefonaten bis in die Nacht, von unseren Trips bis zu den gemütlichen Tagen auf der Couch – jeder Moment war magisch. Ich hätte nie gedacht, dass ich jemanden so sehr lieben könnte, wie ich dich liebe. Es fühlt sich an, als ob wir schon immer zusammen gewesen wären, und gleichzeitig, als ob unser Abenteuer gerade erst begonnen hat. Ich hoffe von ganzem Herzen, dass wir noch viele, viele Jahre zusammen verbringen können, lachend, liebend, lebend.";
}
