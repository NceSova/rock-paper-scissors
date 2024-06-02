function getComputerChoice() {
  let rand = (Math.random() * 10).toFixed(2);
  if(rand<3.33){return 'rock'};
  if(rand<6.66){return 'paper'};
  if(rand<10){return 'scissors'};
}
console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt();
  return choice;
}

console.log(getHumanChoice());
