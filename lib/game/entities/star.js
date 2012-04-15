ig.module(
    'game.entities.star'
)
    .requires(
    'impact.entity',
    'game.screens.endscreen'
)
    .defines(function(){

        EntityStar = ig.Entity.extend({
            size: {x:37, y:38},
            type: ig.Entity.TYPE.B,
            animSheet: new ig.AnimationSheet('media/star1.png', 37, 38),
            collides: ig.Entity.COLLIDES.LITE,

            init: function( x, y, settings ) {
                this.addAnim( 'idle', 0.1, [0]);

                this.parent( x, y, settings );
            },

            doHit: function (other) {
                ig.system.setGame(EndScreen)
            }
        });

    });