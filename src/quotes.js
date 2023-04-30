const quotes = [
  {
    quote:
      '우리가 계획한 삶을 기꺼이 버릴 수 있을 때만, 우리를 기다리고 있는 삶을 맞이할 수 있다.',
    author: 'Joseph Campbell',
  },
  {
    quote: '남을 따르는 법을 알지 못하는 사람은 좋은 지도자가 될 수 없다.',
    author: 'Aristotle',
  },
  {
    quote:
      '자립만이 진정한 자유로 가는 길이며, 자신의 정체를 찾는 것이 그 궁극적 보상이다.',
    author: 'Patricia Sampson',
  },
  {
    quote: '제 아무리 막강한 핵무기도 게릴라전을 막을 수는 없습니다.',
    author: 'John F. Kennedy',
  },
  {
    quote:
      '내 어머니의 가장 놀라운 점은 30년동안 식구들에게 오직 먹다 남은 음식만 차려주셨다는 것이다. 원래의 요리에 대해 아는 사람은 아무도 없었다.',
    author: 'Calvin Trillin',
  },
  {
    quote: '남의 말을 경청하라. 귀가 화근이 되는 경우는 없다.',
    author: 'Frank Tyger',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;
