DreamGame.Intro = function() {};

DreamGame.Intro.prototype = {

	preload: function() {
	
		// fonts
		this.load.bitmapFont('font','assets/font/dream.png', 'assets/font/dream.fnt');
		var timer;
		var message;
		this.current = 0;
		this.progress = ["\n\n - I don't want to go tomorrow! Math is stupid!", "\n All that subtraction, and addition, who needs it?",	"\n\n- It's not that stupid, son\n You'll need it to count many things, how many \n candies left...", "\n\n - Math has something to do with candies?\n Then'll learn it! :D", "\n\n- Good boy, nighty-night", "\n\n- Night, mummy!", "\n\n\n...\nzzZzz...", "\n\n...\n... ZzzzZZzz...\n...Candies...", "\n\n\n\n         Press any key to start dreaming..."];
		
		
	},
	
	create: function() {
	
		timer = game.time.create(false);
		timer.add(300, this.progressIntro, this);
		timer.start();
		
		message = "- Go to sleep, son.\n You must rest before tomorrows\' math test!"
	
	},
	
	update: function() {
		game.debug.text("Time until event: " + timer.duration.toFixed(0), 10, 20);
	},
	
	render: function(){
		
	}

};

DreamGame.Intro.prototype.progressIntro = function () {

	this.introTxt = this.game.add.bitmapText(25,25, 'font', message, 20);
	message += this.progress[this.current];
	
	if(this.current < this.progress.length)
	{
		this.current +=1;
		timer.add(1000, this.progressIntro, this);
	}
	else{
		this.game.input.keyboard.onDownCallback = function(e){
			console.log(e.keyCode);
			this.game.state.start("Gameplay");
			this.game.input.keyboard.onDownCallback = null;
		};
	}
}