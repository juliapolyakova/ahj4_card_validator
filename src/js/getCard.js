export default function getCard(number) {
  let name = '';
  const firstNum = number.substring(0, 2);
  if (number[0] === '2') {
    name = 'mir';
  } else if (firstNum === '30' || firstNum === '36' || firstNum === '38') {
    name = 'diners';
  } else if (firstNum === '34' || firstNum === '37') {
    name = 'american';
  } else if (number[0] === '4') {
    name = 'visa';
  } else if (firstNum === '50' || firstNum === '56' || firstNum === '57' || firstNum === '58' || firstNum === '63' || firstNum === '67') {
    name = 'maestro';
  } else if (firstNum === '51' || firstNum === '52' || firstNum === '53' || firstNum === '54' || firstNum === '55') {
    name = 'mastercard';
  } else if (firstNum === '60') {
    name = 'discover';
  } else {
    return false;
  }

  return name;
}
