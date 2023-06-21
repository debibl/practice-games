const wordsRu = [
  'строка',
  'метод',
  'массив',
  'переменная',
  'торвальдс',
  'граф',
  'функция',
  'цикл',
  'алгоритм',
];

const wordsEng = [
  'string',
  'method',
  'array',
  'variable',
  'torvalds',
  'graph',
  'function',
  'loop',
  'algorithm',
];

const getWordInEng = (answer) => {
  const index = wordsRu.indexOf(answer);
  return wordsEng[index];
};
/* eslint-disable-next-line */
const check = () => {
  const answer = document.querySelector('input').value;
  const word = getWordInEng(answer);
  /* eslint-disable-next-line */
  for (const item of document.querySelectorAll('.words')) {
    if (item.classList.contains(word)) {
      item.style = 'visibility: visible';
    }
  }

  document.querySelector('input').value = '';

  const words = document.querySelectorAll('.words');

  const isAllVisible = Array.from(words).every((cell) => cell.style.visibility === 'visible');
  if (isAllVisible) {
    alert('Congratulations!');
  }
};
