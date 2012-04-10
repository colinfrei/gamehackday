ig.module(
    'game.screens.endscreen'
)
    .requires(
    'impact.game'
)
    .defines(function(){

        EndScreen = ig.Game.extend({

            instructText: new ig.Font( 'media/helvetica.font.png' ),
            background: new ig.Image('media/bg.png'),

            init: function() {
                ig.input.bindTouch('#canvas', 'start');
                ig.input.bind( ig.KEY.MOUSE1, 'start');
            },

            update: function() {
                if(ig.input.pressed ('start')){
                    ig.system.setGame(MyGame)
                }
                this.parent();
            },

            draw: function() {
                this.parent();
                this.background.draw(0,0);
                var x = ig.system.width/2,
                    y = ig.system.height/2;

                this.instructText.draw( 'You won!',  x, y-10, ig.Font.ALIGN.CENTER );
                this.instructText.draw( 'Click to restart',  x, y+10, ig.Font.ALIGN.CENTER );
            }
        });

    });
