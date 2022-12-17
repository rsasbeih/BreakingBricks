"use strict";
	var c;
	var r;
function MainGameWorld() {
    this.brickRowCount = 5;
	this.brickColumnCount = 3;
	this.brickPadding = 40;
	this.brickOffsetTop = 80;
	this.brickOffsetLeft = 150;
	this.bricks=[];
	for(c=0; c<this.brickColumnCount; c++) {
    this.bricks[c] = [];
    for(r=0; r<this.brickRowCount; r++) {
        this.bricks[c][r] = {x : 0, y : 0 , status : 1 };
    }
		}
	this.brick=new Brick();
	this.paddle=new Paddle();
	this.ball=new Ball();
    this.score = 0;
	this.lives = 3;
}

MainGameWorld.prototype.handleInput = function (delta) {
   if (this.lives > 0) {
	this.paddle.handleInput(delta);
   }
};

MainGameWorld.prototype.update = function (delta) {
	if (this.lives > 0) {
	this.paddle.update();
	//this.ball.update();
	if( this.ball.position.x + this.ball.dx < this.ball.radius) {
        this.ball.dx = -this.ball.dx;
    }
	else if(this.ball.position.x + this.ball.dx > Canvas2D._canvas.width-this.ball.radius){
		 this.ball.dx = -this.ball.dx;
	}
    if(this.ball.position.y + this.ball.dy < this.ball.radius) {
        this.ball.dy = -this.ball.dy;
    }
	else if(this.ball.position.y + this.ball.dy > Canvas2D._canvas.height-this.ball.radius){
	   if(this.ball.position.x > this.paddle.position.x && this.ball.position.x < this.paddle.position.x + this.paddle.width) {
        this.ball.dy = -this.ball.dy;
    }
    else {
	this.lives--;
	if(!this.lives) {
    alert("GAME OVER");
    document.location.reload();
	}
	else {
		this.ball.reset();
		this.paddle.reset();
	}
	}
	}
    this.ball.position.x += this.ball.dx;
    this.ball.position.y += this.ball.dy;
	   for(c=0; c<this.brickColumnCount; c++) {
        for(r=0; r<this.brickRowCount; r++) {
            var b = this.bricks[c][r];
            if(b.status == 1) {
                if(this.ball.position.x > b.x && this.ball.position.x < b.x+this.brick.width && this.ball.position.y > b.y && this.ball.position.y < b.y+this.brick.height) {
                    this.ball.dy = -this.ball.dy;
                    b.status = 0;
					 this.score++;
					 sounds.collect_points.play();
                    if(this.score == this.brickRowCount*this.brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
	}
};

MainGameWorld.prototype.draw = function () {
    Canvas2D.drawImage(sprites.background);
    Canvas2D.drawImage(sprites.scorebar, new Vector2(10, 10));
    Canvas2D.drawText("Score: " + this.score, new Vector2(20, 22), Color.white);
	Canvas2D.drawImage(sprites.scorebar, new Vector2(600, 10));
    Canvas2D.drawText("Lives: " + this.lives, new Vector2(620, 22), Color.white);
	this.paddle.draw();
	this.ball.draw();
	 for(c=0; c<this.brickColumnCount; c++) {
        for(r=0; r<this.brickRowCount; r++) {
			 if(this.bricks[c][r].status == 1) {
            var brickX = (r*(this.brick.width+this.brickPadding))+this.brickOffsetLeft;
            var brickY = (c*(this.brick.height+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = brickX;
            this.bricks[c][r].y = brickY;
			 }
			 this.brick.draw(brickX,brickY);
        }
    }

};

MainGameWorld.prototype.reset = function () {
 
};

MainGameWorld.prototype.isOutsideWorld = function (position) {
    return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y;
};