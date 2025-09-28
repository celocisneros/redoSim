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
    document.body.style.backgroundImage = "url('day1.jpg')";
    document.body.style.backgroundSize = "70%";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}