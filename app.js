//collection of quotes
const quotes = [
  {
  	quote: 'The mind is everything. What you think you become.',
  	author: '-Buddha'
  },
  {
  	quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
  	author: '- Robert Frost'
  },
  {
  	quote: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.',
  	author: '- Aristotle'
  },
  {
  	quote: 'Start where you are. Use what you have. Do what you can.',
  	author: '- Arthur Ashe'
  },
  {
  	quote: 'Build your own dreams, or someone else will hire you to build theirs.',
  	author: '- Eleanor Roosevelt'
 },
  {
  	quote: 'Remember no one can make you feel inferior without your consent.',
  	author: '- Farrah Gray'
  },
  {
  	quote: 'Education costs money. But then so does ignorance.',
  	author: '- Sir Claus Moser'
  },
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
quoteBtn.addEventListener('click', () => {
	let random = Math.floor(Math.random() * quotes.length);

	quote.innerHTML = quotes[random].quote;
	author.innerHTML = quotes[random].author;
})