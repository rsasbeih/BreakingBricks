function Brick(){
this.width=75;
this.height=20;
this.position=new Vector2(0,0);

}
Brick.prototype.handleInput= function (delta){
};
Brick.prototype.update = function (){
};
Brick.prototype.draw = function (brickX,brickY) {
 Canvas2D._canvasContext.beginPath();
Canvas2D._canvasContext.rect(brickX, brickY, this.width, this.height);
Canvas2D._canvasContext.fillStyle = Color.red;
Canvas2D._canvasContext.fill();
Canvas2D._canvasContext.closePath();
};