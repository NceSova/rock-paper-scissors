function getComputerChoice() {
  let rand = (Math.random() * 100) / 10;
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
    result = 'Ничья!'
  }

  if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      result = `Ты проиграл! Бумага бьет Камень!`
      computerScore += 1;
    } else
    if (computerChoice === 'scissors') {
      result = 'Ты выиграл! Камень бьет Ножницы!'
      humanScore += 1;
    }
  } else 
  if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'Ты выиграл! Бумага бьет Камень!'
      humanScore += 1;
    } else
    if (computerChoice === 'scissors') {
      result = 'Ты проиграл! Ножницы бьют Бумагу!'
      computerScore += 1;
    }
  } else
  if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = `Ты проиграл! Камень бьет Ножницы!`
      computerScore += 1;
    } else
    if (computerChoice === 'paper') {
      result = `Ты выиграл! Ножницы бьют Бумагу!`
      humanScore += 1;
    }
  }
  return result;
}

const resultDiv = document.querySelector('#result');
const buttonsList = document.querySelector('#buttonsList');
const scoreDiv = document.querySelector('#score');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

buttonsList.addEventListener('click', (e) => {
  let computer = getComputerChoice()
  let result = playRound(e.target.id, computer)
  resultDiv.textContent = result;
  scoreDiv.textContent = `Ты: ${humanScore} | Компьютер: ${computerScore}`
  if (humanScore >= 5) {
    resultDiv.textContent = 'ТЫ ПОБЕДИЛ!!!🥳🥳🥳'
    humanScore = 0
    computerScore = 0
  }
  if (computerScore >= 5) {
    resultDiv.textContent = 'ТЫ ПРОИГРАЛ!!!😭😭😭'
    humanScore = 0
    computerScore = 0
  }
})

