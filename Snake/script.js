//получить элемент
const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");


const gameOverSound = new Audio("./music/gameover.mp3");



let gameOver = false;
let foodX, foodY;
let snakX = 13, snakY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerHTML = `High score: 🏆 ${highScore}`;



//вызываем еду в случайном месте
const changFoodPosition = () => {
    //floor округление числа
    foodX = Math.floor(Math.random() * 25) + 1;
    foodY = Math.floor(Math.random() * 25) + 1;
}


const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Привет Филл! Как настроение Филл? Неругай пожалуйста Васю...Филл! Хорошего дня тебе Филл!");
    location.reload();
}

const changeDirection = (e) => {
if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
} else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
} else if(e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
} else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
}
//initGame();
}

const initGame = () => {

    if(gameOver) return handleGameOver();
let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

if(snakX === foodX && snakY === foodY) {
    changFoodPosition();
    snakeBody.push([foodX, foodY]);
    score++;
    //console.log(snakeBody);

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);

    scoreElement.innerHTML =  `Score: ⭐ ${score}`;
    highScoreElement.innerHTML = `High Score: 🏆 ${highScore}`;
     
    gameOverSound.play(); 
}


for(let i = snakeBody.length -1; i > 0; i--) {
snakeBody[i] = snakeBody[i -1];
}

snakeBody[0] = [snakX, snakY];

snakX += velocityX;
snakY += velocityY;

if(snakX <= 0 || snakX > 25 || snakY <= 0 || snakY > 25) {
   //console.log('Привет Филл! Как настроение Филл? Неругай пожалуста Васю Филл! Хорошего дня тебе Филл!'); 
   gameOver = true;
}

for(let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    if (i !== 0 && snakeBody[0][1] ===snakeBody[i][1] && snakeBody[0][0] ===snakeBody[i][0]  ) {
        gameOver = true;

    }
}

playBoard.innerHTML = htmlMarkup;
}
changFoodPosition();
//initGame();
setIntervalId = setInterval (initGame, 200);
document.addEventListener("keydown", changeDirection);