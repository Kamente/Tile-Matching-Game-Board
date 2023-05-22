var tiles = document.querySelectorAll('.tile');
var Play = document.querySelector('.play');
var movesCount = 0;
let startTime;
var timer = null;
let firstClickedTile = null;
let matchedCount = 0; 

Play.addEventListener('click', function() {
  resetGame();
  shuffleTiles();
  startTimer();
});

tiles.forEach(function(tile) {
  tile.addEventListener('click', clickHandler);
});

function shuffleTiles() {
  tiles.forEach(function(tile) {
    var randomOrder = Math.floor(Math.random() * tiles.length);
    tile.style.order = randomOrder;
    tile.classList.remove('matched');
    tile.classList.remove('selected');
  });
}

window.onload = function(){
  shuffleTiles();
}

function clickHandler(event) {
  var clickedTile = event.target.closest('.tile');

  if (clickedTile.classList.contains('selected')) {
    return;
  }

  clickedTile.classList.add('selected');
  clickedTile.classList.remove('matched');
  movesCount++; 

  if (firstClickedTile === null) {
    firstClickedTile = clickedTile;
    startTimer(); 
    return;
  }

  var firstAlt = firstClickedTile.querySelector('img').alt;
  var secondAlt = clickedTile.querySelector('img').alt;

  if (firstAlt === secondAlt) {
    console.log("Congrats Big Guy &#128512.");
    firstClickedTile.classList.add('matched');
    clickedTile.classList.add('matched');
    firstClickedTile.classList.remove('selected');
    clickedTile.classList.remove('selected');
    firstClickedTile = null;
    matchedCount += 2;

    if (matchedCount === tiles.length) {
      clearInterval(timer); 
      console.log("Total Moves: " + movesCount);
      alert("Congrats Big Guy");
    }
  }
  else {

    alert("Not Identical! Press play Again");
  }
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
  timerDisplay.textContent =
    minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function resetGame() {
  clearInterval(timer);
  var timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = '00:00';

  tiles.forEach(function(tile) {
    tile.classList.remove('matched');
    tile.classList.remove('selected');
  });

  firstClickedTile = null;
  matchedCount = 0;
  movesCount = 0;
}


