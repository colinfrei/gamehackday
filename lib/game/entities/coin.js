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
            animSheet: new ig.AnimationSheet('media/coin_sheet.png', 30, 30),
            collides: ig.Entity.COLLIDES.LITE,
            sound: null,

            init: function( x, y, settings ) {
                this.addAnim( 'idle', 0.1, [0,1,2,3,4,5,6,7]);
                this.parent( x, y, settings );

                if (window.soundManager) {
                    this.sound = soundManager.createSound({
                        id: 'coin_up',
                        url: 'media/coin_up.caf.' + soundManager.fileEnding
                    });
                }
            },

            doHit: function (other) {
                other.receiveDamage(-3, this);
                this.sound.play();
                this.kill();
            }
        });

    });