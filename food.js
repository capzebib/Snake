function createFood(domElement) {
  this.x;
  this.y;
  this.domElement = domElement;

  this.randomPlace = function() {
    this.x = Math.floor(Math.random() * 30);
    this.y = Math.floor(Math.random() * 20);
  };

  this.drawFood = function() {
    this.domElement.style.gridColumn = this.x;
    this.domElement.style.gridRow = this.y;
  };
}
