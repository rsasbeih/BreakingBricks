"use strict";

var sprites = {};
var sounds = {};

Game.loadAssets = function () {
    var loadSprite = function (sprite) {
        return Game.loadSprite("assets/GameSprites/sprites/" + sprite);
    };

    var loadSound = function (sound, looping) {
        return new Sound("assets/GameSprites/sounds/" + sound, looping);
    };
	//add the sprites and sounds you want here
    sprites.background = loadSprite("background2.png");
    sprites.scorebar = loadSprite("spr_scorebar.jpg");
    sprites.lives = loadSprite("spr_lives.png");
    sprites.gameover = loadSprite("spr_gameover_click.png");
    sounds.music = loadSound("snd_music");
    sounds.collect_points = loadSound("snd_collect_points");
    sounds.shoot_paint = loadSound("snd_shoot_paint");
};

Game.initialize = function () {
    // sound
    sounds.music.volume = 0.3;
    sounds.music.play();
    // create the game world
    Game.gameWorld = new MainGameWorld();
};