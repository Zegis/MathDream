var game = new Phaser.game(600,900, Phaser.AUTO, '');

game.state.add('Menu',DreamGame.Menu);
game.state.start('Menu');