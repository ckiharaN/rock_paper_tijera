function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const result = getGameResult(playerChoice, computerChoice);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Jugador eligió ${playerChoice}, Computadora eligió ${computerChoice}. ${result}`;
}

function getGameResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return '¡Es un empate!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Perdiste!';
  }
}
