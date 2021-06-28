const score = document.querySelector(".score");
const start = document.querySelector(".start");
const gameArea = document.querySelector(".gameArea");
const car = document.createElement("div");
car.classList.add("car");
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};
const setting = {
  start: false,
  score: 0,
  speed: 3,
};
start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

function startGame() {
  start.classList.add("hide");
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}
function playGame() {
  console.log("play game");
  if (setting.start === true) {
    requestAnimationFrame(playGame);
  }
}
function startRun(event) {
  if (event.key === "F5") {
    keys[event.key] = true;
  } else {
    event.preventDefault();
    keys[event.key] = true;
  }
}
function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
}
