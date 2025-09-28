//define game logic variables
let cash = 100;
let cashDisplay = `$${cash}`;
let day = 1;
let time = "Night";



function updateDisplays(){
    document.getElementById("cash").innerText = cashDisplay;
    document.getElementById("day").innerText = `Day: ${day}`;
    document.getElementById("time").innerText = `Time: ${time}`;
}
function updatePhonePerson(imagePath){
    document.getElementById("person").style.backgroundImage = `url('${imagePath}')`;
    document.getElementById("person").style.backgroundSize = "contain";
    document.getElementById("person").style.backgroundPosition = "center";
    document.getElementById("person").style.backgroundRepeat = "no-repeat";
}
function changeBackground(imagePath){
    document.body.style.backgroundImage = `url('${imagePath}')`;
    document.body.style.backgroundSize = "70%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
function phoneCallSound(){
  const audio = new Audio('ring1.mp3');
  audio.volume = 0.5; // Set volume
  audio.play();
}
function playBackgroundMusic(filePath){
  const audio = new Audio(filePath);
  audio.volume = 0.5; // Set volume
  audio.play();
}
function displayPhone(){
    document.getElementById("iphone").style.display="block";
}
function phoneCallChef(){
    displayPhone();
    updatePhonePerson('oldChef.jpg');
    document.getElementById("screen").innerText = "Chef";
}
function playLoadingSound(){
  const audio = new Audio('loading1.mp3');
  audio.volume = 0.5; // Set volume
  audio.play();
}
function startGame(){
    playBackgroundMusic(`japanLofiCut.mp3`);
    document.getElementById("welcomeMessage").style.display="none";
    document.getElementById("startButton").style.display="none";
    document.getElementById("cashBox").style.display="flex";
    document.getElementById("restaraunt").style.display="flex";
    document.getElementById("dayBox").style.display="flex";
    document.getElementById("timeBox").style.display="flex";
    document.getElementById("howToPlay").style.display="block";
    changeBackground('night1.jpg');
    updateDisplays();
    playLoadingSound();
} 