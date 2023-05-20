const tiles = document.querySelectorAll('.tile');


//This function shuffles the 
// shuffleTiles();
// function shuffleTiles() {
//     tiles.forEach(tile => {
//       const randomOrder = Math.floor(Math.random() * tiles.length);
//       tile.style.order = randomOrder;
//     });
//   }

//when the Oops tryagain button is clicked the game reshuffles the tiles.
// var restartButton = document.querySelector('.restart');
// restartButton.addEventListener('click', () => {
//     shuffleTiles();
// function shuffleTiles() {
//     tiles.forEach(tile => {
//       const randomOrder = Math.floor(Math.random() * tiles.length);
//       tile.style.order = randomOrder;
//     });
//   }
// });

// Restart button
var playButton = document.querySelector('.play');
playButton.addEventListener('click', () => {
  shuffleTiles();
  startTimer();
});

// Function to shuffle tiles
function shuffleTiles() {
  tiles.forEach(tile => {
    const randomOrder = Math.floor(Math.random() * tiles.length);
    tile.style.order = randomOrder;
  });
}

// Timer variables
var timer = null;
var startTime;

// Function to start the timer
function startTimer() {
  startTime = Date.now();
  timer = setInterval(updateTimer, 1000);
}

// Function to update the timer display
function updateTimer() {
  var currentTime = Date.now();
  var timeElapsed = Math.floor((currentTime - startTime) / 1000);
  var minutes = Math.floor(timeElapsed / 60);
  var seconds = timeElapsed % 60;

  // Display the timer
  var timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}
// function to click the tiles. when clicked the display red color
function clickHandler(event) {
  var clickedTile = event.target;
  if (clickedTile.classList.contains('tile')) {
    clickedTile.style.backgroundColor ='red';
  }
}
