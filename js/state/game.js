DreamGame.Gameplay = function() {};

DreamGame.Gameplay.prototype = {

	preload: function () {
	},
	
	create: function() {
	
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
		this.game.add.sprite(0,0,"bg");
	
		this.prepareHero();
		
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
		this.ground = this.platforms.create(0, game.world.height-60, 'ground');
		this.ground.scale.setTo(2,1);
		this.ground.body.immovable = true;
		
		this.cursors = game.input.keyboard.createCursorKeys();
	},
	
	update: function(){
	
		this.game.physics.arcade.collide(this.player,this.platforms);
		this.player.body.velocity.x=0;
		if(this.cursors.left.isDown)
		{
			this.player.body.velocity.x = -150;
			this.player.animations.play('right');
			//this.player.animations.play('left');
		}
		else if(this.cursors.right.isDown)
		{
			this.player.body.velocity.x = 150;
			
			this.player.animations.play('left');
			//this.player.animations.play('right');
		}
		else
		{
			this.player.animations.stop();
			this.player.frame = 4;
		}
	
	}

};

DreamGame.Gameplay.prototype.prepareHero = function(){

	this.player = this.game.add.sprite(32, game.world.height - 150, "hero");
		
	this.player.animations.add("left",[0,1,2,3],10,true);
	this.player.animations.add("right",[5,6,7,8],10,true);
	
	this.game.physics.arcade.enable(this.player);
	
	this.player.body.bounce.y = 0;
	this.player.body.gravity.y = 3;
	this.player.body.collideWorldBounds = true;

}