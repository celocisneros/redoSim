//define game logic variables
let cash = 100;
let cashDisplay = `💵 $${cash}`;
let job = "Dishwasher";
let jobDisplay = `👔 ${job}`;

function startGame(){
  document.getElementById('welcomeMessage').style.display = "none";
  document.getElementById('welcomeButton').style.display = "none";
  document.getElementById('map').style.display = "flex";
  document.getElementById('playerStats').style.display = "flex";
}
function updateStats(){
  document.getElementById('cash').innerText = cashDisplay;
  document.getElementById('job').innerText = jobDisplay;
}
updateStats();