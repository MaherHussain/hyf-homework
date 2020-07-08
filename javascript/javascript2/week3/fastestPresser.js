const timeinput = document.getElementById("startInput");
const startBtn = document.getElementById("start");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
// prevent the user to type in input field
timeinput.onkeydown = (e) => {
  e.preventDefault;
  return false;
};

let totlaNumberOfSeconds;

let player1PressCount = 0;
let player2PressCount = 0;

timeinput.addEventListener("input", (event) => {
  
  // @ts-ignore
  totlaNumberOfSeconds = timeinput.value;
  console.log(totlaNumberOfSeconds);
});
startBtn.addEventListener("click", gameStart);

function countKeyPress(event) {
  if (event.keyCode == 115) {
    player1PressCount++;
    player1.innerHTML = `${player1PressCount}`;
  }
  if (event.keyCode == 112) {
    player2PressCount++;
    player2.innerHTML =  `${player2PressCount}`;
  }
}
function gameStart() {
  document.addEventListener("keypress", countKeyPress);

  setTimeout(() => {
     if (player1PressCount > player2PressCount) {
        player1.innerHTML += "<br> winner";
        player2.innerHTML += "";
        document.removeEventListener("keypress", countKeyPress);
      } else if (player1PressCount < player2PressCount) {
        player1.innerHTML += "";
        player2.innerHTML += "<br> winner";
        document.removeEventListener("keypress", countKeyPress);
      } else {
        // if both players have same press count game is tie and game over
        player1.innerHTML += " <br> draw";
        player2.innerHTML += " <br> draw";
      }

      //when game over clear both counters and remove key listener
      player1PressCount = 0;
      player2PressCount = 0;
      document.removeEventListener("keypress", countKeyPress);
    
     
  }, totlaNumberOfSeconds * 1000);
}
