var tiles = document.querySelectorAll('.tile');

var timer = null;
var startTime;


var playButton = document.querySelector('.play');
playButton.addEventListener('click', () => {
  shuffleTiles();
  startTimer();
});

window,onload = function(){
  shuffleTiles();
}

function shuffleTiles() {
  tiles.forEach(tile => {
    const randomOrder = Math.floor(Math.random() * tiles.length);
    tile.style.order = randomOrder;
  });
}


function startTimer() {
  startTime = Date.now();
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  var currentTime = Date.now();
  var timeElapsed = Math.floor((currentTime - startTime) / 1000);
  var minutes = Math.floor(timeElapsed / 60);
  var seconds = timeElapsed % 60;

  var timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}
