let snake = new Snake(document.getElementById("snake"));
let food = new createFood(document.getElementById("food"));

food.randomPlace();
food.drawFood()
window.setInterval(() => {
    snake.update();
    snake.draw();
    if (snake.eat(food)) {
        food = new createFood(document.getElementById("food"));
    }
}, 300)





console.log(snake);
console.log(food);

window.onkeydown = function (e) {
    if (e.code === "ArrowLeft" && snake.direction !== "right") {
        snake.changeDirection("left");
    } else if (e.code === "ArrowRight" && snake.direction !== "left") {
        snake.changeDirection("right")
    } else if (e.code === "ArrowUp" && snake.direction !== "down") {
        snake.changeDirection("up");
    } else if (e.code === "ArrowDown" && snake.direction !== "up") {
        snake.changeDirection("down");
    }
}