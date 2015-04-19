var DreamGame = {};

DreamGame.MainMenu = function(){};

DreamGame.MainMenu.prototype = {

	preload: function(){
		this.game.load.spritesheet('button', 'assets/button.png', 193, 71);
		this.game.load.spritesheet('hero','assets/hero.png',32,48);
		this.game.load.image("bg","assets/bg.png");
		this.game.load.image("ground","assets/ground.png");
	},
	
	create: function(){
	
		var button = this.game.add.button(this.game.world.centerX-95, this.game.world.centerY -30, 'button', changeState, this);
	
	},
	
	update: function(){
	}
};

function changeState(){
	
	//this.game.state.start('Intro');
	this.game.state.start('Gameplay');
};