function Snake(domElement) {
    this.x = 15;
    this.y = 10;
    this.xSpeed = 1;
    this.ySpeed = 1;
    this.domElement = domElement;
    this.direction = "right"
    // touch: "right"
    this.draw = function () {
        this.domElement.style.gridColumn = this.x;
        this.domElement.style.gridRow = this.y;
        //Equivalent ci-dessous si on utilise canvas
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x, this.y, 20, 20);
    }

    this.update = function () {
        if (this.direction === "left" && this.x > 0) {
            this.x -= this.xSpeed;
        } else if (this.direction === "left" && this.x <= 0) {
            this.x = 30;
        } else if (this.direction === "right" && this.x < 30) {
            this.x += this.xSpeed;
        } else if (this.direction === "right" && this.x >= 30) {
            this.x = 1;
        } else if (this.direction === "up" && this.y > 0) {
            this.y -= this.ySpeed;
        } else if (this.direction === "up" && this.y <= 0) {
            this.y = 20;
        } else if (this.direction === "down" && this.y < 20) {
            this.y += this.ySpeed;
        } else if (this.direction === "down" && this.y >= 20) {
            this.y = 1;
        }
    }

    this.changeDirection = function (direction) {
        this.direction = direction;
    }

    this.eat = function (food) {
        if (this.x === food.x && this.y === food.y) {
            return true;
        } else {
            return false;
        }
        console.log("yo");
    }
}

// let food = {
//     posX: random(0, ".map grid-template-rows" - 1),
//     posY: random(0, ".map grid-template-rows" - 1)
// }