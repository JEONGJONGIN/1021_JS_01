const choices = ["rock", "paper", "scissors"];
let playerChoice = null;
let computerChoice = null;

const computerTurn = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    computerChoice = choices[randomIndex];
    alert(`CPUが${computerChoice}を出しました。`);
    enablePlayerChoices();
}

const enablePlayerChoices = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerChoice = button.id;
            determineWinner(playerChoice, computerChoice);
        });
    });
}

const determineWinner = (playerChoice, computerChoice) => {
    const resultText = document.getElementById("resultText");
    if (playerChoice === computerChoice) {
        resultText.textContent = "引き分け";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText.textContent = "勝ち";
    } else {
        resultText.textContent = "負け";
    }
    disablePlayerChoices();
}

const disablePlayerChoices = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
    });
}

// ゲームを開始するためのボタンを表示
const startButton = document.createElement("button");
startButton.textContent = "ゲームを始める";
startButton.addEventListener("click", () => {
    computerTurn();
});
document.getElementById("game").appendChild(startButton);
