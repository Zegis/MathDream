DreamGame.Gameplay = function() {};

DreamGame.Gameplay.prototype = {

	preload: function () {
	},
	
	create: function() {
	 text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "HELLO!", {
        font: "25px Arial",
        fill: "#ff0044",
        align: "center"
	})
	},
	
	update: function(){
	}

};