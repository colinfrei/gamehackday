ig.module(
    'game.entities.star'
)
    .requires(
    'impact.entity',
    'game.screens.endscreen'
)
    .defines(function(){

        EntityStar = ig.Entity.extend({
            size: {x:30, y:30},
            type: ig.Entity.TYPE.B,
            animSheet: new ig.AnimationSheet('media/star1.png', 37, 38),
            collides: ig.Entity.COLLIDES.LITE,

            init: function( x, y, settings ) {
                this.addAnim( 'idle', 0.1, [0]);

                this.parent( x, y, settings );
            },

            pickUp: function (other) {
                ig.system.setGame(EndScreen)
            }
        });

    });