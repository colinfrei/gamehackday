ig.module(
    'game.entities.enemy'
)
    .requires(
    'impact.entity'
)
.defines(function(){

    EntityEnemy = ig.Entity.extend({
        size: {x:30, y:30},
        type: ig.Entity.TYPE.B,
        animSheet: new ig.AnimationSheet('media/enemy.png', 50, 50),
        collides: ig.Entity.COLLIDES.LITE,
        sound: null,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.addAnim( 'idle', 0.1, [0,1,2,3,4,5,6,7]);

            if (window.soundManager) {
                this.sound = soundManager.createSound({
                    id: 'herbert_bzzt2',
                    url: 'media/herbert_bzzt2.' + soundManager.fileEnding
                });
            }
        },

        doHit: function (other) {
            other.receiveDamage(3, this);
            this.sound.play();
            this.kill();
        }
    });

});
