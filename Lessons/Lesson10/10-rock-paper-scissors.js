const score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();      
console.log(localStorage.getItem('message'));
let result =''; //gloabal variable
function pickComputerMove(){
  let computerMove ='';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3){ 
    computerMove = 'rock'; }
  else if(randomNumber>=1/3 && randomNumber<2/3){ 
    computerMove ='paper'; }
  else if(randomNumber>=2/3 && randomNumber<1){ 
    computerMove = 'scissors'; }
  
  return computerMove;

}
function yourMove(move){
const computerMove = pickComputerMove();
if (move === 'rock'){

  if (computerMove === 'rock'){
    result = 'Tie.';
    score.ties++;
  } else if(computerMove === 'paper'){
    result = 'You lose.';
    score.losses++;
  } else if(computerMove === 'scissors'){
    result = 'You win.';
    score.wins++;
  }
}
else if(move === 'paper'){
    if (computerMove === 'rock'){
    result = 'You lose.';
    score.losses++;
  } else if(computerMove === 'paper'){
    result = 'Tie.';
    score.ties++;
  } else if(computerMove === 'scissors'){
    result = 'You win.';
    score.wins++;
  }}

else if (move === 'scissors'){
    
    if (computerMove === 'rock'){
      result = 'You lose';
      score.losses++;
    } else if(computerMove === 'paper'){
      result = 'You win.';
      score.wins++;
    } else if(computerMove === 'scissors'){
      result = 'Tie.';
      score.ties++;
    }
    localStorage.setItem('message','hello');
    localStorage.setItem('score', JSON.stringify(score));
    


}
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You <img src="images/${move}-emoji.png" alt="${move}">Computer <img src="images/${computerMove}-emoji.png" alt="${computerMove}"> `;
}
function resetScore(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
};

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins :${score.wins},losses:${score.losses},ties:${score.ties}`;
}