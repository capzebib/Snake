function Snake(domElement) {
  this.x = 10;
  this.y = 10;
  this.xSpeed = 1;
  this.ySpeed = 1;
  this.domElement = domElement;
  this.direction = "right";
  this.total = 0;
  this.tail = [];
  this.score = 0;

  this.grow = function(domElement) {
    if (this.tail.length === 0) {
      this.tail.push({
        element: domElement,
        x: this.x,
        y: this.y
      });
      domElement.style.gridColumn = this.x;
      domElement.style.gridRow = this.y;
    } else {
      this.tail.push({
        element: domElement,
        x: this.tail[this.tail.length - 1].x,
        y: this.tail[this.tail.length - 1].y
      });
      domElement.style.gridColumn = this.tail[this.tail.length - 1].x;
      domElement.style.gridRow = this.tail[this.tail.length - 1].y;
    }
  };

  //Draw snake & tail
  this.draw = function() {
    this.domElement.style.gridColumn = this.x;
    this.domElement.style.gridRow = this.y;
    for (let tail of this.tail) {
      tail.element.style.gridColumn = tail.x;
      tail.element.style.gridRow = tail.y;
    }

    this.score = document.querySelector(".score span");
    this.score.innerHTML = "Score: " + this.total;
  };

  this.update = function() {
    let oldHeadX = this.x;
    let oldHeadY = this.y;
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
    let previousTailX;
    let previousTailY;
    for (let i = 0; i < this.tail.length; i++) {
      if (i === 0) {
        previousTailX = this.tail[i].x;
        previousTailY = this.tail[i].y;
        this.tail[i].x = oldHeadX;
        this.tail[i].y = oldHeadY;
      } else {
        let oldY = this.tail[i].y;
        let oldX = this.tail[i].x;
        this.tail[i].x = previousTailX;
        this.tail[i].y = previousTailY;
        previousTailX = oldX;
        previousTailY = oldY;
      }
    }

    //Reset page if collision
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        document.location.reload(this.collision);
      }
    }
  };

  this.changeDirection = function(direction) {
    this.direction = direction;
  };

  this.eat = function(food) {
    if (this.x === food.x && this.y === food.y) {
      this.total++;

      var audio = new Audio(
        "./Sounds/zapsplat_human_crunch_potato_chip_crumb_002_11064.mp3"
      );
      audio.play();

      return true;
    } else {
      return false;
    }
  };
  //Score
  //   let score = this.total;
  //   console.log(this.total);
}
