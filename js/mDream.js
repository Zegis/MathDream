var game = new Phaser.Game(600,900, Phaser.AUTO, '');

game.state.add('Menu',DreamGame.MainMenu);
game.state.add('Gameplay',DreamGame.Gameplay);
game.state.start('Menu');