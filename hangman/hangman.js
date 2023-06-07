const programmingLanguages = [
  'ASSAMBLER',
  'JOVIAL',
  'PASCAL',
  'AUTHORWARE',
  'POSTSCRIPT',
  'DELPHI',
  'EMERALD',
  'ERLANG',
  'CLOJURE',
  'HASKELL',
  'FORTRAN',
  'KOTLIN',
  'OBJECTIVEC',
  'PYTHON',
  'VISUALBASIC',
  'JAVASCRIPT',
];

let mistakesCount = 0;
const maxWrong = 6;
let randomWord = '';
let secretWord = [];

const getRandomLang = () => {
  const randomIndex = Math.floor(Math.random() * programmingLanguages.length);
  return programmingLanguages[randomIndex];
};

const updateTaskWord = () => {
  const taskWord = document.getElementById('taskWord');
  taskWord.textContent = secretWord.join(' ');
};

const updateMistakesCount = () => {
  const mistakesCountElement = document.getElementById('mistakesCount');
  mistakesCountElement.textContent = mistakesCount.toString();
};

const updateHangmanPic = () => {
  document.getElementById('hangmanPic').src = `./img/${mistakesCount}.png`;
};

const disableLetterButtons = () => {
  const letterButtons = document.getElementsByClassName('letter');
  for (let i = 0; i < letterButtons.length; i += 1) {
    letterButtons[i].disabled = true;
  }
};

const handleGameOver = () => {
  disableLetterButtons();

  const taskWord = document.getElementById('taskWord');
  taskWord.textContent = randomWord;

  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'GAME OVER!';
};

const handleCongratulations = () => {
  disableLetterButtons();

  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'CONGRATULATIONS!';
};

const handleLetterClick = (event) => {
  const { target } = event;
  const letter = target.innerText;
  const updatedSecretWord = secretWord
    .map((char, index) => (randomWord[index] === letter ? letter : char));

  let updatedMistakesCount = mistakesCount;

  if (secretWord.join('') === updatedSecretWord.join('')) {
    updatedMistakesCount += 1;
  } else {
    secretWord = updatedSecretWord;
    updateTaskWord();
  }

  target.disabled = true;
  mistakesCount = updatedMistakesCount;
  updateMistakesCount();
  updateHangmanPic();

  if (mistakesCount === maxWrong) {
    handleGameOver();
  }

  if (secretWord.join('') === randomWord) {
    handleCongratulations();
  }
};

window.onload = () => {
  randomWord = getRandomLang();
  secretWord = Array(randomWord.length).fill('_');
  updateTaskWord();
};

document.addEventListener('DOMContentLoaded', () => {
  const letterButtons = document.getElementsByClassName('letter');
  for (let i = 0; i < letterButtons.length; i += 1) {
    letterButtons[i].addEventListener('click', handleLetterClick);
  }
});
