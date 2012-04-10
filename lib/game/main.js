ig.module( 
	'game.main' 
)
.requires(
    'impact.game',
    'impact.font',
    'game.levels.level1',
    'game.entities.hero'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	init: function() {
        this.loadLevel(LevelLevel1);

        ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind(ig.KEY.UP_ARROW, 'up');
        ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
        ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bindTouch("#leftButton", 'left');
        ig.input.bindTouch("#upButton", 'up');
        ig.input.bindTouch("#downButton", 'down');
        ig.input.bindTouch("#rightButton", 'right');

        this.hero = this.spawnEntity( EntityHero, 40, 40 );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
