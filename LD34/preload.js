var preload = {

preload: function()
{
 game.load.audio("gameover_music","Gameover.mp3",true);
 game.load.image("fundo","fundo.png");
 game.load.audio("victory_music","Victory!.mp3",true);
 game.load.spritesheet("trevor_sprites","trevor.png",16,32);
 game.load.spritesheet("inimigos","inimigos.png",16,16);
 game.load.image("tileset","tileset.png");
 game.load.tilemap("nivel1","mapa_de_zoas.json",null,Phaser.Tilemap.TILED_JSON);
 game.load.image("play_button","play_button.png");
 game.load.audio("menu_music","Access.mp3",true);
 game.load.audio("nivel1_music","MischievousRobot.mp3",true);
 game.load.audio("jump","Jump.wav",true);
 game.load.audio("hurt","Hurt.wav",true);
 game.load.audio("attack","attack.wav",true);
},

create: function()
{
 game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
 game.scale.setUserScale(Math.round(window.innerWidth / 320) - 2,Math.round(window.innerWidth / 320) - 2);
 game.context.webkitImageSmoothingEnabled = false;
 game.context.mozImageSmoothingEnabled = false;
 game.context.ImageSmoothingEnabled = false;
 game.stage.scale.pageAlignHorizontally = true;
 game.stage.scale.pageAlignVeritcally = true;
 game.state.start("menu");
}


};
