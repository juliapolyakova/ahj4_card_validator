import luhnAlgorithm from './luhn';
import getCard from './getCard';

const cards = document.getElementsByClassName('card');
const cardNumber = document.querySelector('.cardnumber');
const button = document.querySelector('.button');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = cardNumber.value;
  const luhnNumber = luhnAlgorithm(number);
  const paySystem = getCard(number);
  const array = Array.from(cards);

  if (luhnNumber && paySystem) {
    button.classList.add('correct');
    array.forEach((card) => {
      if (card.dataset.id === paySystem) {
        card.classList.add('active');
      }
    });
  } else {
    button.textContent = 'Error';
    button.classList.add('error');
    array.forEach((card) => {
      card.classList.remove('active');
    });
  }
});
