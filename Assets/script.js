
// === Typo Variables === // 
let questionText = document.querySelector("h1");
let startButton = document.querySelector("#startQuiz");
let startBtn = document.querySelector("#start-button");


let fScore = document.querySelector("#final-score");
let message = document.querySelector(".message");

// === Timer HTML === // 
let timerElement = document.querySelector("#timer");
let viewHighscore = document.querySelector(".topInfo")

let optBlock = document.querySelector("#SQuiz-options");
optBlock.style.display = "none";
let option1 = document.querySelector("#option-1");
let option2 = document.querySelector("#option-2");
let option3 = document.querySelector("#option-3");
let option4 = document.querySelector("#option-4");

// === Variables for answer: correct or wrong === // 
let hr = document.querySelector("#horizontal-rule");
hr.style.display = "none";
let answerW = document.querySelector("#wrong");
answerW.style.display = "none";
let answerC = document.querySelector("p#correct");
answerC.style.display = "none";

// === Form variables === // 
let finalS = document.querySelector(".final-score");
finalS.style.display = "none";
let label = document.querySelector("label");
label.style.display = "none";
let nameInit = document.querySelector("#nameinitials");
nameInit.style.display = "none";
let submitEl = document.querySelector("#submit");
submit.style.display = "none";
let highScores = document.querySelector(".hScores");    
highScores.style.display = "none";

// === Go back button and Clear local-Storage. button === // 
let gobackBtn = document.querySelector("#goBack");
gobackBtn.style.display = "none";
let clearscoreBtn = document.querySelector("#clearScores");
clearscoreBtn.style.display = "none";


// === Timer variables. === // 
let timerCount;
let timer;

// === Timer variables for Wrong / Correct message. === // 
let transitionTime;
let transTimer;


// === Quiz List. === //

let quizList  = ["1/5: Commonly used data type DO NOT <br/>include:", "2/5: The condition in an if / else statement is<br/> a enclosed within ____.", 
"3/5: Arrays in JavaScript can be used to store<br/> _____.", "4/5: String values must be enclosed within _____.<br/> When being assigned to variables ",
"5/5: A very useful tool used during development<br/> and debugging for printing content to the<br/> debugger is"];

// === Answer options per button. === //

let question1 = ["1. strings", "2. booleans", "3. alerts", "4. numbers"];
let question2 = ["1. quotes", "2. curly brakets", "3. parentheses", "4. square brackets"];
let question3 = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"];
let question4 = ["1. commas", "2. curly brakets", "3. quotes", "4. parentheses"];
let question5 = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"];



// === Displays the message of correct answer for 1 second. === //

function correctAnswer() {
    hr.style.display = "block";
    answerC.style.display = "block";
    answerW.style.display= "none";

     // ===Transition timer (Next Question) === //
     let timeLeft = 5;
     transTimer  = setInterval(function(){
         timeLeft--;
         if(timeLeft === 0){
             hr.style.display = "none";
             answerC.style.display = "none";
             answerW.style.display= "none";
             clearInterval(transTimer);
           
         }
     }, 1000);
  }


// === Displays the message of wrong answer for 1 second. === //

function WrongAnswer() {
    hr.style.display = "block";
    answerW.style.display = "block";
    answerC.style.display= "none";
    timerCount -= 10;
    
      // ===Transition timer (Next Question) === //
      let timeLeft = 1;
      transTimer  = setInterval(function(){
        timeLeft--;
          if(timeLeft === 0){
              hr.style.display = "none";
              answerC.style.display = "none";
              answerW.style.display= "none";
              clearInterval(transTimer);
             
          }
      }, 1000);

}


     startButton.addEventListener("click", startGame);


    function startGame() {
        startTimer();

        message.style.display = "none";
        startBtn.style.display = "none";
        timerCount = 60;
    }

    // === Timer === //
    function startTimer() {
            // Sets timer //
            timer = setInterval(function() {
            //Time Decrement.  
            timerCount--;
            timerElement.textContent = "Time:" + timerCount ;
                if(timerCount <= 0 ){
                    
                    clearInterval(timer);
                    submitScore();
                
                }
        
        }, 1000);
    
            question1Logic();
    }


  // === Question 1 === //

function question1Logic(){


    questionText.innerHTML = quizList[0];
    option1.innerHTML = question1[0];
    option2.innerHTML = question1[1];
    option3.innerHTML = question1[2];
    option4.innerHTML = question1[3];

    optBlock.style.display = null;
    
    option3.onclick = function() {
        correctAnswer();
        question2Logic();
    };
    
    option1.onclick = function() {
        WrongAnswer();
        question2Logic();
    };   
    option2.onclick = function() {
        WrongAnswer();
        question2Logic();
    };
    option4.onclick = function() {
        WrongAnswer();
        question2Logic();
    };
        
}




  // === Question 2 === //

