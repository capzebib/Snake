let snake = new Snake(document.getElementById("snake"));
let food = new createFood(document.getElementById("food"));
// let tail = new createTail(snake, document.getElementById("tail"));
const map = document.getElementById("map");
food.randomPlace();
food.drawFood();

let audio = new Audio("./Sounds/zapsplat_fantasy_cauldron_boiling.mp3");
audio.play();
audio.loop = true;

window.setInterval(() => {
  snake.update();
  snake.draw();
  if (snake.eat(food)) {
    let tailElement = document.createElement("div");
    tailElement.className = "tail";

    snake.grow(tailElement);
    map.appendChild(tailElement);
    food.randomPlace();
    food.drawFood();
  }
}, 200);

window.onkeydown = function(e) {
  if (e.code === "ArrowLeft" && snake.direction != "right") {
    snake.changeDirection("left");
  } else if (e.code === "ArrowRight" && snake.direction != "left") {
    snake.changeDirection("right");
  } else if (e.code === "ArrowUp" && snake.direction != "down") {
    snake.changeDirection("up");
  } else if (e.code === "ArrowDown" && snake.direction != "up") {
    snake.changeDirection("down");
  }
};

//   let stp_btn = document.getElementById("stp_btn");
//   stp_btn.addEventListener("click", Start);
//   function Start() {
//     console.log("started");
//     stp_btn.removeEventListener("click", Start);
//     stp_btn.addEventListener("click", Stop);
//     stp_btn.value = "Stop";
//   }
//   function Pause() {
//     console.log("Paused");
//     stp_btn.removeEventListener("click", Stop);
//     stp_btn.addEventListener("click", Start);
//     stp_btn.value = "Start";
//   }
