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
var restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', () => {
    shuffleTiles();
function shuffleTiles() {
    tiles.forEach(tile => {
      const randomOrder = Math.floor(Math.random() * tiles.length);
      tile.style.order = randomOrder;
    });
  }
});

