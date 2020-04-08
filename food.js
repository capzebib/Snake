function createFood(domElement) {
    this.x;
    this.y;
    this.domElement = domElement;

    this.drawFood = function () {
        this.domElement.style.gridColumn = this.x;
        this.domElement.style.gridRow = this.y;
    }

    this.randomPlace = function () {
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.floor(Math.random() * 20);
    }
    this.eat = function (food) {
        if (snake.x === food.x && snake.y === food.y) {
            return true;
        } else {
            return false;
        }
    }

}