ig.module( 
	'game.main' 
)
.requires(
    'impact.game',
    'game.screens.startscreen'
//    'impact.debug.debug'
)
.defines(function(){

// Start the Game with 60fps, a resolution of 320x240, scaled
ig.main( '#canvas', StartScreen, 60, 480, 320, 1 );

});
