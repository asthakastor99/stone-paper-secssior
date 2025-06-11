let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const ComputerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["stone" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. play again.";
    msg.style.backgroundColor = " black";
 };


const ShowWinner = (userWin, userChoice, computerChoice)  => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
    msg.innerText = `you win!  your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
 } else {
    ComputerScore++;
    ComputerScorePara.innerText = ComputerScore;
    msg.innerText = `you lost.  ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
 }
};


 const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    }
     else { 
            let userWin = true;
            if (userChoice === "stone") {
                userWin = computerChoice === "paper" ? false : true;
            } else if (userChoice === "paper") {
                userWin  = computerChoice === "scissors" ? false : true;
            } else {
                userWin = computerChoice === "stone" ? false : true; 
            }
             ShowWinner(userWin, userChoice, computerChoice);
        }
    };


choices.forEach((choice) => {
    choice.addEventListener("click" , () => { 
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 
    