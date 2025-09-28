let cash = 100;
let cashDisplay = `$${cash}`;
let day = 1;



function updateDisplays(){
    document.getElementById("cash").innerText = cashDisplay;
}

function chnageBackground(imagePath){
    document.body.style.backgroundImage = `url('${imagePath}')`;
    document.body.style.backgroundSize = "70%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
function playBackgroundMusic(filePath){
  const audio = new Audio(filePath);
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
    chnageBackground('day1.jpg');
    updateDisplays();
} 