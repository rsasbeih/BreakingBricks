function Paddle(){
	this.width=75;
	this.height=10;
	this.rightPressed=false;
	this.leftPressed=false;
	this.position=new Vector2(Canvas2D._canvas.width-this.width,Canvas2D._canvas.height-this.height);
}
Paddle.prototype.handleInput = function(delta){
	if (Touch.isTouching)
	this.handleInputTouch(delta);
	else
	//this.handleInputKeyboard(delta);
	this.handleInputMouse(delta);
};
Paddle.prototype.handleInputKeyboard= function (delta){
	if(Keyboard.keyDown == Keys.left && this.position.x > 0 ){
	 this.position.x = this.position.x -7;
	 this.leftPressed = true;
}
else if(Keyboard.keyDown == Keys.right && this.position.x < Canvas2D._canvas.width-this.width ){
	this.position.x = this.position.x +7;
	 this.rightPressed = true;
}
};
Paddle.prototype.handleInputMouse = function(delta){
	this.position.x=Mouse.position.x;
};
Paddle.prototype.handleInputTouch = function(delta){
	//if (Touch.isTouching){
	var touchPos = Touch.getPosition(0);
	this.position.x=touchPos.x;
	//}
};

Paddle.prototype.update = function (){
};
Paddle.prototype.reset = function (){
	this.position=new Vector2(Canvas2D._canvas.width-this.width,Canvas2D._canvas.height-this.height);
};
Paddle.prototype.draw = function () {
    Canvas2D._canvasContext.beginPath();
    Canvas2D._canvasContext.rect(this.position.x,Canvas2D._canvas.height-this.height, this.width, this.height);
    Canvas2D._canvasContext.fillStyle = Color.black;
    Canvas2D._canvasContext.fill();
    Canvas2D._canvasContext.closePath();
};