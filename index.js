const randomNum = Math.floor((Math.random() * (10 - 0) + 1));
let newNum;
let i = 0;
do {
  newNum = +prompt('Guess a number (1 to 10)');
  i++

  if (randomNum < newNum) {
    console.log(`⚠️ your number`, newNum, `is too big   ! >>>>\n`);
  } else if (randomNum > newNum) {
    console.log(`⚠️ your number`, newNum, `is too small ! <<<<\n`);
  }
} while (randomNum != newNum);
console.log(`\nCongrats 👑! the number was exact`, randomNum, `& you tried`, i, `times`);