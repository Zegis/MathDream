DreamGame.Gameplay = function() {};

DreamGame.Gameplay.prototype = {

	preload: function () {
	},
	
	create: function() {
	
		game.add.sprite(0,0,"bg");
	
		player = this.game.add.sprite(32, game.world.height - 150, "hero");
		
		player.animations.add("left",[0,1,2,3],10,true);
		player.animations.add("right",[5,6,7,8],10,true);
		
		cursors = game.input.keyboard.createCursorKeys();
	},
	
	update: function(){
	
		if(cursors.left.isDown)
		{
			//player.body.velocity.x = -150;
			player.animations.play('left');
		}
		else if(cursors.right.isDown)
		{
			//player.body.velocity.x = 150;
			player.animations.play('right');
		}
		else
		{
			player.animations.stop();
			player.frame = 4;
		}
	
	}

};