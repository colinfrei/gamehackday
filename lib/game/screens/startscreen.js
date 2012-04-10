ig.module(
    'game.screens.startscreen'
)
    .requires(
    'impact.game',
    'game.screens.mainscreen'
)
    .defines(function(){

        StartScreen = ig.Game.extend({

            instructText: new ig.Font( 'media/helvetica.font.png' ),
            background: new ig.Image('media/bg.png'),

            init: function() {
                // public start method.. used by the audio overlay hack
                StartScreen.start = this.start;
            },

            start: function() {
                var overlay = document.getElementById('overlay');
                if (overlay) {
                    overlay.style.display = 'none';
                }
                ig.system.setGame(MyGame);
            },

            update: function() {
                this.parent();
            },

            draw: function() {
                this.parent();
                this.background.draw(0,0);
                var x = ig.system.width/2,
                    y = ig.system.height/2;

                this.instructText.draw( 'Startscreen: Tap screen to start!',  x, y, ig.Font.ALIGN.CENTER );
            }
        });

    });
