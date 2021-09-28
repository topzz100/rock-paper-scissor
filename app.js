const gameStart = document.querySelector('.game-on');
const intro = document.querySelector('.intro');
const startGame = document.querySelector('.start-game');
const options = document.querySelectorAll('.option');
const playerScore = document.querySelector('.p-score-value')
const computerScore = document.querySelector('.c-score-value')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const notification = document.querySelector('.notification')

let pScore = 0;
let cScore = 0;

const computerOptions = ['rock', 'paper', 'scissors'];


options.forEach(option => {
  option.addEventListener('click', () => {
    gameAnimation();
     setTimeout(() => {
      const choice = computerChoice();
    
      player.src = `./images/${option.textContent}.png`;
      computer.src = `./images/${choice}.png`;
  
      checkWinner(option.textContent, choice)
      console.log(choice)
      console.log(option.textContent)
      removeAnimation()
     }, 1000)
   
  })
});

const gameAnimation = () => {
  player.src = `./images/rock.png`;
  computer.src = `./images/rock.png`;
  player.style.animation = 'player-animation 1s ease'
  computer.style.animation = `computer-animation 1s ease`
}

const removeAnimation = () => {
  player.style.animation = 'none'
  computer.style.animation = `none`
}

const computerChoice = () => {
  const compIndex = Math.floor(Math.random() * 3)

  return compChoice = computerOptions[compIndex]
};

startGame.addEventListener('click', () => {
  intro.classList.add('hide')
  gameStart.classList.add('show')

});


const checkWinner = (pChoice, cChoice) => {
  if(pChoice === cChoice){
    notification.textContent = `it's a tie`
  }else {
    if(pChoice === 'rock'){
      if(cChoice === 'paper'){
        notification.textContent = `computer wins`
        cScore++
        computerScore.textContent = cScore;
      }else{
        notification.textContent = `player wins`
        pScore++
        playerScore.textContent = pScore;
      }
      // notification.textContent = `player wins`
      // return
    }else if(pChoice === 'paper'){
      if(cChoice === 'rock'){
        notification.textContent = `player wins`
        pScore++
        playerScore.textContent = pScore;
      }else{
        notification.textContent = `computer wins`
        cScore++
        computerScore.textContent = cScore;
      }
    }else{
      if(cChoice === 'rock'){
        notification.textContent = `computer wins`
        cScore++
        computerScore.textContent = cScore;
      }else{
        notification.textContent = `player wins`
        pScore++
        playerScore.textContent = pScore;
      }
    }
  }
}