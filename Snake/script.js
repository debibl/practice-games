// получить элемент
const playBoard = document.querySelector('.play-board');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const gameOverSound = new Audio('./music/gameover.mp3');
let gameOver = false;
let foodX; let foodY;
let snakX = 13; let snakY = 10;
const snakeBody = [];
let velocityX = 0; let velocityY = 0;
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem('high-score') || 0;
highScoreElement.innerHTML = `High score:🏆 ${highScore}`;

// вызываем еду в случайном месте
const changFoodPosition = () => {
  // floor округление числа
  foodX = Math.floor(Math.random() * 25) + 1;
  foodY = Math.floor(Math.random() * 25) + 1;
};
const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert('Привет Филипп! Как настроение Филипп? Не ругай пожалуйста Васю...Филипп! Хорошего дня тебе Филипп!');
  location.reload();
};
const changeDirection = (e) => {
  if (e.key === 'ArrowUp' && velocityY !== 1) {
    velocityX = 0;
    velocityY -= 1;
  } else if (e.key === 'ArrowDown' && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === 'ArrowLeft' && velocityX !== 1) {
    velocityX -= 1;
    velocityY = 0;
  } else if (e.key === 'ArrowRight' && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
};
const initGame = () => {
  if (gameOver) return handleGameOver();
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  if (snakX === foodX && snakY === foodY) {
    changFoodPosition();
    snakeBody.push([foodX, foodY]);
    score += 1;
    // console.log(snakeBody);

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem('high-score', highScore);

    scoreElement.innerHTML = `Score: ⭐ ${score}`;
    highScoreElement.innerHTML = `High Score: 🏆 ${highScore}`;

    gameOverSound.play();
  }

  for (let i = snakeBody.length - 1; i > 0; i -= 1) {
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakX, snakY];

  snakX += velocityX;
  snakY += velocityY;

  if (snakX <= 0 || snakX > 25 || snakY <= 0 || snakY > 25) {
    /*
    console.log('Привет Филипп!
    Как настроение Филипп?
    Не ругай пожалуста Васю Филипп!
    Хорошего дня тебе Филипп!');
    */
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i += 1) {
    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
      gameOver = true;
    }
  }

  playBoard.innerHTML = htmlMarkup;
};
changFoodPosition();
// initGame();
setIntervalId = setInterval(initGame, 200);
document.addEventListener('keydown', changeDirection);
