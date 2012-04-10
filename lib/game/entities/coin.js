ig.module(
    'game.entities.coin'
)
    .requires(
    'impact.entity'
)
    .defines(function(){

        EntityCoin = ig.Entity.extend({
            size: {x:30, y:30},
            type: ig.Entity.TYPE.B,
            animSheet: new ig.AnimationSheet('media/ring1.png', 30, 30),
            collides: ig.Entity.COLLIDES.LITE,
            sound: null,

            init: function( x, y, settings ) {
                this.addAnim( 'idle', 0.1, [0] );
                this.parent( x, y, settings );
                this.sound = new ig.Sound('media/coin_up.caf.*');
            },

            pickUp: function (other) {
                other.receiveDamage(-5, this);
                this.sound.play();
                this.kill();
            }
        });

    });