

let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let nameQuiz = document.querySelector('#submit-name');
let errorInput = document.querySelector('.error-data');
let fDesign = document.querySelector('.content');
let sDesign = document.querySelector('#display-container');
let btnLeader = document.querySelector('#lead');
let sectLeader = document.querySelector('.leader-board');



let questionCount;
let scoreCount = 0;



const quizArray = [
  {
    id: "0",
    question: "What HTML tag makes a link?",
    options: ["a", "tr", "img", "br/"],
    correct: "a",
  },
  {
    id: "1",
    question: "What HTML tag makes a new line?",
    options: ["a", "tr", "img", "br/"],
    correct: "br/",
  },
  {
    id: "2",
    question: "What HTML tag do you put things in if you want them to appear on the page?",
    options: ["html", "head", "body", "p"],
    correct: "bogy",
  },
  {
    id: "3",
    question: "What tag attribute can you put CSS code into?",
    options: ["title", "height", " style", "width"],
    correct: "style",
  },
  {
    id: "4",
    question: "What CSS property makes the colour of the page change?",
    options: ["font-color", "font-size", "color", "background-color"],
    correct: "background-color",
  },
  {
    id: "5",
    question: "What is wrong with the code <body>Hello<body/>?",
    options: ["it should be </body>Hello<body>", "it should be </body>Hello</body> ", "it should be <body>Hello</body> ", "it should be <body>Hello<body> "],
    correct: "it should be </body>Hello</body>",
  },
  {
    id: "6",
    question: "What CSS property makes text go bold?",
    options: ["font-size", "text-decoration", "bold", "font-weight "],
    correct: "bold",
  },
  {
    id: "7",
    question: "What attribute of the img tag displays things on the page if the picture cannot be?",
    options: ["src", "alt ", "style ", "height "],
    correct: "alt ",
  },
  {
    id: "8",
    question: "What tag adds comments to your HTML code?",
    options: ["title ", "!-- ", "caption ", "comment "],
    correct: "!-- ",
  },

];

restart.addEventListener("click", () => {
  initial();
  scoreContainer.style.display ="none";
  fDesign.style.display = "";

   errorInput.textContent ="";
    nameQuiz.value = "";

});


 btnLeader.addEventListener('click',()=>{
    fDesign.style.display = 'none';
    scoreContainer.style.display = 'none';
    sectLeader.style.display = 'block';

 })



nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    nextBtn.style.display = 'none';
    if (questionCount == quizArray.length) {
      displayContainer.style.display = "none";
      scoreContainer.style.display ="block";
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
        quizDisplay(questionCount);

    }
  })
);


const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};




function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  nextBtn.style.display = 'block';
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
     userOption.classList.add("correct");
    scoreCount++;
    //save
    storeScore(nameQuiz.value, scoreCount);
  } else {
     userOption.classList.add("incorrect");
  }
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
 // }

}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {

   errorInput.textContent ="";
   
   if(nameQuiz.value === ""){
    errorInput.textContent = "Error !! Name is Required";
   }


   if(nameQuiz.value != ""){
    fDesign.style.display = "none";
    sDesign.style.display = "block";
    sectLeader.style.display = 'none';
    initial();
   }


 
});


window.onload =() =>{
  // startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};



//storage
function storeScore(userName, newScore) {
  localStorage.setItem("newHighScoreAdded", JSON.stringify({ userName, newScore }));
 
}










