// Array of long words
const longWords = ['polymorphism', 'encapsulation', 'inheritance', 'recursion', 'variable', 'algorithm', 'debugging', 'concatenation'];

let currentWordIndex = 0; // Index of the current word in the array
let correctCount = 0; // Count of correctly guessed words

// Display the current word
function displayWord() {
  const wordElement = document.getElementById('word');
  wordElement.textContent = longWords[currentWordIndex];
}

// Check if the entered words are compiled from the current word
function checkWords() {
  const inputElement = document.getElementById('input');
  const enteredWords = inputElement.value.trim().split(' ');

  let correctWords = 0;
  const currentWord = longWords[currentWordIndex];

  enteredWords.forEach((word) => {
    if (currentWord.includes(word)) {
      correctWords++;
    }
  });

  if (correctWords >= 5) {
    correctCount++;
    document.getElementById('message').textContent = 'Correct! You can move to the next word.';
    inputElement.value = '';
    inputElement.disabled = true;

    // Move to the next word if all words have been guessed correctly
    if (correctCount === longWords.length) {
      document.getElementById('word').textContent = 'Congratulations! You have completed the game.';
      document.getElementById('submit-button').disabled = true;
    } else {
      currentWordIndex++;
      setTimeout(() => {
        displayWord();
        inputElement.disabled = false;
        document.getElementById('message').textContent = '';
      }, 1500);
    }
  } else {
    document.getElementById('message').textContent = 'Try again. You need to guess at least 5 smaller words.';
  }
}

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', checkWords);

// Initial setup
displayWord();
