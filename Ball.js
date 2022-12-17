function Ball(){
	this.position=new Vector2(Canvas2D._canvas.width/2,Canvas2D._canvas.height-30);
	this.radius=10;
	this.dx=-2;
	this.dy=-2;
}
Ball.prototype.handleInput= function (delta){
};
Ball.prototype.update = function (){
};
Ball.prototype.reset= function(){
	this.position=new Vector2(Canvas2D._canvas.width/2,Canvas2D._canvas.height-30);
	this.dx=-2;
	this.dy=-2;
};

Ball.prototype.draw = function () {
 Canvas2D._canvasContext.beginPath();
Canvas2D._canvasContext.arc(this.position.x, this.position.y, 10, 0, Math.PI*2);
Canvas2D._canvasContext.fillStyle = Color.white;
Canvas2D._canvasContext.fill();
Canvas2D._canvasContext.closePath();
};