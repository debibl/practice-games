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
  const words = programmingLanguages;
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  return randomWord;
};

window.onload = () => {
  randomWord = getRandomLang();
  secretWord = Array(randomWord.length).fill('_');
  const taskWord = document.getElementById('taskWord');
  taskWord.textContent = secretWord.join(' ');
};

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByClassName('letter');

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', function handleClick(event) {
      const letter = event.target.innerText;
      const updatedSecretWord = secretWord.map((char, index) => {
        if (randomWord[index] === letter) {
          return letter;
        }
        return char;
      });

      if (secretWord.join('') === updatedSecretWord.join('')) {
        mistakesCount += 1;
      } else {
        secretWord = updatedSecretWord;
        const taskWord = document.getElementById('taskWord');
        taskWord.textContent = secretWord.join(' ');
      }

      this.disabled = true;

      const mistakesCountElement = document.getElementById('mistakesCount');
      const updateMistakesCount = () => {
        mistakesCountElement.textContent = mistakesCount.toString();
      };
      updateMistakesCount();

      document.getElementById('hangmanPic').src = `./img/${mistakesCount}.png`;

      if (mistakesCount === maxWrong) {
        const letterButtons = document.getElementsByClassName('letter');
        for (let j = 0; j < letterButtons.length; j += 1) {
          letterButtons[j].disabled = true;
        }

        const taskWord = document.getElementById('taskWord');
        taskWord.textContent = randomWord;

        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = 'GAME OVER!';
      }

      if (secretWord.join('') === randomWord) {
        const letterButtons = document.getElementsByClassName('letter');
        for (let j = 0; j < letterButtons.length; j += 1) {
          letterButtons[j].disabled = true;
        }

        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = 'CONGRATULATIONS!';
      }
    });
  }
});
