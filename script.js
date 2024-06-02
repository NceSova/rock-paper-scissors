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
  let result = 'oops';
  if (humanChoice === computerChoice) {
    result = 'Its a tie!'
  }

  if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      result = `You lose! Paper beats Rock!`
      computerScore += 1;
    } else
    if (computerChoice === 'scissors') {
      result = 'You won! Rock beats Scissors!'
      humanScore += 1;
    }
  } else 
  if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You won! Paper beats Rock!'
      humanScore += 1;
    } else
    if (computerChoice === 'scissors') {
      result = `You lose! Scissors beats Paper!`
      computerScore += 1;
    }
  } else
  if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = `You lose! Rock beats Scissors!`
      computerScore += 1;
    } else
    if (computerChoice === 'paper') {
      result = `You win! Scissors beats Paper!`
      humanScore += 1;
    }
  }
  return result;
}

function playGame(){
  for(let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()))
  }
  console.log(`computer: ${computerScore} | human: ${humanScore}`)
}

playGame();