function playBackgroundMusic(filePath){
  const audio = new Audio(filePath);
  audio.volume = 0.5; // Set volume
  audio.play();
}