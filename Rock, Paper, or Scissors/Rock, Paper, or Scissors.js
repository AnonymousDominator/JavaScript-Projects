const getUserChoice = userInput => {userInput = userInput.toLowerCase();
if (userInput === 'rock')
{
  return userInput
}
else if(userInput === 'paper')
{
  return userInput
}
else if(userInput === 'scissors')
{
  return userInput
}
else if(userInput ==='bomb')
{
  return userInput
}
else 
{
  return console.log('error message')
}
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0)
  {
    return 'rock'
  }
  else if(randomNumber == 1)
  {
    return 'paper'
  }
  else if(randomNumber == 2)
  {
    return 'scissors'
  }

};

function determinWinner(userChoice, computerChoice) {

  if(userChoice === 'bomb'){
    return 'cheat code actived: You win'
  }
  if (userChoice === computerChoice)
  {
    return 'The game is a tie!';
  }

  if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The Computer won!';
    } 
    else {
      return 'You won!';
    }
  }

  if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The Computer won!';
    } 
    else {
      return 'You won!';
    }
  }

  if(userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The Computer won!';
    } 
    else {
      return 'You won!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determinWinner(userChoice, computerChoice));
};

playGame();
