function getComputerChoice() {
  let rand = (Math.random() * 10).toFixed(2);
  if(rand<3.33){return 'rock'};
  if(rand<6.66){return 'paper'};
  if(rand<10){return 'scissors'};
}

function getHumanChoice() {
  let choice = prompt().toLowerCase();
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let result = 'oops';
  if (humanChoice === computerChoice) {
    result = 'Its a tie!'
  }

  if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      result = `You lose! Paper beats Rock!`
    } else
    if (computerChoice === 'scissors') {
      result = 'You won! Rock beats Scissors!'
    }
  } else 
  if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You won! Paper beats Rock!'
    } else
    if (computerChoice === 'scissors') {
      result = `You lose! Scissors beats Paper!`
    }
  } else
  if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = `You lose! Rock beats Scissors!`
    } else
    if (computerChoice === 'paper') {
      result = `You win! Scissors beats Paper!`
    }
  }

  return result;
}

console.log(playRound(getHumanChoice(), getComputerChoice()))