function question2Logic(){
           
    questionText.innerHTML = quizList[1];
    option1.innerHTML = question2[0];
    option2.innerHTML = question2[1];
    option3.innerHTML = question2[2];
    option4.innerHTML = question2[3];

    optBlock.style.display = null;

    option2.onclick = function() {
        correctAnswer();
        question3Logic();
    };
     
    option1.onclick = function() {
        WrongAnswer();
        question3Logic();
    };   
    option3.onclick = function() {
        WrongAnswer();
        question3Logic();
    };
    option4.onclick = function() {
        WrongAnswer();
        question3Logic();
    };
    
   
}
  // === Question 3 === //


function question3Logic(){
        
    questionText.innerHTML = quizList[2];
    option1.innerHTML = question3[0];
    option2.innerHTML = question3[1];
    option3.innerHTML = question3[2];
    option4.innerHTML = question3[3];

    optBlock.style.display = null;

    option4.onclick = function() {
        correctAnswer();
        question4Logic();
    };
        
    option1.onclick = function() {
        WrongAnswer();
        question4Logic();
    };   
    option2.onclick = function() {
        WrongAnswer();
        question4Logic();
    };
    option3.onclick = function() {
        WrongAnswer();
        question4Logic();
    };
        
    
   
}


 // === Question 4 === //

function question4Logic(){
    
        
    questionText.innerHTML = quizList[3];
    option1.innerHTML = question4[0];
    option2.innerHTML = question4[1];
    option3.innerHTML = question4[2];
    option4.innerHTML = question4[3];

    optBlock.style.display = null;
  
    option3.onclick = function() {
        correctAnswer();
        question5Logic();
    };
     
    option1.onclick = function() {
        WrongAnswer();
        question5Logic();
    };   
    option2.onclick = function() {
        WrongAnswer();
        question5Logic();
    };
    option4.onclick = function() {
        WrongAnswer();
        question5Logic();
    };
   
}


// === Question 5 === //

function question5Logic(){
        
    questionText.innerHTML = quizList[4];
    option1.innerHTML = question5[0];
    option2.innerHTML = question5[1];
    option3.innerHTML = question5[2];
    option4.innerHTML = question5[3];

    optBlock.style.display = null;

    option4.onclick = function() {
        correctAnswer();
        submitScore();
    };
     
    option1.onclick = function() {
           WrongAnswer();
     
         // ===Transition timer Submit Form === //
         let timeLeftS = 1;
         let submitTimer;
             submitTimer  = setInterval(function(){
                timeLeftS--;
                    if(timeLeftS === 0){
                    submitScore();
                        clearInterval(submitTimer);
               
             }
         }, 1000);
     
    
        
    };   
    option2.onclick = function() {
        WrongAnswer();

        let timeLeftS = 1;
        let submitTimer;
        submitTimer  = setInterval(function(){
           timeLeftS--;
            if(timeLeftS === 0){
               submitScore();
                clearInterval(submitTimer);
              
            }
        }, 1000);
    };
    option3.onclick = function() {
        WrongAnswer();

        let timeLeftS = 1;
        let submitTimer;
        submitTimer  = setInterval(function(){
           timeLeftS--;
            if(timeLeftS === 0){
               submitScore();
                clearInterval(submitTimer);
              
            }
        }, 1000);
    };
   
}


// === Submit score === //

function submitScore(){

    optBlock.style.display = "none";
    questionText.style.display= "none";
    fScore.textContent = "Your final score is: " + timerCount + ".";
    finalS.style.display = "block";
    label.style.display = "block";
    nameInit.style.display = "block";
    submitEl.style.display = "block";
    clearInterval(timer);

}

// === Saves the the initials in Local Storage === //

submitEl.onclick = function(event) {
    localStorage.setItem("1."," 1. " + nameInit.value + " - " +timerCount);
    highScore();
    event.preventDefault();
}




function highScore(){

finalS.innerHTML = "Highscores";

highScores.innerHTML = window.localStorage.getItem('1.');

    label.style.display = "none";
    nameInit.style.display = "none";
    submitEl.style.display = "none";
    fScore.style.display = "none";
    optBlock.style.display = "none";
    questionText.style.display= "none";
    startBtn.style.display= "none";
    message.style.display= "none";

    highScores.style.display = "block";
    finalS.style.display = "block";
    gobackBtn.style.display = "block";
    clearscoreBtn.style.display = "block"
    highScores.style.display = "block";


}

// === Clear Local Storage === //
clearscoreBtn.onclick = function() {
    window.localStorage.clear();
    highScore();
};

// === Shows the information (Highscore) saved in Local Storage === //
viewHighscore.onclick = function(event) {
    highScore();
    event.preventDefault();
};

    // === Initial position === //

    gobackBtn.onclick = function() {

        init();
    };
 
function init(){

    label.style.display = "none";
    nameInit.style.display = "none";
    submitEl.style.display = "none";
    fScore.style.display = "none";
    gobackBtn.style.display = "none";
    clearscoreBtn.style.display = "none"
    finalS.style.display = "none";
    label.style.display = "none";
    nameInit.style.display = "none";
    submitEl.style.display = "none";
    optBlock.style.display = "none";
    highScores.style.display = "none";

    questionText.style.display= "block";
    questionText.textContent = "Coding Quiz Challenge";
    startBtn.style.display= "block";
    message.style.display= "block";


}

